const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 10 * 60 * 1000
const MIN_INTERACTION_AGE = 3000
const MAX_URLS = 2

// In-memory sliding window. On serverless this is best-effort (per instance)
// but still blunts same-instance floods at zero cost.
const hits = new Map<string, number[]>()

function isStale(hit: number, now: number): boolean {
  return now - hit > RATE_LIMIT_WINDOW
}

export interface RateLimitState {
  allowed: boolean
  retryAfterSeconds?: number
}

export function rateLimitState(ip: string, now: number): RateLimitState {
  const window = (hits.get(ip) ?? []).filter((hit) => !isStale(hit, now))
  if (window.length >= RATE_LIMIT_MAX) {
    const oldest = Math.min(...window)
    return {
      allowed: false,
      // Rejected attempts do not extend the window, so a human who waits
      // clears out naturally.
      retryAfterSeconds: Math.max(1, Math.ceil((oldest + RATE_LIMIT_WINDOW - now) / 1000))
    }
  }
  window.push(now)
  hits.set(ip, window)
  return { allowed: true }
}

function countUrls(payload: { message?: string; details?: Record<string, string | undefined> }): number {
  const haystack = [payload.message, ...Object.values(payload.details ?? {})]
    .filter((value): value is string => typeof value === 'string')
    .join(' ')
  return (haystack.match(/https?:\/\/|www\./gi) ?? []).length
}

export function hasTooManyUrls(payload: { message?: string; details?: Record<string, string | undefined> }): boolean {
  return countUrls(payload) > MAX_URLS
}

export function isTooFast(loadedAt?: number, now?: number): boolean {
  if (typeof loadedAt !== 'number') return false
  const age = (now ?? Date.now()) - loadedAt
  return age >= 0 && age < MIN_INTERACTION_AGE
}

export function getClientIp(headers: Record<string, string | string[] | undefined>): string {
  const candidates = headers['x-nf-client-connection-ip'] ?? headers['cf-connecting-ip'] ?? headers['x-forwarded-for']
  const first = Array.isArray(candidates) ? candidates[0] : candidates
  return String(first ?? 'unknown').split(',')[0]?.trim() || 'unknown'
}
