<script setup lang="ts">
definePageMeta({ layout: 'default' })

usePageSeo('home')

useSchemaOrg([
  {
    '@type': 'RealEstateAgent',
    '@id': 'https://canonicalrealty.com/#business',
    'name': 'Canonical Realty',
    'url': 'https://canonicalrealty.com',
    'description': 'VRB-registered property valuers offering decision-grade valuations, property management, and estate agency across Kenya.',
    'telephone': '+254712244494',
    'email': 'info@canonicalrealty.com',
    'address': {
      '@type': 'PostalAddress',
      streetAddress: 'Agip House, 6th Floor, Flat 6, Office 4',
      addressLocality: 'Nairobi',
      addressCountry: 'KE'
    },
    'openingHours': 'Mo-Fr 08:00-17:00',
    'areaServed': 'Kenya'
  }
])
</script>

<template>
  <div>
    <HomeHeroSection />
    <HomeQuickIntakeWidget />
    <HomeRegulatoryCredentials />
    <HomeTrustMetricsStrip />
    <HomeValuationAuthorityBlock />
    <HomeLandlordAcquisitionBlock />
    <HomeSampleReportPreview />
    <HomeCallToActionBanner />
  </div>
</template>
