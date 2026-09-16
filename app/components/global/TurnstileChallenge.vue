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
      // Recover faster from transient failures on weak connections (default 8000ms).
      retry: 'auto',
      'retry-interval': 4000,
      callback: (value: string) => { token.value = value },
      'expired-callback': () => { token.value = '' },
      'timeout-callback': () => { token.value = '' },
      'error-callback': () => {
        token.value = ''
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
    // Cloudflare forbids turnstile.ready() when the api.js tag is async/defer,
    // so render directly from onload (the documented explicit-rendering path).
    const whenLoaded = () => {
      renderWidget()
      resolve()
    }
    if (window.turnstile) return whenLoaded()
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.onload = whenLoaded
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
