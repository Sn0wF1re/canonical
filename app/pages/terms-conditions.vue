<script setup lang="ts">
import { termsConditions } from '~/content/legal'

definePageMeta({ layout: 'default' })

useHead({
  title: 'Terms & Conditions'
})
</script>

<template>
  <div>
    <LegalHero :title="termsConditions.title" :eyebrow="termsConditions.eyebrow" :updated="termsConditions.updated" />
    <LegalContent :intro="termsConditions.intro" :sections="termsConditions.sections" />
  </div>
</template>
