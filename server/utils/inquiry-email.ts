export interface InquiryPayload {
  type: string
  fullName: string
  email: string
  phone?: string
  message: string
  details?: Record<string, string | undefined>
  website?: string
  token?: string
  loadedAt?: number
}

export interface BuiltInquiry {
  subject: string
  html: string
  text: string
}

const TYPE_LABELS: Record<string, string> = {
  valuation: 'Valuation',
  management: 'Property Management',
  agency: 'Estate Agency',
  contact: 'Contact',
  'quick-intake': 'Website Inquiry'
}

const MAX = {
  fullName: 120,
  email: 200,
  phone: 40,
  message: 4000,
  detailValue: 300,
  detailKeys: 15
}

const clean = (value: unknown, max: number) =>
  String(value ?? '').replace(/\s+/g, ' ').trim().slice(0, max)

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

function row(label: string, value: string): string {
  return `<tr>
  <td style="padding:8px 16px;vertical-align:top;background-color:#F7F8F5;border-bottom:1px solid #E5E8E3;width:160px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:#5D655F;">${escapeHtml(label)}</td>
  <td style="padding:8px 16px;vertical-align:top;background-color:#F7F8F5;border-bottom:1px solid #E5E8E3;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#151A17;">${escapeHtml(value)}</td>
</tr>`
}

export function buildInquiryEmail(payload: InquiryPayload): BuiltInquiry {
  const fullName = clean(payload.fullName, MAX.fullName)
  const email = clean(payload.email, MAX.email)
  const phone = clean(payload.phone, MAX.phone)
  const message = clean(payload.message, MAX.message)

  const typeLabel = TYPE_LABELS[payload.type] ?? 'Website Inquiry'
  const received = new Date().toISOString().replace('T', ' ').slice(0, 16)

  const detailEntries = Object.entries(payload.details ?? {})
    .filter(([key, value]) => !!(key && value && String(value).trim()))
    .slice(0, MAX.detailKeys)
    .map(([key, value]) => [clean(key, 60), clean(value, MAX.detailValue)] as const)

  const coreRows = [
    row('Name', fullName),
    row('Email', email),
    ...(phone ? [row('Phone', phone)] : []),
    ...detailEntries.map(([key, value]) => row(key, value)),
    ...(message ? [row('Message', message)] : [])
  ].join('\n')

  const subject = `[${typeLabel}] New inquiry from ${fullName}`

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#F1F3EF;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F1F3EF;padding:24px 12px;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#FFFFFF;border:1px solid #DCE1DC;">
      <tr>
        <td style="background-color:#101512;padding:24px 32px;text-align:center;">
          <span style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:bold;letter-spacing:0.18em;color:#98FF98;">CANONICAL&#160;REALTY</span>
          <div style="height:2px;width:56px;margin:12px auto 0;background-color:#98FF98;font-size:0;">&nbsp;</div>
        </td>
      </tr>
      <tr>
        <td style="padding:28px 32px 8px;">
          <span style="display:inline-block;padding:4px 12px;background-color:#EDFEEE;border:1px solid #A8F7A8;border-radius:9999px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;color:#0F750F;">${escapeHtml(typeLabel)}</span>
          <h2 style="margin:14px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:20px;line-height:26px;color:#151A17;">New website inquiry</h2>
          <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#5D655F;">Received ${escapeHtml(received)} EAT &mdash; press reply to respond; the sender's address is set as Reply-To.</p>
        </td>
      </tr>
      <tr><td style="padding:12px 32px 28px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #DCE1DC;border-radius:8px;overflow:hidden;">
          ${coreRows}
        </table>
      </td></tr>
      <tr>
        <td style="background-color:#171D19;padding:14px 32px;text-align:center;">
          <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#8A938C;">Sent from the canonicalrealty.com website intake form</span>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`

  const text = [
    `NEW ${typeLabel.toUpperCase()} INQUIRY`,
    ''.padEnd(48, '-'),
    `Received: ${received} EAT`,
    `Name: ${fullName}`,
    `Email: ${email}`,
    ...(phone ? [`Phone: ${phone}`] : []),
    ...detailEntries.map(([key, value]) => `${key}: ${value}`),
    ...(message ? ['', 'Message:', message] : []),
    '',
    'Sent from the canonicalrealty.com website intake form'
  ].join('\n')

  return { subject, html, text }
}
