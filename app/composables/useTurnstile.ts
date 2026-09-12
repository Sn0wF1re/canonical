declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => unknown
      reset: (widgetId?: unknown) => void
    }
  }
}

export function useTurnstile() {
  const config = useRuntimeConfig()
  const enabled = Boolean(config.public.turnstileSiteKey)

  async function waitToken(model: Ref<string>, timeoutMs = 5000): Promise<string> {
    if (!enabled) return ''
    const deadline = Date.now() + timeoutMs
    while (!model.value && Date.now() < deadline) {
      await new Promise((resolve) => setTimeout(resolve, 200))
    }
    return model.value
  }

  return { enabled, waitToken }
}
