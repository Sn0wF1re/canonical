<script setup lang="ts">
const { elementRef: headingRef, isRevealed } = useReveal()

const steps = [
  { number: '01', title: 'Scope & Intake', description: 'Property details collected, scope defined, engagement terms agreed.' },
  { number: '02', title: 'Site Survey', description: 'Physical inspection, measurements, photographs, and condition assessment.' },
  { number: '03', title: 'Market Analysis', description: 'Comparable evidence gathering, market trends, and highest-and-best-use analysis.' },
  { number: '04', title: 'VRB Sign-Off', description: 'Report compiled, reviewed, and certified by a VRB-registered valuer.' }
]
</script>

<template>
  <section class="bg-dark-primary py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-grid pointer-events-none" />
    <!-- Floating Shapes -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-[20%] right-[8%] w-32 h-32 opacity-[0.05] hero-shape-float"
        style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #1ED11E); animation-duration: 24s;"
      />
      <div
        class="absolute top-[60%] left-[5%] w-36 h-36 rounded-full opacity-[0.06] hero-shape-pulse"
        style="background: radial-gradient(circle, rgba(152,255,152,0.2), transparent 70%); filter: blur(40px); animation-duration: 9s;"
      />
      <div class="absolute top-[35%] left-[20%] w-[3px] h-[3px] rounded-full bg-brand-500/15 hero-shape-float" style="animation-duration: 20s;" />
    </div>
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div ref="headingRef" class="text-center mb-12 hero-text-reveal" :class="isRevealed ? 'hero-text-visible' : ''">
        <p class="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Workflow</p>
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
