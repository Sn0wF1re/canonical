<script setup lang="ts">
const faqs = [
  { label: 'What is your management fee?', content: 'Our standard management fee is 7% of gross monthly rental income. This includes tenant management, rent collection, maintenance coordination, and monthly reporting. Exact terms are agreed upon during onboarding.' },
  { label: 'How do you handle tenant screening?', content: 'We conduct comprehensive background checks including employment verification, credit history, previous landlord references, and identification verification. Only qualified tenants are approved.' },
  { label: 'How quickly do you fill vacancies?', content: 'Average vacancy periods depend on property type and location. Our digital marketing and extensive tenant database typically achieve occupancy within 2-4 weeks for well-priced properties.' },
  { label: 'What maintenance is included?', content: 'Routine maintenance, emergency repairs, scheduled inspections, and preventive maintenance programs are all managed. Major capital works are quoted separately with landlord approval.' },
  { label: 'How do I receive my rental income?', content: 'Monthly disbursements are made via bank transfer by the 15th of each month. A detailed statement accompanies every disbursement showing all income and expenses.' },
  { label: 'Can I terminate the management agreement?', content: 'Yes. Our agreements include a standard 60-day notice period. All tenant records, financial statements, and property documentation are transferred upon termination.' }
]
</script>

<template>
  <section class="bg-light-muted py-16 sm:py-24">
    <div class="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Frequently Asked Questions</h2>
        <p class="text-text-muted">Common questions about our property management services</p>
      </div>

      <UAccordion :items="faqs" />
    </div>
  </section>
</template>
