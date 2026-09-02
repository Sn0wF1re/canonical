<script setup lang="ts">
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Valuation', path: '/services/valuation' },
  { name: 'Property Management', path: '/services/property-management' },
  { name: 'Estate Agency', path: '/services/estate-agency' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-xl border-b border-white/5"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3">
        <NuxtImg src="/canonical_logo.webp" alt="Canonical Realty" class="h-10 w-auto" />
      </NuxtLink>

      <nav class="hidden lg:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-sm font-medium text-white/80 hover:text-brand-500 transition-colors font-display"
          active-class="text-brand-500"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <div class="hidden lg:flex items-center">
        <UButton to="/services/valuation" color="primary" size="sm" trailing-icon="i-lucide-arrow-right">
          Request Valuation
        </UButton>
      </div>

      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="lg:hidden text-white p-2"
        aria-label="Toggle Navigation Menu"
      >
        <UIcon v-if="!isMobileMenuOpen" name="i-lucide-menu" class="w-6 h-6" />
        <UIcon v-else name="i-lucide-x" class="w-6 h-6" />
      </button>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden bg-dark-primary/95 backdrop-blur-xl px-5 py-6 space-y-4 border-b border-white/5"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        @click="isMobileMenuOpen = false"
        class="block text-base font-medium text-white/90 hover:text-brand-500"
      >
        {{ link.name }}
      </NuxtLink>
      <div class="pt-4 border-t border-white/10">
        <UButton
          to="/services/valuation"
          color="primary"
          class="w-full justify-center"
          @click="isMobileMenuOpen = false"
          trailing-icon="i-lucide-arrow-right"
        >
          Request Valuation
        </UButton>
      </div>
    </div>
  </header>
</template>
