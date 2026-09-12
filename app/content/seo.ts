export interface SeoEntry {
  path: string
  title: string
  description: string
}

export type SeoKey =
  | 'home'
  | 'valuation'
  | 'property-management'
  | 'estate-agency'
  | 'about'
  | 'contact'
  | 'privacy-policy'
  | 'terms-conditions'

export const seoMeta: Record<SeoKey, SeoEntry> = {
  home: {
    path: '/',
    title: 'Canonical Realty — Valuation & Property Management in Kenya',
    description: 'VRB-registered property valuers in Nairobi offering decision-grade valuations, tech-enabled property management, and estate agency across Kenya.'
  },
  valuation: {
    path: '/services/valuation',
    title: 'Valuation Services',
    description: 'IFRS Red Book compliant property valuations for mortgage, audit, litigation, tax, and acquisition — signed off by VRB-registered valuers.'
  },
  'property-management': {
    path: '/services/property-management',
    title: 'Property Management',
    description: 'Tech-enabled rental management in Kenya with transparent ledgers, proactive maintenance, and dependable monthly disbursements for landlords.'
  },
  'estate-agency': {
    path: '/services/estate-agency',
    title: 'Estate Agency',
    description: 'Buy, sell, and let with confidence — valuation-informed pricing, verified listings, and end-to-end transaction support across Kenya.'
  },
  about: {
    path: '/about',
    title: 'About Us',
    description: 'Meet Canonical Realty — a Nairobi firm grounded in valuation independence, evidence-based methodology, and regulatory compliance.'
  },
  contact: {
    path: '/contact',
    title: 'Contact Us',
    description: 'Reach Canonical Realty by phone, WhatsApp, or email. Nairobi-based, responding to valuation and management inquiries within one business day.'
  },
  'privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'How Canonical Realty collects, uses, and protects personal data under the Data Protection Act, 2019 of Kenya.'
  },
  'terms-conditions': {
    path: '/terms-conditions',
    title: 'Terms & Conditions',
    description: 'Terms governing Canonical Realty services, engagements, valuation opinions, fees, and liability under Kenyan law.'
  }
}
