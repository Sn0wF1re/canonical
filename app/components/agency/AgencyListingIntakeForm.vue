<script setup lang="ts">
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

function handleSubmit() {
  submitted.value = true
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

      <form v-else @submit.prevent="handleSubmit" class="bg-white border border-border-main rounded-xl p-6 sm:p-8 space-y-5">
        <!-- Mode Toggle -->
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
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Full Name *</label>
            <input v-model="form.fullName" required placeholder="Brian Otieno" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Email *</label>
            <input v-model="form.email" type="email" required placeholder="brian@example.com" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Phone *</label>
            <input v-model="form.phone" type="tel" required placeholder="+254 7XX XXX XXX" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div v-if="mode === 'owner'">
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Property Type *</label>
            <input v-model="form.propertyType" required placeholder="e.g. Apartment block, Land parcel" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div v-else>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Looking To *</label>
            <input v-model="form.intent" required placeholder="e.g. Buy, Rent" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Property Location *</label>
            <input v-model="form.location" required placeholder="e.g. Kilimani, Nairobi" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div v-if="mode === 'owner'">
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Listing Intent</label>
            <input v-model="form.budget" placeholder="e.g. For Sale or To Let" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div v-else>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Budget Range</label>
            <input v-model="form.budget" placeholder="e.g. KES 15M – 25M" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
        </div>

        <div v-if="mode === 'owner'">
          <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Asking Price</label>
          <input v-model="form.askingPrice" placeholder="e.g. KES 25,000,000" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Additional Details</label>
          <textarea v-model="form.message" rows="4" placeholder="Tell us about the property or your requirements..." class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none" />
        </div>

        <UButton type="submit" color="primary" size="lg" block trailing-icon="i-lucide-send">
          Submit Inquiry
        </UButton>
      </form>
    </div>
  </section>
</template>
