<script setup lang="ts">
import { siteContent } from '~/content/site'

const { elementRef: headingRef, isRevealed } = useReveal()

const accreditations = [
  { icon: 'i-lucide-badge-check', title: 'VRB Registered', detail: siteContent.company.vrbRegistration, description: 'Valuation Registration Board of Kenya — all valuations conducted by registered professionals.' },
  { icon: 'i-lucide-building-2', title: 'ISK Corporate Member', detail: siteContent.company.iskMembership, description: 'Institutional Property Surveyors of Kenya — committed to professional standards.' },
  { icon: 'i-lucide-book-open', title: 'IFRS Red Book', detail: 'Compliant', description: 'Valuation reports conform to International Financial Reporting Standards.' }
]
</script>

<template>
  <section class="bg-surface py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-dots pointer-events-none" />
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div ref="headingRef" class="text-center mb-12 hero-text-reveal" :class="isRevealed ? 'hero-text-visible' : ''">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Credentials</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Accreditations</h2>
        <p class="text-text-muted">Our professional credentials and regulatory compliance</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div
          v-for="acc in accreditations"
          :key="acc.title"
          class="bg-light-bg p-8 rounded-xl border border-border-main text-center"
        >
          <UIcon :name="acc.icon" class="w-10 h-10 text-brand-500 mx-auto mb-4" />
          <h3 class="font-display font-bold text-text-primary mb-1">{{ acc.title }}</h3>
          <p class="text-sm text-brand-600 font-semibold mb-3">{{ acc.detail }}</p>
          <p class="text-sm text-text-muted leading-relaxed">{{ acc.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
