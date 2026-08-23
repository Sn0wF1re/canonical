<script setup lang="ts">
const standards = [
  { icon: 'i-lucide-badge-check', label: 'VRB Registered' },
  { icon: 'i-lucide-book-open', label: 'IFRS Red Book' },
  { icon: 'i-lucide-building-2', label: 'ISK Member' },
  { icon: 'i-lucide-scale', label: 'Professional Indemnity' }
]
</script>

<template>
  <section class="bg-dark-primary border-b border-dark-muted relative overflow-hidden">
    <div class="absolute inset-0 pattern-grid pointer-events-none" />
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[50%] right-[5%] w-24 h-24 rounded-full opacity-[0.05] hero-shape-pulse" style="background: radial-gradient(circle, rgba(152,255,152,0.2), transparent 70%); filter: blur(30px); animation-duration: 7s;" />
    </div>
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="std in standards" :key="std.label" class="flex items-center gap-3">
          <UIcon :name="std.icon" class="w-5 h-5 text-brand-500 shrink-0" />
          <span class="text-sm font-medium text-white/80">{{ std.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
