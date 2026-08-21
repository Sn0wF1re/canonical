import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { fullName, email, phone, subject, message, inquiryType } = body

  if (!fullName || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: fullName, email, message'
    })
  }

  // Placeholder mode: log to console until Resend domain is verified
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
  // await resend.emails.send({
  //   from: 'Canonical Realty <info@canonicalrealty.com>',
  //   to: 'info@canonicalrealty.com',
  //   subject: `[${inquiryType || 'General'}] ${subject || 'New inquiry from ' + fullName}`,
  //   html: `
  //     <h2>New ${inquiryType || 'General'} Inquiry</h2>
  //     <p><strong>Name:</strong> ${fullName}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
  //     <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
  //     <p><strong>Message:</strong></p>
  //     <p>${message}</p>
  //   `
  // })

  return { success: true, message: 'Your inquiry has been received. We will respond within one business day.' }
})
