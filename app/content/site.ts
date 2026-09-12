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
    iskNumber: string;
    bio: string;
  }>;
}

export const siteContent: SiteContent = {
  company: {
    name: 'Canonical Realty',
    tagline: 'Your Trusted Valuation, Property Management and Estate Agents',
    vrbRegistration: 'Compliant',
    iskMembership: 'Compliant',
    earbRegistration: 'Compliant',
    address: 'Agip House, 6th Floor, Flat 6, Office 4, Nairobi, Kenya',
    phone: '+254 712 244 494',
    whatsapp: '+254 712 244 494',
    email: 'info@canonicalrealty.com',
    hours: 'Mon – Fri: 8:00 AM – 5:00 PM EAT'
  },
  metrics: {
    appraisedVolume: 'KES 11B+',
    appraisedVolumeLabel: 'Total Value Appraised',
    turnaroundTime: '1 Hour',
    turnaroundTimeLabel: 'Average Inquiry Turnaround',
    rentCollectionRate: '>90%',
    rentCollectionRateLabel: 'Rent Collection Rate'
  },
  agency: {
    commissionRate: '% Standard Commission',
    marketingReach: '1000+ Verified Buyers & Tenants',
    averageDaysOnMarket: '14 Days Average'
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
      name: 'Joseph Mutura Kamanu',
      title: 'Principal Registered Valuer',
      iskNumber: 'ISK No. 818',
      bio: 'Full member of the Institution of Surveyors of Kenya; Registered valuer with the Valuers Registration Board'
    },
    {
      name: 'Arphaxad Abincha Manono',
      title: 'Realtor',
      iskNumber: 'ISK No. 7013',
      bio: 'Member of the Institution of Surveyors of Kenya'
    }
  ]
};
