<script setup lang="ts">
definePageMeta({ layout: 'default' })

usePageSeo('estate-agency')
</script>

<template>
  <div>
    <AgencyHero />
    <AgencyServiceScopeGrid />
    <AgencyPropertyShowcase />
    <AgencyListingIntakeForm />
    <AgencyFAQ />
  </div>
</template>
