<script setup lang="ts">
const config = useRuntimeConfig()
const siteKey = config.public.turnstileSiteKey as string

const props = withDefaults(defineProps<{ action?: string }>(), { action: '' })

const token = defineModel<string>({ default: '' })
const container = ref<HTMLElement | null>(null)
let widgetId: unknown = null
let rerenderAttempts = 0

const MAX_RERENDER_ATTEMPTS = 3

function renderWidget() {
  if (!container.value || !window.turnstile || widgetId) return
  try {
    widgetId = window.turnstile.render(container.value, {
      sitekey: siteKey,
      action: props.action || undefined,
      theme: 'light',
      callback: (value: string) => { token.value = value },
      'expired-callback': () => { token.value = '' },
      'error-callback': () => {
        token.value = ''
        retryRender()
      }
    })
  } catch {
    token.value = ''
    retryRender()
  }
}

// Re-render after a transient widget error (e.g. an early challenge 401) so
// the form self-heals without a page reload.
function retryRender() {
  if (rerenderAttempts >= MAX_RERENDER_ATTEMPTS) return
  rerenderAttempts += 1
  try {
    if (window.turnstile && widgetId) window.turnstile.remove(widgetId)
  } catch {}
  widgetId = null
  setTimeout(() => {
    if (window.turnstile) window.turnstile.ready(() => renderWidget())
  }, 600)
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
    <div class="flex justify-center min-h-[2.5rem]" :data-turnstile-host="siteKey ? '1' : undefined">
      <div ref="container" />
    </div>
    <template #fallback>
      <div class="min-h-[2.5rem]" />
    </template>
  </ClientOnly>
</template>
