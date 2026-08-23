<script setup lang="ts">
import { siteContent } from '~/content/site'
</script>

<template>
  <section class="bg-light-bg py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">Our Location</h2>
          <p class="text-text-muted leading-relaxed mb-6">
            Visit us at our Nairobi offices for in-person consultations, property inspections, and client meetings.
          </p>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-map-pin" class="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
              <div>
                <p class="font-semibold text-text-primary text-sm">Address</p>
                <p class="text-sm text-text-muted">{{ siteContent.company.address }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-phone" class="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
              <div>
                <p class="font-semibold text-text-primary text-sm">Phone</p>
                <p class="text-sm text-text-muted">{{ siteContent.company.phone }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-clock" class="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
              <div>
                <p class="font-semibold text-text-primary text-sm">Business Hours</p>
                <p class="text-sm text-text-muted">{{ siteContent.company.hours }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-xl overflow-hidden border border-border-main h-80 bg-dark-muted flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.805768201523!2d36.82082357408073!3d-1.2908594356292604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d8c8c4ff0d%3A0x8674b6e558d52d8!2sAGIP%20house%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1787475050374!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
</template>
