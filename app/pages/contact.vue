<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: 'Contact Us'
})
</script>

<template>
  <div>
    <ContactContactHero />
    <ContactContactForm />
    <ContactContactDetailsGrid />
    <ContactMapSection />
    <ContactSlaBanner />
  </div>
</template>
