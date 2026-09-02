<script setup lang="ts">
const { elementRef: headingRef, isRevealed } = useReveal()

const services = [
  {
    icon: 'i-lucide-home',
    title: 'Residential Sales',
    description: 'Apartments, townhouses, and gated-community homes priced with in-house valuation intelligence and matched to qualified buyers.'
  },
  {
    icon: 'i-lucide-building-2',
    title: 'Commercial Lettings',
    description: 'Office, retail, and warehouse space let to vetted corporate and SME tenants with professionally negotiated lease terms.'
  },
  {
    icon: 'i-lucide-map',
    title: 'Land & Site Acquisition',
    description: 'Parcel identification, title verification, and due diligence coordination for developers and private land buyers.'
  },
  {
    icon: 'i-lucide-file-text',
    title: 'Lease Advisory',
    description: 'Rent reviews, renewals, and renegotiation support for landlords and tenants across all property classes.'
  }
]
</script>

<template>
  <section class="bg-light-bg py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-diagonals pointer-events-none" />
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div ref="headingRef" class="text-center mb-12 hero-text-reveal" :class="isRevealed ? 'hero-text-visible' : ''">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Service Scope</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">What We Handle</h2>
        <p class="text-text-muted max-w-2xl mx-auto">End-to-end agency services across every property class in Kenya</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-white p-6 rounded-xl border border-border-main hover:shadow-lg hover:border-brand-500/30 transition-all"
        >
          <div class="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
            <UIcon :name="service.icon" class="w-6 h-6 text-brand-600" />
          </div>
          <h3 class="font-display font-bold text-text-primary mb-2">{{ service.title }}</h3>
          <p class="text-sm text-text-muted leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
