<script setup lang="ts">
defineProps<{
  title: string
  eyebrow: string
  updated: string
}>()
</script>

<template>
  <section class="relative bg-dark-elevated pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
    <!-- Floating Geometric Shapes -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-[25%] right-[10%] w-28 h-28 opacity-[0.06] hero-shape-float"
        style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #1ED11E); animation-duration: 24s;"
      />
      <div
        class="absolute top-[55%] left-[8%] w-36 h-36 rounded-full opacity-[0.07] hero-shape-pulse"
        style="background: radial-gradient(circle, rgba(152,255,152,0.25), transparent 70%); filter: blur(50px); animation-duration: 9s;"
      />
      <div class="absolute top-[30%] left-[25%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float" style="animation-duration: 19s;" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="max-w-3xl">
        <p class="text-brand-500 font-display font-semibold text-sm uppercase tracking-widest mb-4">{{ eyebrow }}</p>
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          {{ title }}
        </h1>
        <p class="text-sm text-white/40">Last updated: {{ updated }}</p>
      </div>
    </div>
  </section>
</template>
