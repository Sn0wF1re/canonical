<script setup lang="ts">
const { elementRef: headingRef, isRevealed } = useReveal()

const steps = [
  { number: '01', title: 'Property Assessment', description: 'Site visit, condition audit, and market rental analysis.' },
  { number: '02', title: 'Agreement', description: 'Management terms, fee structure, and scope of services defined.' },
  { number: '03', title: 'Marketing & Onboarding', description: 'Listing, tenant screening, lease execution, and property handover.' },
  { number: '04', title: 'Ongoing Management', description: 'Rent collection, maintenance, reporting, and monthly disbursements.' }
]
</script>

<template>
  <section class="bg-light-bg py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-diagonals pointer-events-none" />
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div ref="headingRef" class="text-center mb-12 hero-text-reveal" :class="isRevealed ? 'hero-text-visible' : ''">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Onboarding</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Onboarding Process</h2>
        <p class="text-text-muted">From assessment to active management in four clear steps</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div v-for="step in steps" :key="step.number" class="relative text-center">
          <div class="w-12 h-12 rounded-full bg-brand-500 text-dark-primary font-display font-bold text-lg flex items-center justify-center mx-auto mb-4">
            {{ step.number }}
          </div>
          <h3 class="font-display font-bold text-text-primary mb-2">{{ step.title }}</h3>
          <p class="text-sm text-text-muted leading-relaxed">{{ step.description }}</p>
          <div v-if="step.number !== '04'" class="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border-main" />
        </div>
      </div>
    </div>
  </section>
</template>
