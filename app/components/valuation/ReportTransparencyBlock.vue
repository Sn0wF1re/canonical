<script setup lang="ts">
const deliverables = [
  { icon: 'i-lucide-file-text', title: 'Full Valuation Report', description: 'Comprehensive report with methodology, analysis, and certified value opinion.' },
  { icon: 'i-lucide-file-check', title: 'Summary Certificate', description: 'Condensed valuation certificate for quick reference and institutional submission.' },
  { icon: 'i-lucide-map', title: 'Site Plan & Photos', description: 'Location maps, site photographs, and property identification documents.' },
  { icon: 'i-lucide-database', title: 'Comparable Evidence', description: 'Market data, comparable sales/rental records, and analysis supporting the valuation.' }
]
</script>

<template>
  <section class="bg-light-muted py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-dots pointer-events-none" />
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div class="max-w-2xl mb-12">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Deliverables</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">Report Transparency</h2>
        <p class="text-text-muted">Every deliverable is structured, audit-ready, and institutionally accepted</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="item in deliverables"
          :key="item.title"
          class="bg-white p-6 rounded-xl border border-border-main"
        >
          <UIcon :name="item.icon" class="w-8 h-8 text-brand-500 mb-4" />
          <h3 class="font-display font-bold text-text-primary mb-2">{{ item.title }}</h3>
          <p class="text-sm text-text-muted leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
