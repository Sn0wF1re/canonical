<script setup lang="ts">
import { siteContent } from '~/content/site'
</script>

<template>
  <footer class="bg-dark-primary border-t border-dark-muted">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <NuxtImg src="/canonical_logo.webp" alt="Canonical Realty" class="h-8 w-auto" />
          </div>
          <p class="text-sm text-white/60 leading-relaxed">{{ siteContent.company.tagline }}</p>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/services/valuation" class="text-sm text-white/60 hover:text-brand-500 transition-colors">
                Valuation Services
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/property-management" class="text-sm text-white/60 hover:text-brand-500 transition-colors">
                Property Management
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-sm text-white/60 hover:text-brand-500 transition-colors">
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-sm text-white/60 hover:text-brand-500 transition-colors">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
          <ul class="space-y-3 text-sm text-white/60">
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-phone" class="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
              {{ siteContent.company.phone }}
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-mail" class="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
              {{ siteContent.company.email }}
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-map-pin" class="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
              {{ siteContent.company.address }}
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-clock" class="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
              {{ siteContent.company.hours }}
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-dark-muted flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-xs text-white/40">
          &copy; {{ new Date().getFullYear() }} {{ siteContent.company.name }}. All rights reserved.
        </p>
        <p class="text-xs text-white/40">
          VRB: {{ siteContent.company.vrbRegistration }} | ISK: {{ siteContent.company.iskMembership }}
        </p>
      </div>
    </div>
  </footer>
</template>
