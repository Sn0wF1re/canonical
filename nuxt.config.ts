export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  ui: {
    fonts: false
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
        { property: 'og:site_name', content: 'Canonical Realty' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Canonical Realty — Valuation & Property Management' },
        {
          name: 'twitter:description',
          content: "Kenya's trusted partner for decision-grade property valuation and professional management."
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
