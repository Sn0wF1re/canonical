export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { fullName, email, phone, subject, message, inquiryType } = body

  if (!fullName || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: fullName, email, message'
    })
  }

  console.log('[Contact Form Submission]', {
    fullName,
    email,
    phone,
    subject,
    message,
    inquiryType,
    timestamp: new Date().toISOString()
  })

  // TODO: Enable once canonicalrealty.com domain is verified in Resend
  // 1. Install: bun add resend
  // 2. Set env: RESEND_API_KEY=re_...
  // 3. Uncomment below and remove console.log above
  //
  // import { Resend } from 'resend'
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'Canonical Realty <info@canonicalrealty.com>',
  //   to: 'info@canonicalrealty.com',
  //   subject: `[${inquiryType || 'General'}] ${subject || 'New inquiry from ' + fullName}`,
  //   html: `...`
  // })

  return { success: true, message: 'Your inquiry has been received. We will respond within one business day.' }
})
