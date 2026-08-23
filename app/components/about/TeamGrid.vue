<script setup lang="ts">
import { siteContent } from '~/content/site'
</script>

<template>
  <section class="bg-light-muted py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-dots pointer-events-none" />
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Our Team</h2>
        <p class="text-text-muted">Led by registered professionals with decades of combined experience</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div
          v-for="member in siteContent.team"
          :key="member.name"
          class="bg-white p-6 rounded-xl border border-border-main text-center"
        >
          <div class="w-24 h-24 rounded-full bg-dark-muted mx-auto mb-4 flex items-center justify-center">
            <UIcon name="i-lucide-user" class="w-10 h-10 text-white/40" />
          </div>
          <h3 class="font-display font-bold text-text-primary mb-1">{{ member.name }}</h3>
          <p class="text-sm text-brand-600 font-semibold mb-1">{{ member.title }}</p>
          <p class="text-xs text-text-muted mb-3">{{ member.vrbNumber }}</p>
          <p class="text-sm text-text-muted leading-relaxed">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
