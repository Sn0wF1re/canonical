<script setup lang="ts">
import { ref } from 'vue'
import { siteContent } from '~/content/site'

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
}

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
const turnstileRef = ref<{ reset: () => void } | null>(null)
const verifying = ref(false)
const turnstileFailed = ref(false)
const whatsappHref = `https://wa.me/${siteContent.company.whatsapp.replace(/[^0-9]/g, '')}`
const phoneHref = `tel:${siteContent.company.phone.replace(/[^0-9+]/g, '')}`

const fieldUi = { label: 'text-xs font-semibold uppercase tracking-wider text-text-muted' }

function validate(state: typeof form) {
  const errors: Array<{ name: string; message: string }> = []
  if (!state.fullName) errors.push({ name: 'fullName', message: 'Full name is required' })
  if (!state.email) errors.push({ name: 'email', message: 'Email address is required' })
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(state.email)) errors.push({ name: 'email', message: 'Enter a valid email address' })
  if (!state.phone) errors.push({ name: 'phone', message: 'Phone number is required' })
  return errors
}

function retryTurnstile() {
  turnstileFailed.value = false
  errorMessage.value = ''
  turnstileRef.value?.reset()
}

const SERVICE_TYPES: Record<ServiceMode, string> = {
  valuation: 'valuation',
  management: 'management',
  agency: 'agency'
}

async function handleSubmit() {
  errorMessage.value = ''
  sending.value = true
  try {
    if (turnstileEnabled && !turnstileToken.value) {
      verifying.value = true
      turnstileFailed.value = false
      await waitToken(turnstileToken, 20000)
      verifying.value = false
    }
    const token = turnstileToken.value
    if (turnstileEnabled && !token) {
      turnstileFailed.value = true
      return
    }
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
      body: { type: SERVICE_TYPES[selectedService.value], action: 'quick-intake', ...base, details, website: honeypot.value, token, loadedAt }
    })
    submitted.value = true
  } catch (error) {
    errorMessage.value = (error as { data?: { message?: string } })?.data?.message
      ?? 'Something went wrong sending your inquiry. Please try again, or reach us on WhatsApp.'
    turnstileRef.value?.reset()
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

      <div v-if="submitted" class="bg-brand-50 border border-brand-200 rounded-xl p-8 text-center">
        <UIcon name="i-lucide-check-circle" class="w-12 h-12 text-brand-600 mx-auto mb-4" />
        <h3 class="font-display font-bold text-text-primary text-xl mb-2">Inquiry Submitted</h3>
        <p class="text-text-muted">Thank you, {{ form.fullName }}. Our team will contact you shortly.</p>
      </div>

      <div v-else class="bg-white border border-border-main rounded-xl p-6 sm:p-8 shadow-sm">
        <div class="flex flex-col sm:flex-row gap-2 mb-8 p-1 bg-light-muted rounded-lg">
          <button
            type="button"
            @click="selectedService = 'valuation'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="selectedService === 'valuation' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            Valuation Request
          </button>
          <button
            type="button"
            @click="selectedService = 'management'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="selectedService === 'management' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            Property Management
          </button>
          <button
            type="button"
            @click="selectedService = 'agency'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="selectedService === 'agency' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            Buy / Sell / Rent
          </button>
        </div>

        <UForm :state="form" :validate="validate" class="space-y-5" @submit="handleSubmit">
          <input v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

          <UFormField
            v-for="field in fieldsByService[selectedService]"
            :key="field.name"
            :label="field.label"
            :name="field.name"
            :required="['fullName', 'email', 'phone'].includes(field.name)"
            :ui="fieldUi"
          >
            <UInput v-model="form[field.name]" :placeholder="field.placeholder" class="w-full" />
          </UFormField>

          <UFormField label="Additional Details" name="message" :ui="fieldUi">
            <UTextarea v-model="form.message" :rows="3" placeholder="Tell us about your requirements..." class="w-full" />
          </UFormField>

          <UAlert v-if="errorMessage" color="error" variant="soft" :title="errorMessage" />

          <TurnstileChallenge v-if="turnstileEnabled" ref="turnstileRef" v-model="turnstileToken" action="quick-intake" />

          <div v-if="verifying" class="flex items-center justify-center gap-2 bg-light-muted border border-border-main rounded-lg px-4 py-3">
            <UIcon name="i-lucide-loader-circle" class="w-4 h-4 animate-spin text-text-muted" />
            <p class="text-sm text-text-muted">Verifying you're human…</p>
          </div>

          <div v-if="turnstileFailed" class="space-y-3">
            <UAlert
              color="warning"
              variant="soft"
              icon="i-lucide-shield-alert"
              title="We couldn't complete the security check"
              description="Please retry, or reach us directly so we don't miss your inquiry."
            />
            <div class="flex flex-wrap gap-3">
              <UButton :to="whatsappHref" target="_blank" color="primary" icon="i-lucide-message-circle">WhatsApp Us</UButton>
              <UButton :href="phoneHref" variant="outline" color="neutral" icon="i-lucide-phone">Call Us</UButton>
              <UButton variant="ghost" color="neutral" icon="i-lucide-refresh-cw" @click="retryTurnstile">Retry</UButton>
            </div>
          </div>

          <UButton type="submit" color="primary" size="lg" block trailing-icon="i-lucide-send" :disabled="sending">
            {{ sending ? 'Sending…' : 'Submit Inquiry' }}
          </UButton>
          <p class="text-xs text-text-muted text-center">
            By submitting, you agree to our
            <NuxtLink to="/privacy-policy" class="underline hover:text-text-primary transition-colors">Privacy Policy</NuxtLink>.
          </p>
        </UForm>
      </div>
    </div>
  </section>
</template>
