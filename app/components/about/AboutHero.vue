<script setup lang="ts">
</script>

<template>
  <section class="relative bg-dark-elevated pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
    <!-- Floating Geometric Shapes -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-[25%] right-[12%] w-36 h-36 opacity-[0.06] hero-shape-float"
        style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #1ED11E); animation-duration: 20s;"
      />
      <div
        class="absolute top-[45%] left-[10%] w-44 h-44 rounded-full opacity-[0.07] hero-shape-pulse"
        style="background: radial-gradient(circle, rgba(152,255,152,0.25), transparent 70%); filter: blur(50px); animation-duration: 10s;"
      />
      <div
        class="absolute top-[60%] right-[20%] w-20 h-20 opacity-[0.05] hero-shape-float"
        style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #17A317); animation-duration: 30s; animation-delay: -7s;"
      />
      <div class="absolute top-[20%] left-[18%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float" style="animation-duration: 19s;" />
      <div class="absolute top-[75%] right-[25%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float" style="animation-duration: 25s; animation-delay: -3s;" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="max-w-3xl">
        <p class="text-brand-500 font-display font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Grounded in Rigor.<br />
          <span class="text-brand-500">Driven by Integrity.</span>
        </h1>
        <p class="text-lg text-white/60 leading-relaxed">
          Canonical Realty is a Kenya-based valuation and property management firm built on evidence-based methodology, regulatory compliance, and institutional trust.
        </p>
      </div>
    </div>
  </section>
</template>
