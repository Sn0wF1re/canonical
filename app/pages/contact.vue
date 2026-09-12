<script setup lang="ts">
definePageMeta({ layout: 'default' })

usePageSeo('contact')
</script>

<template>
  <div>
    <ContactHero />
    <ContactForm />
    <ContactDetailsGrid />
    <ContactMapSection />
    <ContactSlaBanner />
  </div>
</template>
