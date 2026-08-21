<script setup lang="ts">
import { siteContent } from '~/content/site'

const credentials = [
  {
    icon: 'i-lucide-badge-check',
    title: 'VRB Registered',
    detail: siteContent.company.vrbRegistration,
    description: 'Valuation Registration Board of Kenya'
  },
  {
    icon: 'i-lucide-building-2',
    title: 'ISK Member',
    detail: siteContent.company.iskMembership,
    description: 'Institutional Property Surveyors of Kenya'
  },
  {
    icon: 'i-lucide-book-open',
    title: 'IFRS Red Book',
    detail: 'Compliant',
    description: 'International Financial Reporting Standards'
  },
  {
    icon: 'i-lucide-scale',
    title: 'Professional Indemnity',
    detail: 'Insured',
    description: 'Full professional liability coverage'
  }
]
</script>

<template>
  <section class="bg-light-muted py-16 sm:py-20">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="text-center mb-12">
        <h2 class="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-3">Institutional Credentials</h2>
        <p class="text-text-muted">Recognized by Kenya's regulatory and professional bodies</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="cred in credentials"
          :key="cred.title"
          class="bg-white p-6 rounded-xl border border-border-main text-center"
        >
          <UIcon :name="cred.icon" class="w-8 h-8 text-brand-500 mx-auto mb-3" />
          <h3 class="font-display font-bold text-sm text-text-primary mb-1">{{ cred.title }}</h3>
          <p class="text-xs text-brand-600 font-semibold mb-1">{{ cred.detail }}</p>
          <p class="text-xs text-text-muted">{{ cred.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
