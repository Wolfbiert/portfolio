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
    "@nuxtjs/seo",
    "@vercel/analytics/nuxt",
    "@vercel/speed-insights/nuxt"
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
    url: 'https://portfolio-ten-xi-h8rspuyqvo.vercel.app', // URL actual de Vercel
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
  },

  // Nitro Configuration
  nitro: {
    // Ya no usamos serverAssets directos porque fallan en Vercel sobre la carpeta public
  },

  // Hooks para procesos de construcción
  hooks: {
    'build:before': () => {
      const fs = require('node:fs')
      const path = require('node:path')
      
      const projectsDir = path.resolve('public/projects')
      const assetsDir = path.resolve('server/assets')
      const manifestPath = path.join(assetsDir, 'projects.json')
      
      if (!fs.existsSync(projectsDir)) return

      const projects = fs.readdirSync(projectsDir)
      const manifest = {}
      const VALID_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif']

      for (const slug of projects) {
        const slugPath = path.join(projectsDir, slug)
        if (fs.statSync(slugPath).isDirectory()) {
          const files = fs.readdirSync(slugPath)
          const projectImages = files
            .filter((f: string) => VALID_EXTENSIONS.some((ext: string) => f.toLowerCase().endsWith(ext)))
            .sort((a: string, b: string) => a.localeCompare(b, undefined, { numeric: true }))
          ;(manifest as any)[slug] = projectImages
        }
      }

      if (!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir, { recursive: true })
      }
      
      fs.writeFileSync(manifestPath, JSON.stringify(manifest))
      console.log('✅ [Build Hook] Proyectos detectados y manifiesto generado en server/assets/projects.json')
    }
  }
});
