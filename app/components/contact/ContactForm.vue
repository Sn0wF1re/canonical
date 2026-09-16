<script setup lang="ts">
import { ref } from 'vue'
import { siteContent } from '~/content/site'

const selectedType = ref<'valuation' | 'management' | 'general'>('general')

const TYPE_LABELS: Record<string, string> = {
  valuation: 'Valuation Request',
  management: 'Property Management Inquiry',
  general: 'General Consultation'
}

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  subject: '',
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
  if (!state.subject) errors.push({ name: 'subject', message: 'Subject is required' })
  if (!state.message) errors.push({ name: 'message', message: 'Message is required' })
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
        type: 'contact',
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        message: form.message,
        details: {
          'Inquiry Type': TYPE_LABELS[selectedType.value],
          'Subject': form.subject
        },
        website: honeypot.value,
        token,
        action: 'contact',
        loadedAt
      }
    })
    submitted.value = true
  } catch (error) {
    errorMessage.value = (error as { data?: { message?: string } })?.data?.message
      ?? 'Something went wrong sending your message. Please try again, or reach us on WhatsApp.'
    turnstileRef.value?.reset()
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section class="bg-surface py-16 sm:py-24">
    <div class="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="text-center mb-10">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Send Us a Message</h2>
        <p class="text-text-muted">Select an inquiry type and fill in the details below</p>
      </div>

      <div v-if="submitted" class="bg-brand-50 border border-brand-200 rounded-xl p-8 text-center">
        <UIcon name="i-lucide-check-circle" class="w-12 h-12 text-brand-600 mx-auto mb-4" />
        <h3 class="font-display font-bold text-text-primary text-xl mb-2">Message Sent</h3>
        <p class="text-text-muted">Thank you, {{ form.fullName }}. We'll respond within one business day.</p>
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
            @click="selectedType = 'valuation'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="selectedType === 'valuation' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            Valuation Request
          </button>
          <button
            type="button"
            @click="selectedType = 'management'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="selectedType === 'management' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            Property Management
          </button>
          <button
            type="button"
            @click="selectedType = 'general'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="selectedType === 'general' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            General Inquiry
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <UFormField label="Full Name" name="fullName" required :ui="fieldUi">
            <UInput v-model="form.fullName" placeholder="Your full name" class="w-full" />
          </UFormField>
          <UFormField label="Email" name="email" required :ui="fieldUi">
            <UInput v-model="form.email" type="email" placeholder="you@example.com" class="w-full" />
          </UFormField>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <UFormField label="Phone" name="phone" :ui="fieldUi">
            <UInput v-model="form.phone" type="tel" placeholder="+254 7XX XXX XXX" class="w-full" />
          </UFormField>
          <UFormField label="Subject" name="subject" required :ui="fieldUi">
            <UInput v-model="form.subject" placeholder="Brief subject line" class="w-full" />
          </UFormField>
        </div>

        <UFormField label="Message" name="message" required :ui="fieldUi">
          <UTextarea v-model="form.message" :rows="5" placeholder="Tell us how we can help..." class="w-full" />
        </UFormField>

        <UAlert v-if="errorMessage" color="error" variant="soft" :title="errorMessage" />

        <TurnstileChallenge v-if="turnstileEnabled" ref="turnstileRef" v-model="turnstileToken" action="contact" />

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
          {{ sending ? 'Sending…' : 'Send Message' }}
        </UButton>
        <p class="text-xs text-text-muted text-center">
          By submitting, you agree to our
          <NuxtLink to="/privacy-policy" class="underline hover:text-text-primary transition-colors">Privacy Policy</NuxtLink>.
        </p>
      </UForm>
    </div>
  </section>
</template>
