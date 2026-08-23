<script setup lang="ts">
const useCases = [
  {
    title: 'Mortgage & Financing',
    content: 'Bank-compliant valuation reports for loan origination, refinancing, and mortgage security purposes. Accepted by all major Kenyan financial institutions.'
  },
  {
    title: 'Financial Audit & Reporting',
    content: 'IFRS-compliant valuations for annual financial statements, asset revaluation, and corporate reporting requirements.'
  },
  {
    title: 'Dispute & Litigation',
    content: 'Expert valuation evidence for court proceedings, family disputes, succession matters, and compensation claims.'
  },
  {
    title: 'Tax Assessment',
    content: 'Property valuations for stamp duty, capital gains tax, and local authority rating purposes.'
  },
  {
    title: 'Pre-Sale & Acquisition',
    content: 'Independent market value assessments for property transactions, portfolio acquisitions, and investment decisions.'
  }
]
</script>

<template>
  <section class="bg-surface py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="max-w-2xl mb-12">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Institutional Applications</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">Use Cases</h2>
        <p class="text-text-muted">Our valuations serve a wide range of institutional and private purposes</p>
      </div>

      <div class="max-w-3xl">
        <UAccordion :items="useCases.map(uc => ({ label: uc.title, content: uc.content }))" />
      </div>
    </div>
  </section>
</template>
