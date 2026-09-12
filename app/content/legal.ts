export interface LegalSection {
  heading: string
  paragraphs: string[]
}

export interface LegalDocument {
  title: string
  eyebrow: string
  intro: string
  updated: string
  sections: LegalSection[]
}

export const legalReviewNotice =
  '[Legal Review Required: this document is a draft template and does not constitute legal advice. Have it reviewed by qualified counsel before publication.]'

export const privacyPolicy: LegalDocument = {
  title: 'Privacy Policy',
  eyebrow: 'Legal',
  intro:
    'Canonical Realty ("we", "us", "our") respects your privacy. This policy explains what personal data we collect through this website, why we collect it, and the rights you hold under the Data Protection Act, 2019 of Kenya.',
  updated: '[Content Placeholder: last updated date]',
  sections: [
    {
      heading: 'Information We Collect',
      paragraphs: [
        'When you use our intake and contact forms, we collect the details you provide: your name, email address, phone number, property details (type, location, size, tenure), and the substance of your inquiry.',
        'We also collect limited technical data automatically, such as device type, browser type, and pages visited, to operate and improve the website.'
      ]
    },
    {
      heading: 'How We Use Your Information',
      paragraphs: [
        'We use your information to respond to inquiries, prepare valuations, quotations and proposals, manage properties under our care, and communicate about our services.',
        'We do not sell your personal data. We share it only where necessary to deliver a requested service — for example with advocates, lenders, or insurers involved in your transaction — or where required by law.'
      ]
    },
    {
      heading: 'Consent and Legal Basis',
      paragraphs: [
        'By submitting a form on this website, you consent to our collection and use of your information for the purposes described in this policy.',
        'You may withdraw consent at any time by contacting us using the details below. Withdrawal does not affect processing already carried out.'
      ]
    },
    {
      heading: 'Data Retention',
      paragraphs: [
        'We retain personal data only for as long as necessary to fulfil the purposes collected or as required by law and professional record-keeping obligations: [Content Placeholder: retention period, e.g. 7 years for engagement records].',
        'When data is no longer needed, we securely delete or anonymise it.'
      ]
    },
    {
      heading: 'Your Rights',
      paragraphs: [
        'Under the Data Protection Act, 2019, you have the right to access, correct, or request deletion of your personal data, to object to or restrict processing, and to lodge a complaint with the Office of the Data Protection Commissioner (ODPC).',
        'To exercise any of these rights, contact us at [Content Placeholder: data protection contact email] and we will respond within the statutory timelines.'
      ]
    },
    {
      heading: 'Cookies and Website Data',
      paragraphs: [
        'Our contact forms are protected by Cloudflare Turnstile, which runs a security check in your browser to distinguish humans from bots. Turnstile does not set advertising or tracking cookies.',
        'This website otherwise uses only strictly necessary technical storage required for the site to function. We do not use advertising or cross-site tracking cookies: [Content Placeholder: confirm analytics/analytics-cookie position before adding any tool].'
      ]
    },
    {
      heading: 'Data Security',
      paragraphs: [
        'We apply reasonable administrative and technical safeguards to protect personal data against unauthorised access, loss, or misuse. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.'
      ]
    },
    {
      heading: 'Contact Us',
      paragraphs: [
        'For privacy questions or requests, contact Canonical Realty at info@canonicalrealty.com or [Content Placeholder: physical office address, Nairobi, Kenya].'
      ]
    },
    {
      heading: 'Changes to This Policy',
      paragraphs: [
        'We may update this policy to reflect changes in our practices or the law. The current version will always be published on this page with its last-updated date.'
      ]
    }
  ]
}

export const termsConditions: LegalDocument = {
  title: 'Terms & Conditions',
  eyebrow: 'Legal',
  intro:
    'These terms govern your use of this website and the basis on which Canonical Realty provides valuation, property management, and estate agency services. Formal engagements are additionally governed by the written instruction letter or management agreement for each mandate.',
  updated: '[Content Placeholder: last updated date]',
  sections: [
    {
      heading: 'Our Services',
      paragraphs: [
        'Canonical Realty is a Nairobi-based firm offering property valuation, property management, and estate agency (sales and lettings) services. We operate under the professional and licensing requirements of the Valuers Registration Board (VRB), the Institution of Surveyors of Kenya (ISK), and the Estate Agents Registration Board (EARB).',
        'Website content is general information only and does not constitute professional advice for any specific property or transaction.'
      ]
    },
    {
      heading: 'Engagement and Quotations',
      paragraphs: [
        'No instruction is accepted until confirmed in writing through an instruction letter, management agreement, or agency mandate setting out scope, deliverables, timelines, and fees.',
        'Quotations are valid for [Content Placeholder: validity period, e.g. 30 days] unless stated otherwise.'
      ]
    },
    {
      heading: 'Valuation Opinions Disclaimer',
      paragraphs: [
        'A valuation is a professional opinion of value at a stated date, formed under applicable VRB, ISK, and IFRS-aligned standards. It is not a guarantee of sale price, rental outcome, or future market performance.',
        'Valuation reports are prepared for the stated purpose and the named instructing party. Third parties may not rely on a report without our prior written consent.'
      ]
    },
    {
      heading: 'Fees and Commissions',
      paragraphs: [
        'Professional fees, management fees, and agency commissions are as agreed in the engagement documents: [Content Placeholder: standard fee and commission schedule].',
        'Disbursements, statutory charges, and applicable taxes are payable in addition to professional fees unless expressly included.'
      ]
    },
    {
      heading: 'Client Obligations',
      paragraphs: [
        'Clients must provide accurate title documents, property information, and timely access for inspections. We are entitled to rely on information supplied by the client and are not liable for loss arising from inaccurate or incomplete information.'
      ]
    },
    {
      heading: 'Limitation of Liability',
      paragraphs: [
        'To the maximum extent permitted by law, our liability for any mandate is limited to [Content Placeholder: liability cap, e.g. the fee paid for that mandate]. Nothing in these terms limits liability that cannot be limited under Kenyan law.'
      ]
    },
    {
      heading: 'Intellectual Property',
      paragraphs: [
        'All website content and report formats remain our property. Valuation reports and marketing materials may not be reproduced or distributed without written permission.'
      ]
    },
    {
      heading: 'Governing Law',
      paragraphs: [
        'These terms and any engagement are governed by the laws of Kenya. Disputes shall first be addressed through good-faith negotiation, failing which they shall be resolved through [Content Placeholder: dispute forum, e.g. arbitration in Nairobi / Kenyan courts].'
      ]
    },
    {
      heading: 'Contact',
      paragraphs: [
        'Questions about these terms: info@canonicalrealty.com, +254 712 244 494, [Content Placeholder: physical office address, Nairobi, Kenya].'
      ]
    }
  ]
}

export const emailDisclaimer =
  'This mail (and any attachments thereto) is intended for the original addressees only. It may contain confidential, proprietary or legally privileged information and should not be copied or otherwise transmitted to any other person. The sender shall not be responsible for breach of any confidentiality or other legal duty arising out of any miss-transmission or other inadvertence. If you receive this message in error, please immediately destroy it and notify the sender. You must not, directly or indirectly, use, disclose, distribute, print, or copy any part of this message if you are not the intended recipient. Any views expressed in this message are those of the individual sender.'
