<script setup lang="ts">
const config = useRuntimeConfig()
const siteKey = config.public.turnstileSiteKey as string

const props = withDefaults(defineProps<{ action?: string }>(), { action: '' })

const token = defineModel<string>({ default: '' })
const container = ref<HTMLElement | null>(null)
let widgetId: unknown = null

function renderWidget() {
  if (!container.value || !window.turnstile || widgetId) return
  try {
    widgetId = window.turnstile.render(container.value, {
      sitekey: siteKey,
      action: props.action || undefined,
      theme: 'light',
      // Normal visitors never see the widget; only risky sessions get a challenge.
      appearance: 'interaction-only',
      callback: (value: string) => { token.value = value },
      'expired-callback': () => { token.value = '' },
      'timeout-callback': () => { token.value = '' },
      'error-callback': (code: unknown) => {
        token.value = ''
        // Diagnostic only. Turnstile's built-in auto-retry owns recovery, so
        // we deliberately do NOT remove/re-render here — tearing the widget
        // down was leaving the page with no widget at all.
        console.warn('[Turnstile] widget error:', code)
      }
    })
  } catch (error) {
    token.value = ''
    console.warn('[Turnstile] render failed:', error)
  }
}

function reset() {
  token.value = ''
  try {
    if (window.turnstile && widgetId) window.turnstile.reset(widgetId)
  } catch {}
}

function loadScript(): Promise<void> {
  return new Promise((resolve) => {
    const whenReady = () => {
      window.turnstile?.ready(() => renderWidget())
      resolve()
    }
    if (window.turnstile) return whenReady()
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.onload = whenReady
    document.head.appendChild(script)
  })
}

defineExpose({ reset })

onMounted(() => {
  if (siteKey) loadScript()
})

onUnmounted(() => {
  try {
    if (window.turnstile && widgetId) window.turnstile.remove(widgetId)
  } catch {}
  widgetId = null
})
</script>

<template>
  <ClientOnly>
    <div class="flex justify-center" :data-turnstile-host="siteKey ? '1' : undefined">
      <div ref="container" />
    </div>
    <template #fallback>
      <div class="min-h-[2.5rem]" />
    </template>
  </ClientOnly>
</template>
