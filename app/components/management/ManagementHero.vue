<script setup lang="ts">
</script>

<template>
  <section class="relative bg-dark-elevated pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
    <!-- Floating Geometric Shapes -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-[15%] right-[8%] w-40 h-40 opacity-[0.06] hero-shape-float"
        style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #1ED11E); animation-duration: 24s;"
      />
      <div
        class="absolute top-[50%] left-[8%] w-40 h-40 rounded-full opacity-[0.08] hero-shape-pulse"
        style="background: radial-gradient(circle, rgba(152,255,152,0.25), transparent 70%); filter: blur(50px); animation-duration: 9s;"
      />
      <div
        class="absolute top-[35%] right-[25%] w-24 h-24 opacity-[0.05] hero-shape-float"
        style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #17A317); animation-duration: 26s; animation-delay: -6s;"
      />
      <div class="absolute top-[25%] left-[20%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float" style="animation-duration: 20s;" />
      <div class="absolute top-[65%] right-[15%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float" style="animation-duration: 22s; animation-delay: -4s;" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="max-w-3xl">
        <p class="text-brand-500 font-display font-semibold text-sm uppercase tracking-widest mb-4">Property Management</p>
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Professional Property Management
        </h1>
        <p class="text-lg text-white/60 leading-relaxed mb-8">
          Maximize your rental returns with tech-enabled management, transparent reporting, and proactive tenant relations across Kenya.
        </p>
        <UButton to="#request" color="primary" size="lg" trailing-icon="i-lucide-arrow-right">
          Become a Client
        </UButton>
      </div>
    </div>
  </section>
</template>
