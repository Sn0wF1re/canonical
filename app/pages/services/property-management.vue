<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: 'Property Management'
})
</script>

<template>
  <div>
    <ManagementHero />
    <ManagementBenefits />
    <ManagementYieldCalculator />
    <ManagementTransparency />
    <ManagementOnboardingTimeline />
    <ManagementLandlordIntakeForm />
    <ManagementFAQ />
  </div>
</template>
