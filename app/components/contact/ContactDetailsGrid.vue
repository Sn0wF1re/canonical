<script setup lang="ts">
import { siteContent } from '~/content/site'

const details = [
  { icon: 'i-lucide-phone', label: 'Phone', value: siteContent.company.phone, href: `tel:${siteContent.company.phone}` },
  { icon: 'i-lucide-mail', label: 'Email', value: siteContent.company.email, href: `mailto:${siteContent.company.email}` },
  { icon: 'i-lucide-map-pin', label: 'Office', value: siteContent.company.address, href: '#' },
  { icon: 'i-lucide-clock', label: 'Hours', value: siteContent.company.hours, href: '#' }
]
</script>

<template>
  <section class="bg-light-muted py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Contact Details</h2>
        <p class="text-text-muted">Direct channels for immediate assistance</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <a
          v-for="detail in details"
          :key="detail.label"
          :href="detail.href"
          class="bg-white p-6 rounded-xl border border-border-main text-center hover:shadow-md transition-shadow"
        >
          <UIcon :name="detail.icon" class="w-8 h-8 text-brand-500 mx-auto mb-3" />
          <p class="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">{{ detail.label }}</p>
          <p class="text-sm text-text-primary font-medium">{{ detail.value }}</p>
        </a>
      </div>
    </div>
  </section>
</template>
