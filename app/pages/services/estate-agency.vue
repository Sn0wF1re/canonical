<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: 'Estate Agency'
})
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
