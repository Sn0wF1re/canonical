<script setup lang="ts">
const steps = [
  { number: '01', title: 'Scope & Intake', description: 'Property details collected, scope defined, engagement terms agreed.' },
  { number: '02', title: 'Site Survey', description: 'Physical inspection, measurements, photographs, and condition assessment.' },
  { number: '03', title: 'Market Analysis', description: 'Comparable evidence gathering, market trends, and highest-and-best-use analysis.' },
  { number: '04', title: 'VRB Sign-Off', description: 'Report compiled, reviewed, and certified by a VRB-registered valuer.' }
]
</script>

<template>
  <section class="bg-dark-primary py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Our Process</h2>
        <p class="text-white/60">A structured four-step approach to every valuation</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div v-for="step in steps" :key="step.number" class="relative">
          <div class="text-5xl font-display font-bold text-brand-500/20 mb-4">{{ step.number }}</div>
          <h3 class="font-display font-bold text-white mb-2">{{ step.title }}</h3>
          <p class="text-sm text-white/50 leading-relaxed">{{ step.description }}</p>
          <div v-if="step.number !== '04'" class="hidden md:block absolute top-8 -right-4 w-8 h-px bg-dark-muted" />
        </div>
      </div>
    </div>
  </section>
</template>
