<script setup lang="ts">
const certificate = {
  refNo: 'CR/VRB/2026/XXXX',
  date: '[Date of Inspection]',
  property: {
    description: '[Property Description]',
    location: '[Location, Nairobi]',
    titleRef: '[Title Deed Reference]'
  },
  values: [
    { label: 'Market Value', amount: '[Content Placeholder: KES XX,XXX,XXX]' },
    { label: 'Mortgage Lending Value', amount: '[Content Placeholder: KES XX,XXX,XXX]' },
    { label: 'Insurance Reinatement', amount: '[Content Placeholder: KES XX,XXX,XXX]' }
  ],
  methodology: '[Content Placeholder: Valuation Methodology Applied]',
  compliance: 'IFRS 13 · VRB Act Cap 532 · ISK Guidelines',
  valuer: {
    name: '[Content Placeholder: Valuer Name]',
    title: 'Principal Registered Valuer',
    vrbNo: 'VRB No. [Placeholder]'
  }
}
</script>

<template>
  <section class="bg-light-muted py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Deliverable Evidence</p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Audit-Ready Report Delivery
          </h2>
          <p class="text-text-muted leading-relaxed mb-6">
            Every valuation report follows a structured, audit-ready format designed for institutional review. From banks to courts, our reports meet the documentation standards that stakeholders require.
          </p>
          <UButton to="/services/valuation" color="primary" trailing-icon="i-lucide-arrow-right">
            View Full Process
          </UButton>
        </div>

        <!-- Certificate Mockup -->
        <div class="bg-dark-elevated rounded-xl border border-white/10 p-6 sm:p-8 relative overflow-hidden">
          <!-- Background Pattern -->
          <div class="absolute inset-0 pattern-dots pointer-events-none opacity-30" />

          <div class="relative z-10">
            <!-- Header -->
            <div class="text-center mb-6 pb-6 border-b border-white/10">
              <div class="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-4">
                <div class="w-2 h-2 rounded-full bg-brand-500" />
                <span class="text-xs font-semibold text-brand-500 uppercase tracking-wider">Sample Deliverable</span>
              </div>
              <h3 class="font-display text-lg font-bold text-white">EXECUTIVE VALUATION CERTIFICATE</h3>
              <p class="text-xs text-white/40 mt-1">Ref: {{ certificate.refNo }}</p>
            </div>

            <!-- Property Details -->
            <div class="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <span class="block text-[10px] text-white/40 uppercase tracking-wider mb-1">Property</span>
                <span class="block text-sm text-white font-medium">{{ certificate.property.description }}</span>
              </div>
              <div>
                <span class="block text-[10px] text-white/40 uppercase tracking-wider mb-1">Location</span>
                <span class="block text-sm text-white font-medium">{{ certificate.property.location }}</span>
              </div>
              <div>
                <span class="block text-[10px] text-white/40 uppercase tracking-wider mb-1">Title Ref</span>
                <span class="block text-sm text-white font-medium">{{ certificate.property.titleRef }}</span>
              </div>
              <div>
                <span class="block text-[10px] text-white/40 uppercase tracking-wider mb-1">Date</span>
                <span class="block text-sm text-white font-medium">{{ certificate.date }}</span>
              </div>
            </div>

            <!-- Valuation Figures -->
            <div class="space-y-3 mb-6 pb-6 border-b border-white/10">
              <div v-for="item in certificate.values" :key="item.label" class="flex items-center justify-between">
                <span class="text-xs text-white/60">{{ item.label }}</span>
                <span class="text-sm font-mono font-bold text-brand-500">{{ item.amount }}</span>
              </div>
            </div>

            <!-- Methodology & Compliance -->
            <div class="mb-6 pb-6 border-b border-white/10">
              <span class="block text-[10px] text-white/40 uppercase tracking-wider mb-1">Methodology</span>
              <span class="block text-sm text-white/80 mb-3">{{ certificate.methodology }}</span>
              <div class="flex flex-wrap gap-2">
                <span v-for="std in certificate.compliance.split(' · ')" :key="std" class="text-[10px] font-medium text-brand-500/80 bg-brand-500/10 border border-brand-500/20 rounded-full px-2.5 py-0.5">
                  {{ std }}
                </span>
              </div>
            </div>

            <!-- Valuer Signature -->
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-semibold text-white">{{ certificate.valuer.name }}</p>
                <p class="text-xs text-white/50">{{ certificate.valuer.title }}</p>
                <p class="text-xs text-brand-500/70">{{ certificate.valuer.vrbNo }}</p>
              </div>
              <div class="text-right">
                <div class="w-16 h-px bg-white/20 mb-1" />
                <p class="text-[10px] text-white/40 uppercase tracking-wider">Authorized Signature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
