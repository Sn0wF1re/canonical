import { seoMeta, type SeoKey } from '~/content/seo'

export function usePageSeo(key: SeoKey) {
  const entry = seoMeta[key]
  const config = useRuntimeConfig()
  const base = String(config.public.siteUrl).replace(/\/$/, '')
  const canonical = `${base}${entry.path}`

  useSeoMeta({
    title: entry.title,
    description: entry.description,
    ogTitle: entry.title,
    ogDescription: entry.description,
    ogUrl: canonical,
    twitterTitle: entry.title,
    twitterDescription: entry.description
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }]
  })
}
