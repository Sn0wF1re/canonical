<script setup lang="ts">
import { siteContent } from '~/content/site'

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  propertyType: '',
  units: '',
  location: '',
  currentOccupancy: '',
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
const whatsappHref = `https://wa.me/${siteContent.company.whatsapp.replace(/[^0-9]/g, '')}`
const phoneHref = `tel:${siteContent.company.phone.replace(/[^0-9+]/g, '')}`

const fieldUi = { label: 'text-xs font-semibold uppercase tracking-wider text-text-muted' }

function validate(state: typeof form) {
  const errors: Array<{ name: string; message: string }> = []
  if (!state.fullName) errors.push({ name: 'fullName', message: 'Full name is required' })
  if (!state.email) errors.push({ name: 'email', message: 'Email address is required' })
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(state.email)) errors.push({ name: 'email', message: 'Enter a valid email address' })
  if (!state.phone) errors.push({ name: 'phone', message: 'Phone number is required' })
  if (!state.propertyType) errors.push({ name: 'propertyType', message: 'Property type is required' })
  return errors
}


async function handleSubmit() {
  errorMessage.value = ''
  sending.value = true
  try {
    if (turnstileEnabled && !turnstileToken.value) {
      verifying.value = true
      await waitToken(turnstileToken, 20000)
      verifying.value = false
    }
    const token = turnstileToken.value
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        type: 'management',
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        message: form.message,
        details: {
          'Property Type': form.propertyType,
          'Number of Units': form.units,
          'Location': form.location,
          'Current Occupancy': form.currentOccupancy
        },
        website: honeypot.value,
        token,
        action: 'management',
        loadedAt
      }
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
  <section id="request" class="bg-surface py-16 sm:py-24">
    <div class="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="text-center mb-10">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Landlord Inquiry</h2>
        <p class="text-text-muted">Tell us about your property and we'll prepare a management proposal</p>
      </div>

      <div v-if="submitted" class="bg-brand-50 border border-brand-200 rounded-xl p-8 text-center">
        <UIcon name="i-lucide-check-circle" class="w-12 h-12 text-brand-600 mx-auto mb-4" />
        <h3 class="font-display font-bold text-text-primary text-xl mb-2">Inquiry Submitted</h3>
        <p class="text-text-muted">Thank you, {{ form.fullName }}. Our team will contact you shortly.</p>
      </div>

      <UForm
        v-else
        :state="form"
        :validate="validate"
        class="bg-white border border-border-main rounded-xl p-6 sm:p-8 space-y-5"
        @submit="handleSubmit"
      >
        <input v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <UFormField label="Full Name" name="fullName" required :ui="fieldUi">
            <UInput v-model="form.fullName" placeholder="Jane Wanjiku" class="w-full" />
          </UFormField>
          <UFormField label="Email" name="email" required :ui="fieldUi">
            <UInput v-model="form.email" type="email" placeholder="jane@example.com" class="w-full" />
          </UFormField>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <UFormField label="Phone" name="phone" required :ui="fieldUi">
            <UInput v-model="form.phone" type="tel" placeholder="+254 7XX XXX XXX" class="w-full" />
          </UFormField>
          <UFormField label="Property Type" name="propertyType" required :ui="fieldUi">
            <UInput v-model="form.propertyType" placeholder="e.g. Apartment block, Commercial" class="w-full" />
          </UFormField>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <UFormField label="Number of Units" name="units" :ui="fieldUi">
            <UInput v-model="form.units" placeholder="e.g. 10" class="w-full" />
          </UFormField>
          <UFormField label="Location" name="location" :ui="fieldUi">
            <UInput v-model="form.location" placeholder="e.g. Kilimani, Nairobi" class="w-full" />
          </UFormField>
          <UFormField label="Current Occupancy" name="currentOccupancy" :ui="fieldUi">
            <UInput v-model="form.currentOccupancy" placeholder="e.g. 80%" class="w-full" />
          </UFormField>
        </div>

        <UFormField label="Additional Details" name="message" :ui="fieldUi">
          <UTextarea v-model="form.message" :rows="4" placeholder="Tell us about your property and management needs..." class="w-full" />
        </UFormField>

        <div v-if="errorMessage" class="space-y-3">


          <UAlert color="error" variant="soft" :title="errorMessage" />


          <div class="flex flex-wrap gap-3">


            <UButton :to="whatsappHref" target="_blank" color="primary" icon="i-lucide-message-circle">WhatsApp Us</UButton>


            <UButton :href="phoneHref" variant="outline" color="neutral" icon="i-lucide-phone">Call Us</UButton>


          </div>


        </div>

        <TurnstileChallenge v-if="turnstileEnabled" ref="turnstileRef" v-model="turnstileToken" action="management" />

        <div v-if="verifying" class="flex items-center justify-center gap-2 bg-light-muted border border-border-main rounded-lg px-4 py-3">
          <UIcon name="i-lucide-loader-circle" class="w-4 h-4 animate-spin text-text-muted" />
          <p class="text-sm text-text-muted">Verifying you're human…</p>
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
  </section>
</template>
