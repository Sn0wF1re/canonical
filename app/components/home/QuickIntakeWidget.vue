<script setup lang="ts">
import { ref } from 'vue'

type ServiceMode = 'valuation' | 'management' | 'agency'
type FieldName = 'fullName' | 'email' | 'phone' | 'propertyType' | 'units' | 'currentOccupancy' | 'interest' | 'location'

const selectedService = ref<ServiceMode>('valuation')

const fieldsByService: Record<ServiceMode, Array<{ name: FieldName; label: string; placeholder: string }>> = {
  valuation: [
    { name: 'fullName', label: 'Full Name', placeholder: 'John Kamau' },
    { name: 'email', label: 'Email Address', placeholder: 'john@example.com' },
    { name: 'phone', label: 'Phone Number', placeholder: '+254 7XX XXX XXX' },
    { name: 'propertyType', label: 'Property Type', placeholder: 'e.g. Commercial, Residential, Industrial' },
    { name: 'location', label: 'Property Location', placeholder: 'e.g. Westlands, Nairobi' }
  ],
  management: [
    { name: 'fullName', label: 'Full Name', placeholder: 'Jane Wanjiku' },
    { name: 'email', label: 'Email Address', placeholder: 'jane@example.com' },
    { name: 'phone', label: 'Phone Number', placeholder: '+254 7XX XXX XXX' },
    { name: 'units', label: 'Number of Units', placeholder: 'e.g. 5 residential units' },
    { name: 'currentOccupancy', label: 'Current Occupancy Rate', placeholder: 'e.g. 80%' }
  ],
  agency: [
    { name: 'fullName', label: 'Full Name', placeholder: 'Brian Otieno' },
    { name: 'email', label: 'Email Address', placeholder: 'brian@example.com' },
    { name: 'phone', label: 'Phone Number', placeholder: '+254 7XX XXX XXX' },
    { name: 'interest', label: 'I Want To', placeholder: 'e.g. Buy, Sell, or Rent' },
    { name: 'location', label: 'Preferred Location', placeholder: 'e.g. Karen, Nairobi' }
  ]
const MODE_LABELS: Record<ServiceMode, string> = {
  valuation: 'Valuation Request',
  management: 'Property Management',
  agency: 'Buy / Sell / Rent'
}

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  propertyType: '',
  units: '',
  currentOccupancy: '',
  interest: '',
  location: '',
  message: ''
})

const honeypot = ref('')
const submitted = ref(false)
const sending = ref(false)
const errorMessage = ref('')
const turnstileToken = ref('')
const loadedAt = Date.now()
const { enabled: turnstileEnabled, waitToken } = useTurnstile()

const SERVICE_TYPES: Record<ServiceMode, string> = {
  valuation: 'valuation',
  management: 'management',
  agency: 'agency'
}

async function handleSubmit() {
  errorMessage.value = ''
  sending.value = true
  try {
    const token = await waitToken(turnstileToken)
    const base = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      message: form.message
    }
    const details: Record<string, string> = { 'Inquiry Mode': MODE_LABELS[selectedService.value] }
    if (selectedService.value === 'valuation') {
      details['Property Type'] = form.propertyType
      details['Property Location'] = form.location
    } else if (selectedService.value === 'management') {
      details['Number of Units'] = form.units
      details['Current Occupancy Rate'] = form.currentOccupancy
    } else {
      details['Interest'] = form.interest
      details['Preferred Location'] = form.location
    }

    await $fetch('/api/contact', {
      method: 'POST',
      body: { type: SERVICE_TYPES[selectedService.value], ...base, details, website: honeypot.value, token, loadedAt }
    })
    submitted.value = true
  } catch (error) {
    errorMessage.value = (error as { data?: { message?: string } })?.data?.message
      ?? 'Something went wrong sending your inquiry. Please try again, or reach us on WhatsApp.'
  } finally {
    sending.value = false
  }
}
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
        <div class="flex flex-col sm:flex-row gap-2 mb-8 p-1 bg-light-muted rounded-lg">
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
          <button
            @click="selectedService = 'agency'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="selectedService === 'agency' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            Buy / Sell / Rent
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <input v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
          <div v-for="field in fieldsByService[selectedService]" :key="field.name">
            <label :for="field.name" class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
              {{ field.label }}
            </label>
            <input
              :id="field.name"
              v-model="form[field.name]"
              :name="field.name"
              :placeholder="field.placeholder"
              :required="['fullName', 'email', 'phone'].includes(field.name)"
              class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label for="message" class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
              Additional Details
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="3"
              placeholder="Tell us about your requirements..."
              class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
            />
          </div>
          <div v-if="errorMessage" class="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            <p class="text-sm text-red-700 text-center">{{ errorMessage }}</p>
          </div>
          <TurnstileChallenge v-if="turnstileEnabled" v-model="turnstileToken" />
          <UButton type="submit" color="primary" size="lg" block trailing-icon="i-lucide-send" :disabled="sending">
            {{ sending ? 'Sending…' : 'Submit Inquiry' }}
          </UButton>
          <p class="text-xs text-text-muted text-center">
            By submitting, you agree to our
            <NuxtLink to="/privacy-policy" class="underline hover:text-text-primary transition-colors">Privacy Policy</NuxtLink>.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
