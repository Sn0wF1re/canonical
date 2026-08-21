<script setup lang="ts">
const features = [
  { icon: 'i-lucide-layout-dashboard', title: 'Digital Dashboard', description: 'Real-time access to your portfolio performance, tenant status, and financial data.' },
  { icon: 'i-lucide-receipt', title: 'Transparent Ledger', description: 'Itemized income and expense tracking visible to landlords at all times.' },
  { icon: 'i-lucide-message-square', title: 'Ticket System', description: 'Digital maintenance requests with status tracking and resolution timelines.' }
]
</script>

<template>
  <section class="bg-dark-elevated py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="max-w-2xl mb-12">
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
