// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Nuxt 4 future compatibility flags
  future: {
    compatibilityVersion: 4,
  },

  // Modules
  modules: [
    "@nuxt/icon",
    "@vueuse/nuxt",
    "nuxt-security",
    "@nuxt/image",
    "@nuxtjs/seo"
  ],

  // Security Configuration
  security: {
    headers: {
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:", "https:", "https://formspree.io"],
        "script-src": ["'self'", "'unsafe-inline'", "https:"],
        "script-src-attr": ["'self'", "'unsafe-inline'"],
        "connect-src": ["'self'", "https://formspree.io", "https://wa.me"]
      },
      crossOriginEmbedderPolicy: 'unsafe-none'
    }
  },

  // Global CSS
  css: [
    "~/assets/css/main.css",
  ],

  // SEO Configuration
  site: {
    url: 'https://agustinmassoni.dev', // Cambiar por la URL real después
    name: 'Portfolio | Agustín Massoni',
    description: 'Técnico Superior en Desarrollo de Software especializado en crear soluciones digitales modernas y eficientes.',
  },

  // App-level head config (meta, fonts)
  app: {
    head: {
      htmlAttrs: { lang: "es" },
      title: "Portfolio | Agustín Massoni",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Técnico Superior en Desarrollo de Software especializado en crear soluciones digitales modernas y eficientes.",
        },
        { name: 'theme-color', content: '#5c49e0' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;600;700&display=swap",
        },
      ],
    },
  },

  // Vite Configuration
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  }
});
