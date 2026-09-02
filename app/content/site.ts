export interface SiteContent {
  company: {
    name: string;
    tagline: string;
    vrbRegistration: string;
    iskMembership: string;
    earbRegistration: string;
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
  agency: {
    commissionRate: string;
    marketingReach: string;
    averageDaysOnMarket: string;
  };
  listings: Array<{
    status: string;
    title: string;
    location: string;
    specs: Array<{ icon: string; label: string }>;
    price: string;
  }>;
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
    earbRegistration: '[Content Placeholder: EARB Firm License No.]',
    address: 'Agip House, 6th Floor, Flat 6, Office 4, Nairobi, Kenya',
    phone: '+254 712 244 494',
    whatsapp: '+254 712 244 494',
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
  agency: {
    commissionRate: '[Content Placeholder: XX% Standard Commission]',
    marketingReach: '[Content Placeholder: XX+ Verified Buyers & Tenants]',
    averageDaysOnMarket: '[Content Placeholder: XX Days Average]'
  },
  listings: [
    {
      status: 'For Sale',
      title: '4-Bedroom Townhouse',
      location: 'Runda, Nairobi',
      specs: [
        { icon: 'i-lucide-ruler', label: '320 SQM' },
        { icon: 'i-lucide-bed', label: '4 Beds' }
      ],
      price: 'KES 85,000,000'
    },
    {
      status: 'To Let',
      title: 'Office Suite',
      location: 'Westlands, Nairobi',
      specs: [
        { icon: 'i-lucide-ruler', label: '180 SQM' },
        { icon: 'i-lucide-users', label: 'Open Plan' }
      ],
      price: 'KES 350,000 /mo'
    },
    {
      status: 'For Sale',
      title: '1-Acre Residential Plot',
      location: 'Karen, Nairobi',
      specs: [
        { icon: 'i-lucide-ruler', label: '4,047 SQM' },
        { icon: 'i-lucide-trees', label: 'Vacant' }
      ],
      price: 'KES 60,000,000'
    },
    {
      status: 'Under Offer',
      title: '3-Bedroom Apartment',
      location: 'Kilimani, Nairobi',
      specs: [
        { icon: 'i-lucide-ruler', label: '145 SQM' },
        { icon: 'i-lucide-bed', label: '3 Beds' }
      ],
      price: 'KES 18,500,000'
    }
  ],
  team: [
    {
      name: '[Content Placeholder: Director Name]',
      title: 'Principal Registered Valuer',
      vrbNumber: 'VRB No. [Placeholder]',
      bio: '[Content Placeholder: Verified professional background and track record.]'
    }
  ]
};
