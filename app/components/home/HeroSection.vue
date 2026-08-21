<script setup lang="ts">
</script>

<template>
  <section class="relative bg-dark-primary overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(152,255,152,0.03) 80px, rgba(152,255,152,0.03) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(152,255,152,0.03) 80px, rgba(152,255,152,0.03) 81px);" />
    </div>

    <div class="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
      <div class="max-w-3xl">
        <p class="text-brand-500 font-display font-semibold text-sm uppercase tracking-widest mb-6">
          Decision-Grade Valuation & Management
        </p>
        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Canonical <span class="text-brand-500">Realty</span>
        </h1>
        <p class="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
          Kenya's trusted partner for property valuation and management. VRB-registered, ISK-membered, and committed to evidence-based methodology.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <UButton to="/services/valuation" color="primary" size="lg" trailing-icon="i-lucide-arrow-right">
            Request Valuation
          </UButton>
          <UButton to="/services/property-management" color="neutral" variant="outline" size="lg" :ui="{ label: 'text-white', base: 'border-white/20 hover:bg-white/10' }">
            Property Management
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
