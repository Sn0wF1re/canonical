<script setup lang="ts">
const config = useRuntimeConfig()
const siteKey = config.public.turnstileSiteKey as string

const token = defineModel<string>({ default: '' })
const container = ref<HTMLElement | null>(null)
let widgetId: unknown = null

function renderWidget() {
  if (!container.value || !window.turnstile || widgetId) return
  widgetId = window.turnstile.render(container.value, {
    sitekey: siteKey,
    theme: 'light',
    callback: (value: string) => { token.value = value },
    'expired-callback': () => { token.value = '' },
    'error-callback': () => { token.value = '' }
  })
}

function loadScript(): Promise<void> {
  return new Promise((resolve) => {
    if (window.turnstile) return renderWidget()
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.onload = () => renderWidget()
    document.head.appendChild(script)
  })
}

onMounted(() => {
  if (siteKey) loadScript()
})
</script>

<template>
  <ClientOnly>
    <div class="flex justify-center min-h-[2.5rem]" :data-turnstile-host="siteKey ? '1' : undefined">
      <div ref="container" />
    </div>
    <template #fallback>
      <div class="min-h-[2.5rem]" />
    </template>
  </ClientOnly>
</template>
