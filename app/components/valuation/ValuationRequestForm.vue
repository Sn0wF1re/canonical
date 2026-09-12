<script setup lang="ts">
const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  propertyType: '',
  location: '',
  purpose: '',
  message: ''
})

const honeypot = ref('')
const submitted = ref(false)
const sending = ref(false)
const errorMessage = ref('')
const turnstileToken = ref('')
const loadedAt = Date.now()
const { enabled: turnstileEnabled, waitToken } = useTurnstile()

async function handleSubmit() {
  errorMessage.value = ''
  sending.value = true
  try {
    const token = await waitToken(turnstileToken)
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        type: 'valuation',
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        message: form.message,
        details: {
          'Property Type': form.propertyType,
          'Property Location': form.location,
          'Purpose': form.purpose
        },
        website: honeypot.value,
        token,
        loadedAt
      }
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
  <section id="request" class="bg-surface py-16 sm:py-24">
    <div class="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="text-center mb-10">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Request a Valuation</h2>
        <p class="text-text-muted">Fill in the details below and our team will respond within one business day</p>
      </div>

      <div v-if="submitted" class="bg-brand-50 border border-brand-200 rounded-xl p-8 text-center">
        <UIcon name="i-lucide-check-circle" class="w-12 h-12 text-brand-600 mx-auto mb-4" />
        <h3 class="font-display font-bold text-text-primary text-xl mb-2">Inquiry Submitted</h3>
        <p class="text-text-muted">Thank you, {{ form.fullName }}. Our team will contact you shortly.</p>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="bg-white border border-border-main rounded-xl p-6 sm:p-8 space-y-5">
        <input v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Full Name *</label>
            <input v-model="form.fullName" required placeholder="John Kamau" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Email *</label>
            <input v-model="form.email" type="email" required placeholder="john@example.com" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Phone *</label>
            <input v-model="form.phone" type="tel" required placeholder="+254 7XX XXX XXX" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Property Type *</label>
            <input v-model="form.propertyType" required placeholder="e.g. Commercial, Residential" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Property Location *</label>
            <input v-model="form.location" required placeholder="e.g. Westlands, Nairobi" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Purpose of Valuation</label>
            <input v-model="form.purpose" placeholder="e.g. Mortgage, Audit, Sale" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Additional Details</label>
          <textarea v-model="form.message" rows="4" placeholder="Any additional information about the property or your requirements..." class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none" />
        </div>

        <div v-if="errorMessage" class="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <p class="text-sm text-red-700 text-center">{{ errorMessage }}</p>
        </div>

        <TurnstileChallenge v-if="turnstileEnabled" v-model="turnstileToken" />

        <UButton type="submit" color="primary" size="lg" block trailing-icon="i-lucide-send" :disabled="sending">
          {{ sending ? 'Sending…' : 'Submit Valuation Request' }}
        </UButton>
        <p class="text-xs text-text-muted text-center">
          By submitting, you agree to our
          <NuxtLink to="/privacy-policy" class="underline hover:text-text-primary transition-colors">Privacy Policy</NuxtLink>.
        </p>
      </form>
    </div>
  </section>
</template>
