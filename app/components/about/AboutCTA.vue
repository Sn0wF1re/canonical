<script setup lang="ts">
</script>

<template>
  <section class="bg-dark-primary py-16 sm:py-20">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
      <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
        Let's Work Together
      </h2>
      <p class="text-white/60 max-w-xl mx-auto mb-8">
        Whether you need valuation, management, or advisory services — our team is ready to assist.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <UButton to="/contact" color="primary" size="lg" trailing-icon="i-lucide-arrow-right">
          Contact Us
        </UButton>
        <UButton to="/services/valuation" color="neutral" variant="outline" size="lg" class="border-white/20 text-white hover:bg-white/10">
          Request Valuation
        </UButton>
      </div>
    </div>
  </section>
</template>
