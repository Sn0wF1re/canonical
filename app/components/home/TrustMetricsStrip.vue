<script setup lang="ts">
import { siteContent } from '~/content/site'

const metrics = [
  {
    value: siteContent.metrics.appraisedVolume,
    label: siteContent.metrics.appraisedVolumeLabel,
    icon: 'i-lucide-trending-up'
  },
  {
    value: siteContent.metrics.turnaroundTime,
    label: siteContent.metrics.turnaroundTimeLabel,
    icon: 'i-lucide-clock'
  },
  {
    value: siteContent.metrics.rentCollectionRate,
    label: siteContent.metrics.rentCollectionRateLabel,
    icon: 'i-lucide-shield-check'
  }
]
</script>

<template>
  <section class="bg-dark-elevated py-16 sm:py-20">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="text-center p-6"
        >
          <UIcon :name="metric.icon" class="w-8 h-8 text-brand-500 mx-auto mb-4" />
          <p class="font-display text-3xl sm:text-4xl font-bold text-brand-500 mb-2">
            {{ metric.value }}
          </p>
          <p class="text-sm text-white/60 uppercase tracking-wider">{{ metric.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
