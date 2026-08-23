<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: 'Valuation Services'
})
</script>

<template>
  <div>
    <ValuationHero />
    <ValuationComplianceBar />
    <ValuationTypesGrid />
    <ValuationUseCasesAccordion />
    <ValuationProcessTimeline />
    <ValuationReportTransparencyBlock />
    <ValuationRequestForm />
    <ValuationFAQ />
  </div>
</template>
