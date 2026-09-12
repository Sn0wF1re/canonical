export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/seo'],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://canonicalrealty.com',
    name: 'Canonical Realty',
    description: "Kenya's trusted partner for decision-grade property valuation and professional management. VRB-registered, ISK-membered, IFRS Red Book compliant.",
    defaultLocale: 'en'
  },
  ogImage: { enabled: false },
  linkChecker: { enabled: false },
  image: {
    quality: 80,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  runtimeConfig: {
    public: {
      turnstileSiteKey: ''
    }
  },
  ui: {
    fonts: false,
    colorMode: false
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Canonical Realty',
      titleTemplate: '%s | Canonical Realty',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#101512' },
        {
          name: 'description',
          content: "Kenya's trusted partner for decision-grade property valuation and professional management. VRB-registered, ISK-membered, IFRS Red Book compliant."
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Canonical Realty — Valuation & Property Management' },
        { property: 'og:description', content: "Kenya's trusted partner for decision-grade property valuation and professional management." },
        { property: 'og:image', content: 'https://canonicalrealty.com/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Canonical Realty — Valuation & Property Management' },
        { name: 'twitter:image', content: 'https://canonicalrealty.com/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Canonical Realty — Valuation & Property Management' },
        {
          name: 'twitter:description',
          content: "Kenya's trusted partner for decision-grade property valuation and professional management."
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap'
        }
      ]
    }
  }
})
