<script setup lang="ts">
import AppNavbar from '~/components/global/AppNavbar.vue'
import AppFooter from '~/components/global/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />
    <main class="flex-1 pt-20">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
