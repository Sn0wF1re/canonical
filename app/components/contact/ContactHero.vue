<script setup lang="ts">
</script>

<template>
  <section class="relative bg-dark-elevated pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
    <!-- Floating Geometric Shapes -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-[20%] right-[15%] w-28 h-28 opacity-[0.06] hero-shape-float"
        style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #1ED11E); animation-duration: 23s;"
      />
      <div
        class="absolute top-[55%] left-[12%] w-36 h-36 rounded-full opacity-[0.08] hero-shape-pulse"
        style="background: radial-gradient(circle, rgba(152,255,152,0.25), transparent 70%); filter: blur(50px); animation-duration: 7s;"
      />
      <div
        class="absolute top-[30%] left-[25%] w-16 h-16 opacity-[0.05] hero-shape-float"
        style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #17A317); animation-duration: 27s; animation-delay: -4s;"
      />
      <div class="absolute top-[15%] right-[30%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float" style="animation-duration: 21s;" />
      <div class="absolute top-[70%] left-[20%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float" style="animation-duration: 26s; animation-delay: -6s;" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="max-w-3xl">
        <p class="text-brand-500 font-display font-semibold text-sm uppercase tracking-widest mb-4">Contact</p>
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Get In Touch
        </h1>
        <p class="text-lg text-white/60 leading-relaxed">
          Ready to start? Reach out via phone, email, or fill in the form below. We respond within one business day.
        </p>
      </div>
    </div>
  </section>
</template>
