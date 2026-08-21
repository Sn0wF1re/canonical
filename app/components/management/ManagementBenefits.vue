<script setup lang="ts">
const benefits = [
  { icon: 'i-lucide-trending-up', title: 'Maximized Returns', description: 'Market-aligned rental pricing backed by valuation expertise to ensure optimal yield.' },
  { icon: 'i-lucide-eye', title: 'Full Transparency', description: 'Digital ledger access, real-time tenant communications, and monthly financial statements.' },
  { icon: 'i-lucide-wrench', title: 'Proactive Maintenance', description: 'Scheduled inspections, rapid repair response, and preventive maintenance programs.' },
  { icon: 'i-lucide-users', title: 'Tenant Management', description: 'Rigorous screening, professional relations, and efficient vacancy minimization.' },
  { icon: 'i-lucide-shield-check', title: 'Legal Compliance', description: 'Full adherence to tenancy laws, rent regulations, and property management standards.' },
  { icon: 'i-lucide-file-bar-chart', title: 'Monthly Reports', description: 'Detailed income/expense statements, occupancy reports, and portfolio performance metrics.' }
]
</script>

<template>
  <section class="bg-surface py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Why Choose Us</h2>
        <p class="text-text-muted max-w-2xl mx-auto">A comprehensive management approach designed to protect and grow your investment</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="bg-light-bg p-6 rounded-xl border border-border-main hover:shadow-md transition-shadow"
        >
          <UIcon :name="benefit.icon" class="w-8 h-8 text-brand-500 mb-4" />
          <h3 class="font-display font-bold text-text-primary mb-2">{{ benefit.title }}</h3>
          <p class="text-sm text-text-muted leading-relaxed">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
