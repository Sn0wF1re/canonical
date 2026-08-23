<script setup lang="ts">
</script>

<template>
  <section class="relative bg-dark-elevated pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
    <!-- Floating Geometric Shapes -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-[20%] right-[10%] w-32 h-32 opacity-[0.06] hero-shape-float"
        style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #1ED11E); animation-duration: 22s;"
      />
      <div
        class="absolute top-[40%] right-[20%] w-48 h-48 rounded-full opacity-[0.08] hero-shape-pulse"
        style="background: radial-gradient(circle, rgba(152,255,152,0.25), transparent 70%); filter: blur(50px); animation-duration: 8s;"
      />
      <div
        class="absolute top-[60%] left-[5%] w-20 h-20 opacity-[0.05] hero-shape-float"
        style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #17A317); animation-duration: 28s; animation-delay: -5s;"
      />
      <div class="absolute top-[30%] left-[15%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float" style="animation-duration: 18s;" />
      <div class="absolute top-[70%] right-[30%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float" style="animation-duration: 24s; animation-delay: -8s;" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="max-w-3xl">
        <p class="text-brand-500 font-display font-semibold text-sm uppercase tracking-widest mb-4">Valuation Services</p>
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Decision-Grade Property Valuation
        </h1>
        <p class="text-lg text-white/60 leading-relaxed mb-8">
          VRB-registered valuations for banking, legal, audit, and corporate purposes. Every report is institutionally accepted and IFRS Red Book compliant.
        </p>
        <UButton to="#request" color="primary" size="lg" trailing-icon="i-lucide-arrow-right">
          Request a Valuation
        </UButton>
      </div>
    </div>
  </section>
</template>
