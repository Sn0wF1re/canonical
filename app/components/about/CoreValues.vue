<script setup lang="ts">
const { elementRef: headingRef, isRevealed } = useReveal()

const values = [
  { icon: 'i-lucide-scale', title: 'Valuation Independence', description: 'Our opinions are evidence-driven. We have no affiliations with developers, lenders, or interest groups that could compromise our independence.' },
  { icon: 'i-lucide-search', title: 'Evidence-Based Methodology', description: 'Every valuation is grounded in comparable data, site inspections, and professional judgment — never estimates or algorithms.' },
  { icon: 'i-lucide-shield', title: 'Regulatory Compliance', description: 'Full adherence to VRB standards, ISK guidelines, and IFRS reporting requirements across all our services.' },
  { icon: 'i-lucide-heart-handshake', title: 'Client Partnership', description: 'We view every engagement as a long-term relationship. Our success is measured by the trust our clients place in our work.' }
]
</script>

<template>
  <section class="bg-dark-primary py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-grid pointer-events-none" />
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div ref="headingRef" class="text-center mb-12 hero-text-reveal" :class="isRevealed ? 'hero-text-visible' : ''">
        <p class="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Principles</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Core Values</h2>
        <p class="text-white/60">The principles that guide every engagement</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div
          v-for="value in values"
          :key="value.title"
          class="bg-dark-elevated p-6 rounded-xl border border-dark-muted"
        >
          <UIcon :name="value.icon" class="w-8 h-8 text-brand-500 mb-4" />
          <h3 class="font-display font-bold text-white mb-2">{{ value.title }}</h3>
          <p class="text-sm text-white/50 leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
