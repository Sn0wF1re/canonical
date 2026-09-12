import nodemailer from 'nodemailer'
import { buildInquiryEmail, type InquiryPayload } from '../utils/inquiry-email'
import { getClientIp, hasTooManyUrls, isTooFast, rateLimitState } from '../utils/anti-abuse'

const SMTP_HOST = 'smtp.gmail.com'
const RATE_LIMIT_FALLBACK_SECONDS = 10 * 60

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null

function getTransport() {
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!user || !pass) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Email service not configured',
      message: 'SMTP credentials are missing on the server.'
    })
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 465,
      secure: true,
      auth: { user, pass }
    })
  }

  return transporter
}

export default defineEventHandler(async (event) => {
  const body = await readBody<InquiryPayload>(event)

  const fullName = String(body?.fullName ?? '').trim()
  const email = String(body?.email ?? '').trim()
  const message = String(body?.message ?? '').trim()

  const missing = [
    !fullName && 'fullName',
    !email && 'email'
  ].filter(Boolean)

  if (missing.length) {
    // Self-diagnosing: log received field names (never values) so a
    // client/server contract drift is traceable from the terminal.
    const receivedKeys = body && typeof body === 'object' ? Object.keys(body) : []
    console.warn(
      `[Contact] rejected submission — missing/empty: ${missing.join(', ')}`,
      `| received keys: ${receivedKeys.length ? receivedKeys.join(', ') : '(none)'}`
    )
    throw createError({
      statusCode: 400,
      statusMessage: `Missing or empty required fields: ${missing.join(', ')}`
    })
  }

  const clientIp = getClientIp(getRequestHeaders(event))

  // Honeypot: humans never fill this hidden field. Respond like a success
  // so bots learn nothing, and send nothing.
  if (body?.website) {
    console.warn('[Contact] rejected: honeypot')
    return { success: true, message: 'Your inquiry has been received. We will respond within one business day.' }
  }

  // Tier 2 first: Cloudflare Turnstile is the human/bot gate, verified only
  // when a secret is configured. Bots get the same silent fake success; once
  // verified, throttling can be honest with a human.
  let verifiedAsHuman = false
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
  if (turnstileSecret) {
    const token = String(body?.token ?? '')
    if (!token) {
      console.warn('[Contact] rejected: no turnstile token')
      return { success: true, message: 'Your inquiry has been received. We will respond within one business day.' }
    }
    try {
      const verification = await $fetch<{ success: boolean }>('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: {
          secret: turnstileSecret,
          response: token,
          remoteip: clientIp
        }
      })
      if (!verification.success) {
        console.warn('[Contact] rejected: turnstile verification failed')
        return { success: true, message: 'Your inquiry has been received. We will respond within one business day.' }
      }
      verifiedAsHuman = true
    } catch (error) {
      // Fail open on transient verification-API errors: log loudly instead
      // of blocking real inquiries on a third-party hiccup.
      console.error('[Contact] turnstile verification request failed:', error)
    }
  }

  // Tier 1 content checks — silent drop, humans basically never trip these.
  if (isTooFast(body?.loadedAt)) {
    console.warn('[Contact] rejected: sub-3s-submit')
    return { success: true, message: 'Your inquiry has been received. We will respond within one business day.' }
  }
  if (hasTooManyUrls(body)) {
    console.warn('[Contact] rejected: link-spam')
    return { success: true, message: 'Your inquiry has been received. We will respond within one business day.' }
  }

  // Rate limit. If it trips for a Turnstile-verified human, be honest about
  // it — no countdown gimmicks, just an approximate wait. If we cannot know
  // the submitter is human (no secret configured), stay silent.
  const now = Date.now()
  const limit = rateLimitState(clientIp, now)
  if (!limit.allowed) {
    const minutes = Math.max(1, Math.ceil((limit.retryAfterSeconds ?? RATE_LIMIT_FALLBACK_SECONDS) / 60))
    if (verifiedAsHuman || !turnstileSecret) {
      console.warn(`[Contact] rate-limited ${clientIp} — retry in ~${minutes}min`)
      throw createError({
        statusCode: 429,
        statusMessage: 'Too many submissions',
        message: `You've submitted several inquiries recently. Please try again in about ${minutes} minutes, or reach us directly at +254 712 244 494.`,
        data: { retryAfterSeconds: limit.retryAfterSeconds }
      })
    }
    console.warn(`[Contact] rejected: rate-limit (unverified) ${clientIp}`)
    return { success: true, message: 'Your inquiry has been received. We will respond within one business day.' }
  }

  const inquiry = buildInquiryEmail({ ...body, fullName, email, message })
  const inbox = process.env.SMTP_USER!

  try {
    const transport = getTransport()
    await transport.sendMail({
      from: `"Canonical Realty Website" <${inbox}>`,
      to: inbox,
      replyTo: email,
      subject: inquiry.subject,
      html: inquiry.html,
      text: inquiry.text
    })
  } catch (error) {
    console.error('[Contact] failed to send inquiry email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send inquiry',
      message: 'We could not deliver your inquiry just now. Please try again, or reach us on WhatsApp.'
    })
  }

  return { success: true, message: 'Your inquiry has been received. We will respond within one business day.' }
})
