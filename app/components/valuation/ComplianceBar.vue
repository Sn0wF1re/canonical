<script setup lang="ts">
const standards = [
  { icon: 'i-lucide-badge-check', label: 'VRB Registered' },
  { icon: 'i-lucide-book-open', label: 'IFRS Red Book' },
  { icon: 'i-lucide-building-2', label: 'ISK Member' },
  { icon: 'i-lucide-scale', label: 'Professional Indemnity' }
]
</script>

<template>
  <section class="bg-dark-primary border-b border-dark-muted">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="std in standards" :key="std.label" class="flex items-center gap-3">
          <UIcon :name="std.icon" class="w-5 h-5 text-brand-500 shrink-0" />
          <span class="text-sm font-medium text-white/80">{{ std.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
