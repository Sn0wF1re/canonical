<script setup lang="ts">
import { privacyPolicy } from '~/content/legal'

definePageMeta({ layout: 'default' })

usePageSeo('privacy-policy')
</script>

<template>
  <div>
    <LegalHero :title="privacyPolicy.title" :eyebrow="privacyPolicy.eyebrow" :updated="privacyPolicy.updated" />
    <LegalContent :intro="privacyPolicy.intro" :sections="privacyPolicy.sections" />
  </div>
</template>
