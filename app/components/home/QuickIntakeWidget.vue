<script setup lang="ts">
import { ref } from 'vue'

const selectedService = ref<'valuation' | 'management'>('valuation')

const valuationFields = [
  { name: 'fullName', label: 'Full Name', placeholder: 'John Kamau' },
  { name: 'email', label: 'Email Address', placeholder: 'john@example.com' },
  { name: 'phone', label: 'Phone Number', placeholder: '+254 7XX XXX XXX' },
  { name: 'propertyType', label: 'Property Type', placeholder: 'e.g. Commercial, Residential, Industrial' },
  { name: 'location', label: 'Property Location', placeholder: 'e.g. Westlands, Nairobi' }
]

const managementFields = [
  { name: 'fullName', label: 'Full Name', placeholder: 'Jane Wanjiku' },
  { name: 'email', label: 'Email Address', placeholder: 'jane@example.com' },
  { name: 'phone', label: 'Phone Number', placeholder: '+254 7XX XXX XXX' },
  { name: 'units', label: 'Number of Units', placeholder: 'e.g. 5 residential units' },
  { name: 'currentOccupancy', label: 'Current Occupancy Rate', placeholder: 'e.g. 80%' }
]
</script>

<template>
  <section class="bg-surface pt-20 pb-16 sm:pt-28 sm:pb-24">
    <div class="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="text-center mb-10">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Intake Gateway</p>
        <h2 class="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-3">Get Started</h2>
        <p class="text-text-muted">Choose a service to begin your inquiry</p>
      </div>

      <div class="bg-white border border-border-main rounded-xl p-6 sm:p-8 shadow-sm">
        <div class="flex gap-2 mb-8 p-1 bg-light-muted rounded-lg">
          <button
            @click="selectedService = 'valuation'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="selectedService === 'valuation' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            Valuation Request
          </button>
          <button
            @click="selectedService = 'management'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="selectedService === 'management' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            Property Management
          </button>
        </div>

        <form class="space-y-5">
          <div v-for="field in (selectedService === 'valuation' ? valuationFields : managementFields)" :key="field.name">
            <label :for="field.name" class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
              {{ field.label }}
            </label>
            <input
              :id="field.name"
              :name="field.name"
              :placeholder="field.placeholder"
              class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label for="message" class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
              Additional Details
            </label>
            <textarea
              id="message"
              rows="3"
              placeholder="Tell us about your requirements..."
              class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
            />
          </div>
          <UButton type="submit" color="primary" size="lg" block trailing-icon="i-lucide-send">
            Submit Inquiry
          </UButton>
        </form>
      </div>
    </div>
  </section>
</template>
