export interface SiteContent {
  company: {
    name: string;
    tagline: string;
    vrbRegistration: string;
    iskMembership: string;
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
    hours: string;
  };
  metrics: {
    appraisedVolume: string;
    appraisedVolumeLabel: string;
    turnaroundTime: string;
    turnaroundTimeLabel: string;
    rentCollectionRate: string;
    rentCollectionRateLabel: string;
  };
  team: Array<{
    name: string;
    title: string;
    vrbNumber: string;
    bio: string;
  }>;
}

export const siteContent: SiteContent = {
  company: {
    name: 'Canonical Realty',
    tagline: 'Your Trusted Valuation, Property Management and Estate Agents',
    vrbRegistration: '[Content Placeholder: VRB Firm License No.]',
    iskMembership: '[Content Placeholder: ISK Corporate Membership No.]',
    address: '[Content Placeholder: Physical Office Address, Nairobi, Kenya]',
    phone: '+254 [Content Placeholder: Phone Number]',
    whatsapp: '+254 [Content Placeholder: WhatsApp Number]',
    email: 'info@canonicalrealty.com',
    hours: 'Mon – Fri: 8:00 AM – 5:00 PM EAT'
  },
  metrics: {
    appraisedVolume: '[Content Placeholder: KES XX Appraised]',
    appraisedVolumeLabel: 'Total Value Appraised',
    turnaroundTime: '[Content Placeholder: XX Hours]',
    turnaroundTimeLabel: 'Average Turnaround',
    rentCollectionRate: '[Content Placeholder: XX%]',
    rentCollectionRateLabel: 'Rent Collection Rate'
  },
  team: [
    {
      name: '[Content Placeholder: Director Name]',
      title: 'Principal Registered Valuer',
      vrbNumber: 'VRB No. [Placeholder]',
      bio: '[Content Placeholder: Verified professional background and track record.]'
    }
  ]
};
