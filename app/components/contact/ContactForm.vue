<script setup lang="ts">
import { ref } from 'vue'

const selectedType = ref<'valuation' | 'management' | 'general'>('general')

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
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

      <form v-else @submit.prevent="handleSubmit" class="bg-white border border-border-main rounded-xl p-6 sm:p-8 space-y-5">
        <div class="flex gap-2 p-1 bg-light-muted rounded-lg">
          <button
            @click.prevent="selectedType = 'valuation'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="selectedType === 'valuation' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            Valuation Request
          </button>
          <button
            @click.prevent="selectedType = 'management'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="selectedType === 'management' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            Property Management
          </button>
          <button
            @click.prevent="selectedType = 'general'"
            class="flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all"
            :class="selectedType === 'general' ? 'bg-brand-500 text-dark-primary' : 'text-text-muted hover:text-text-primary'"
          >
            General Inquiry
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Full Name *</label>
            <input v-model="form.fullName" required placeholder="Your full name" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Email *</label>
            <input v-model="form.email" type="email" required placeholder="you@example.com" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Phone</label>
            <input v-model="form.phone" type="tel" placeholder="+254 7XX XXX XXX" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Subject *</label>
            <input v-model="form.subject" required placeholder="Brief subject line" class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Message *</label>
          <textarea v-model="form.message" rows="5" required placeholder="Tell us how we can help..." class="w-full px-4 py-3 bg-light-bg border border-border-main rounded-lg text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none" />
        </div>

        <UButton type="submit" color="primary" size="lg" block trailing-icon="i-lucide-send">
          Send Message
        </UButton>
      </form>
    </div>
  </section>
</template>
