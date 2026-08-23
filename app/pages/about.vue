<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: 'About Us'
})
</script>

<template>
  <div>
    <AboutHero />
    <AboutAccreditations />
    <AboutTeamGrid />
    <AboutCoreValues />
    <AboutLocationBlock />
    <AboutCTA />
  </div>
</template>
