<script setup lang="ts">
import { siteContent } from '~/content/site'

const { elementRef: headingRef, isRevealed } = useReveal()

const listings = siteContent.listings

const statusClasses: Record<string, string> = {
  'For Sale': 'bg-brand-500 text-dark-primary',
  'To Let': 'bg-white text-dark-primary border border-border-main',
  'Under Offer': 'bg-dark-primary text-white border border-white/20'
}
</script>

<template>
  <section class="bg-surface py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div ref="headingRef" class="text-center mb-12 hero-text-reveal" :class="isRevealed ? 'hero-text-visible' : ''">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Featured Listings</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Properties for Sale &amp; To Let</h2>
        <p class="text-text-muted max-w-2xl mx-auto">Demonstration listings — request our full current portfolio of sales and lettings</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="listing in listings"
          :key="listing.title"
          class="group bg-white rounded-xl border border-border-main overflow-hidden hover:shadow-lg hover:border-brand-500/30 transition-all"
        >
          <!-- Placeholder Image Container -->
          <div class="relative h-44 bg-dark-elevated overflow-hidden">
            <div class="absolute inset-0 pattern-grid opacity-40" />
            <div class="absolute inset-0 flex items-center justify-center">
              <UIcon name="i-lucide-building" class="w-10 h-10 text-white/10" />
            </div>
            <span
              class="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1"
              :class="statusClasses[listing.status]"
            >
              {{ listing.status }}
            </span>
          </div>

          <div class="p-5">
            <div class="flex items-center gap-1.5 text-xs text-text-muted mb-2">
              <UIcon name="i-lucide-map-pin" class="w-3.5 h-3.5 shrink-0" />
              {{ listing.location }}
            </div>
            <h3 class="font-display font-bold text-text-primary mb-3">{{ listing.title }}</h3>
            <div class="flex items-center gap-4 text-xs text-text-muted mb-4">
              <span v-for="spec in listing.specs" :key="spec.label" class="flex items-center gap-1">
                <UIcon :name="spec.icon" class="w-3.5 h-3.5 shrink-0" />
                {{ spec.label }}
              </span>
            </div>
            <div class="flex items-center justify-between pt-3 border-t border-border-main">
              <span class="font-display font-bold text-brand-600 text-sm">{{ listing.price }}</span>
              <span class="flex items-center gap-1 text-xs font-semibold text-brand-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Enquire
                <UIcon name="i-lucide-arrow-right" class="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
