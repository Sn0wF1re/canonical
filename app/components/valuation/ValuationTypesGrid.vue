<script setup lang="ts">
const { elementRef: headingRef, isRevealed } = useReveal()

const types = [
  { icon: 'i-lucide-building', title: 'Commercial', description: 'Offices, retail spaces, shopping centres, and mixed-use developments', methodology: 'Income Capitalisation & Comparable' },
  { icon: 'i-lucide-home', title: 'Residential', description: 'Apartments, houses, townhouses, and residential estates', methodology: 'Sales Comparison Approach' },
  { icon: 'i-lucide-warehouse', title: 'Industrial', description: 'Warehouses, factories, godowns, and light industrial facilities', methodology: 'Depreciated Replacement Cost' },
  { icon: 'i-lucide-trees', title: 'Agricultural', description: 'Farmland, ranches, plantations, and agricultural properties', methodology: 'Agricultural Valuation Standards' },
  { icon: 'i-lucide-cog', title: 'Plant & Machinery', description: 'Industrial equipment, plant installations, and specialized machinery', methodology: 'Technical Assessment & Market Analysis' }
]
</script>

<template>
  <section class="bg-light-bg py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-diagonals pointer-events-none" />
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div ref="headingRef" class="text-center mb-12 hero-text-reveal" :class="isRevealed ? 'hero-text-visible' : ''">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Asset Classes</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Valuation Categories</h2>
        <p class="text-text-muted max-w-2xl mx-auto">Comprehensive property valuation across all asset classes in Kenya</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="type in types"
          :key="type.title"
          class="bg-white p-6 rounded-xl border border-border-main hover:shadow-lg hover:border-brand-500/30 transition-all"
        >
          <div class="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
            <UIcon :name="type.icon" class="w-6 h-6 text-brand-600" />
          </div>
          <h3 class="font-display font-bold text-text-primary mb-2">{{ type.title }}</h3>
          <p class="text-sm text-text-muted leading-relaxed mb-3">{{ type.description }}</p>
          <span class="inline-block text-[10px] font-medium uppercase tracking-wider text-text-muted border border-border-main rounded-full px-2.5 py-0.5">{{ type.methodology }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
