<script setup lang="ts">
const { elementRef: headingRef, isRevealed } = useReveal()

const features = [
  { icon: 'i-lucide-layout-dashboard', title: 'Digital Dashboard', description: 'Real-time access to your portfolio performance, tenant status, and financial data.' },
  { icon: 'i-lucide-receipt', title: 'Transparent Ledger', description: 'Itemized income and expense tracking visible to landlords at all times.' },
  { icon: 'i-lucide-message-square', title: 'Ticket System', description: 'Digital maintenance requests with status tracking and resolution timelines.' }
]
</script>

<template>
  <section class="bg-dark-elevated py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-grid pointer-events-none" />
    <!-- Floating Shapes -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-[25%] right-[10%] w-28 h-28 opacity-[0.05] hero-shape-float"
        style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #17A317); animation-duration: 26s;"
      />
      <div
        class="absolute top-[50%] left-[8%] w-32 h-32 rounded-full opacity-[0.06] hero-shape-pulse"
        style="background: radial-gradient(circle, rgba(152,255,152,0.2), transparent 70%); filter: blur(40px); animation-duration: 8s;"
      />
      <div class="absolute top-[70%] right-[25%] w-[3px] h-[3px] rounded-full bg-brand-500/15 hero-shape-float" style="animation-duration: 22s; animation-delay: -5s;" />
    </div>
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div ref="headingRef" class="max-w-2xl mb-12 hero-text-reveal" :class="isRevealed ? 'hero-text-visible' : ''">
        <p class="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Digital Operations</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Digital Transparency</h2>
        <p class="text-white/60">Technology-driven management tools that give landlords complete visibility into their portfolio</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-dark-primary p-6 rounded-xl border border-dark-muted"
        >
          <UIcon :name="feature.icon" class="w-8 h-8 text-brand-500 mb-4" />
          <h3 class="font-display font-bold text-white mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-white/50 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
