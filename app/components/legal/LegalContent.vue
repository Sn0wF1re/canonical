<script setup lang="ts">
import type { LegalSection } from '~/content/legal'
import { legalReviewNotice } from '~/content/legal'

defineProps<{
  intro: string
  sections: LegalSection[]
}>()
</script>

<template>
  <section class="bg-surface py-16 sm:py-24">
    <div class="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="bg-brand-50 border border-brand-200 rounded-xl p-5 sm:p-6 mb-10">
        <p class="text-sm text-text-primary leading-relaxed">{{ legalReviewNotice }}</p>
      </div>

      <p class="text-lg text-text-muted leading-relaxed mb-12">{{ intro }}</p>

      <div v-for="(section, i) in sections" :key="section.heading" class="mb-10 last:mb-0">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
          {{ String(i + 1).padStart(2, '0') }}
        </p>
        <h2 class="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4">
          {{ section.heading }}
        </h2>
        <p v-for="(paragraph, j) in section.paragraphs" :key="j" class="text-text-muted leading-relaxed mb-4 last:mb-0">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
