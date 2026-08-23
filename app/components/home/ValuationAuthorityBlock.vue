<script setup lang="ts">
const features = [
  {
    icon: 'i-lucide-file-text',
    title: 'Decision-Grade Reports',
    description: 'Valuation reports designed for banking, legal, audit, and corporate decision-making. Every report meets VRB and IFRS Red Book standards.'
  },
  {
    icon: 'i-lucide-search',
    title: 'Evidence-Based Methodology',
    description: 'Market analysis grounded in comparable data, site inspections, and professional judgment — not estimates or algorithms.'
  },
  {
    icon: 'i-lucide-award',
    title: 'VRB Registered',
    description: 'All valuations are conducted and signed off by VRB-registered valuers, ensuring regulatory compliance and institutional acceptance.'
  }
]
</script>

<template>
  <section class="bg-light-bg py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-diagonals pointer-events-none" />
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div class="max-w-2xl mb-12">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Scope of Practice</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Reports That Drive Decisions
        </h2>
        <p class="text-text-muted leading-relaxed">
          Whether for mortgage financing, asset disposal, audit, or litigation — our valuations provide the institutional-grade evidence that stakeholders require.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white p-8 rounded-xl border border-border-main hover:shadow-lg transition-shadow"
        >
          <div class="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-5">
            <UIcon :name="feature.icon" class="w-6 h-6 text-brand-600" />
          </div>
          <h3 class="font-display text-lg font-bold text-text-primary mb-3">{{ feature.title }}</h3>
          <p class="text-sm text-text-muted leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
