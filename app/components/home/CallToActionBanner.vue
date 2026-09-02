<script setup lang="ts">
import { siteContent } from '~/content/site'
</script>

<template>
  <section class="bg-dark-primary py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-grid pointer-events-none" />
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center relative z-10">
      <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
        Ready to Get Started?
      </h2>
      <p class="text-white/60 max-w-2xl mx-auto mb-10">
        Whether you need a property valuation or management services, our team is ready to assist. Reach out today for a consultation.
      </p>
      <div class="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:max-w-2xl mx-auto">
        <UButton to="/services/valuation" color="primary" size="lg" trailing-icon="i-lucide-arrow-right" class="justify-center">
          Request Valuation
        </UButton>
        <UButton :href="`https://wa.me/${siteContent.company.whatsapp.replace(/[^0-9]/g, '')}`" target="_blank" color="neutral" variant="outline" size="lg" icon="i-lucide-message-circle" class="justify-center">
          WhatsApp Us
        </UButton>
        <UButton to="/contact" color="neutral" variant="outline" size="lg" class="justify-center">
          Contact Page
        </UButton>
      </div>
    </div>
  </section>
</template>
