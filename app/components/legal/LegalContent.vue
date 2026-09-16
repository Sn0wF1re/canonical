<script setup lang="ts">
import type { LegalSection } from '~/content/legal'
import { legalReviewNotice } from '~/content/legal'

defineProps<{
  intro: string
  sections: LegalSection[]
}>()

interface TextSegment {
  text: string
  href?: string
}

// Render plain-text paragraphs while turning bare URLs into real links.
// Keeps the content model as plain strings (no HTML in the data layer).
function segments(paragraph: string): TextSegment[] {
  const parts: TextSegment[] = []
  const urlPattern = /(https?:\/\/[^\s)]+)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = urlPattern.exec(paragraph)) !== null) {
    if (match.index > lastIndex) parts.push({ text: paragraph.slice(lastIndex, match.index) })
    parts.push({ text: match[1], href: match[1] })
    lastIndex = match.index + match[1].length
  }

  if (lastIndex < paragraph.length) parts.push({ text: paragraph.slice(lastIndex) })
  return parts.length ? parts : [{ text: paragraph }]
}
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
          <template v-for="(segment, k) in segments(paragraph)" :key="k">
            <a
              v-if="segment.href"
              :href="segment.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-brand-800 underline hover:text-text-primary transition-colors"
            >{{ segment.text }}</a>
            <template v-else>{{ segment.text }}</template>
          </template>
        </p>
      </div>
    </div>
  </section>
</template>
