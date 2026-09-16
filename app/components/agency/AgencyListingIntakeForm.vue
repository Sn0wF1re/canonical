<script setup lang="ts">
import { siteContent } from '~/content/site'

type IntakeMode = 'owner' | 'seeker'

const mode = ref<IntakeMode>('owner')
const submitted = ref(false)

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  propertyType: '',
  location: '',
  intent: '',
  budget: '',
  askingPrice: '',
  message: ''
})

const honeypot = ref('')
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
  if (mode.value === 'owner') {
    if (!state.propertyType) errors.push({ name: 'propertyType', message: 'Property type is required' })
  } else if (!state.intent) {
    errors.push({ name: 'intent', message: 'Please tell us what you are looking for' })
  }
  if (!state.location) errors.push({ name: 'location', message: 'Property location is required' })
  return errors
}

function retryTurnstile() {
  turnstileFailed.value = false
  errorMessage.value = ''
  turnstileRef.value?.reset()
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
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        type: 'agency',
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        message: form.message,
        details: {
          'Intake Mode': mode.value === 'owner' ? 'Property Owner' : 'Buyer / Tenant',
          'Property Type': form.propertyType,
          'Property Location': form.location,
          'Looking To': form.intent,
          'Listing Intent / Budget': form.budget,
          'Asking Price': form.askingPrice
        },
        website: honeypot.value,
        token,
        action: 'agency',
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
  <section id="request" class="bg-light-bg py-16 sm:py-24">
    <div class="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="text-center mb-10">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">List, Buy or Rent With Us</h2>
        <p class="text-text-muted">Tell us what you need — our agency team will respond within one business day</p>
      </div>

      <div v-if="submitted" class="bg-brand-50 border border-brand-200 rounded-xl p-8 text-center">
        <UIcon name="i-lucide-check-circle" class="w-12 h-12 text-brand-600 mx-auto mb-4" />
        <h3 class="font-display font-bold text-text-primary text-xl mb-2">Inquiry Submitted</h3>
        <p class="text-text-muted">Thank you, {{ form.fullName }}. Our agency team will contact you shortly.</p>
      </div>

      <UForm
        v-else
        :state="form"
        :validate="validate"
        class="bg-white border border-border-main rounded-xl p-6 sm:p-8 space-y-5"
        @submit="handleSubmit"
      >
        <input v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

        <div class="flex flex-col sm:flex-row gap-2 p-1 bg-light-muted rounded-lg">
          <button
            type="button"
            @click="mode = 'owner'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="mode === 'owner' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            I'm a Property Owner
          </button>
          <button
            type="button"
            @click="mode = 'seeker'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="mode === 'seeker' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            I'm Buying / Renting
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <UFormField label="Full Name" name="fullName" required :ui="fieldUi">
            <UInput v-model="form.fullName" placeholder="Brian Otieno" class="w-full" />
          </UFormField>
          <UFormField label="Email" name="email" required :ui="fieldUi">
            <UInput v-model="form.email" type="email" placeholder="brian@example.com" class="w-full" />
          </UFormField>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <UFormField label="Phone" name="phone" required :ui="fieldUi">
            <UInput v-model="form.phone" type="tel" placeholder="+254 7XX XXX XXX" class="w-full" />
          </UFormField>
          <UFormField v-if="mode === 'owner'" label="Property Type" name="propertyType" required :ui="fieldUi">
            <UInput v-model="form.propertyType" placeholder="e.g. Apartment block, Land parcel" class="w-full" />
          </UFormField>
          <UFormField v-else label="Looking To" name="intent" required :ui="fieldUi">
            <UInput v-model="form.intent" placeholder="e.g. Buy, Rent" class="w-full" />
          </UFormField>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <UFormField label="Property Location" name="location" required :ui="fieldUi">
            <UInput v-model="form.location" placeholder="e.g. Kilimani, Nairobi" class="w-full" />
          </UFormField>
          <UFormField v-if="mode === 'owner'" label="Listing Intent" name="budget" :ui="fieldUi">
            <UInput v-model="form.budget" placeholder="e.g. For Sale or To Let" class="w-full" />
          </UFormField>
          <UFormField v-else label="Budget Range" name="budget" :ui="fieldUi">
            <UInput v-model="form.budget" placeholder="e.g. KES 15M – 25M" class="w-full" />
          </UFormField>
        </div>

        <UFormField v-if="mode === 'owner'" label="Asking Price" name="askingPrice" :ui="fieldUi">
          <UInput v-model="form.askingPrice" placeholder="e.g. KES 25,000,000" class="w-full" />
        </UFormField>

        <UFormField label="Additional Details" name="message" :ui="fieldUi">
          <UTextarea v-model="form.message" :rows="4" placeholder="Tell us about the property or your requirements..." class="w-full" />
        </UFormField>

        <UAlert v-if="errorMessage" color="error" variant="soft" :title="errorMessage" />

        <TurnstileChallenge v-if="turnstileEnabled" ref="turnstileRef" v-model="turnstileToken" action="agency" />

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
  </section>
</template>
