<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: 'Contact Us'
})
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
