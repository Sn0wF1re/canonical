<script setup lang="ts">
const benefits = [
  {
    icon: 'i-lucide-bar-chart-3',
    title: 'Yield Protection',
    description: 'Maximize rental returns through market-aligned pricing, reduced vacancy periods, and proactive tenant management.'
  },
  {
    icon: 'i-lucide-smartphone',
    title: 'Digital Transparency',
    description: 'Real-time access to financial ledgers, tenant communications, and maintenance tickets through our digital management platform.'
  },
  {
    icon: 'i-lucide-shield',
    title: 'Compliance Assured',
    description: 'Full adherence to landlord-tenant law, rent collection regulations, and property management best practices in Kenya.'
  }
]
</script>

<template>
  <section class="bg-dark-primary py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-dots pointer-events-none" />
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Asset Protection System</p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Tech-Enabled Management. Yield-Focused Results.
          </h2>
          <p class="text-white/60 leading-relaxed mb-8">
            We combine professional property management with digital tools that give landlords complete visibility into their portfolio's performance — from rent collection to maintenance resolution.
          </p>
          <UButton to="/services/property-management" color="primary" size="lg" trailing-icon="i-lucide-arrow-right">
            Learn More
          </UButton>
        </div>

        <div class="space-y-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="bg-dark-elevated p-6 rounded-xl border border-dark-muted hover:border-brand-500/30 transition-colors"
          >
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                <UIcon :name="benefit.icon" class="w-5 h-5 text-brand-500" />
              </div>
              <div>
                <h3 class="font-display font-bold text-white mb-1">{{ benefit.title }}</h3>
                <p class="text-sm text-white/50 leading-relaxed">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
