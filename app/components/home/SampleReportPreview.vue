<script setup lang="ts">
const sections = [
  { label: 'Executive Summary', description: 'Property overview and final valuation opinion' },
  { label: 'Property Description', description: 'Physical attributes, location analysis, zoning' },
  { label: 'Valuation Methodology', description: 'Approach applied and rationale' },
  { label: 'Market Analysis', description: 'Comparable evidence and market conditions' },
  { label: 'Financial Analysis', description: 'Income, replacement cost, or comparable sales data' },
  { label: 'Valuation Opinion', description: 'Final market value with certification' }
]
</script>

<template>
  <section class="bg-light-muted py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p class="text-brand-600 font-display font-semibold text-sm uppercase tracking-widest mb-3">Deliverable</p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            What Your Report Contains
          </h2>
          <p class="text-text-muted leading-relaxed mb-6">
            Every valuation report follows a structured, audit-ready format designed for institutional review. From banks to courts, our reports meet the documentation standards that stakeholders require.
          </p>
          <UButton to="/services/valuation" color="primary" trailing-icon="i-lucide-arrow-right">
            View Full Process
          </UButton>
        </div>

        <div class="bg-white rounded-xl border border-border-main p-6 sm:p-8">
          <div class="flex items-center gap-3 mb-6 pb-4 border-b border-border-main">
            <div class="w-10 h-10 rounded bg-brand-50 flex items-center justify-center">
              <UIcon name="i-lucide-file-check" class="w-5 h-5 text-brand-600" />
            </div>
            <div>
              <h3 class="font-display font-bold text-text-primary">Sample Report Structure</h3>
              <p class="text-xs text-text-muted">Standard VRB-compliant format</p>
            </div>
          </div>

          <div class="space-y-3">
            <div
              v-for="(section, i) in sections"
              :key="section.label"
              class="flex items-start gap-3 p-3 rounded-lg hover:bg-light-muted transition-colors"
            >
              <span class="w-6 h-6 rounded-full bg-brand-500 text-dark-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {{ i + 1 }}
              </span>
              <div>
                <p class="text-sm font-semibold text-text-primary">{{ section.label }}</p>
                <p class="text-xs text-text-muted">{{ section.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
