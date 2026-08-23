<script setup lang="ts">
const faqs = [
  { label: 'How long does a valuation take?', content: 'Standard valuations are completed within 5-7 business days from the date of site inspection. Urgent valuations can be arranged with an expedited timeline.' },
  { label: 'What documents do I need to provide?', content: 'Property title deed, survey plan, any existing lease agreements, and relevant council approvals. Our team will guide you through the specific requirements based on your property type.' },
  { label: 'Are your valuations accepted by banks?', content: 'Yes. All our valuations are conducted by VRB-registered valuers and are accepted by all major Kenyan financial institutions, including commercial banks and Saccos.' },
  { label: 'What is the difference between market value and forced sale value?', content: 'Market value assumes a willing buyer and willing seller in an open market. Forced sale value accounts for time constraints and is typically lower. Banks often require both for different purposes.' },
  { label: 'Do you valuate properties outside Nairobi?', content: 'Yes. We cover all counties in Kenya. Our team has experience with urban, peri-urban, and rural properties across the country.' },
  { label: 'What are your valuation fees?', content: 'Fees depend on property type, location, and complexity. Contact us for a detailed quotation. We provide transparent pricing with no hidden costs.' }
]
</script>

<template>
  <section class="bg-light-muted py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-dots pointer-events-none" />
      <div class="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div class="text-center mb-12">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Support</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Frequently Asked Questions</h2>
        <p class="text-text-muted">Common questions about our valuation services</p>
      </div>

      <UAccordion :items="faqs" />

      <div class="mt-12 text-center">
        <UButton to="/services/valuation#request" color="primary" size="lg" trailing-icon="i-lucide-arrow-right">
          Start a Valuation Request Now
        </UButton>
      </div>
    </div>
  </section>
</template>
