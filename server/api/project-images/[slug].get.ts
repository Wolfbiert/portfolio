// server/api/project-images/[slug].get.ts
// Returns sorted list of image URLs from the pre-generated manifest
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug || !/^[\w-]+$/.test(slug)) {
    throw createError({ statusCode: 400, message: 'Invalid slug' })
  }

  try {
    // Leemos el manifiesto generado durante el build en server/assets/projects.json
    // En Nitro, server/assets se mapea a 'assets:server'
    const storage = useStorage('assets:server')
    const manifest = await storage.getItem('projects.json') as Record<string, string[]> | null
    
    if (!manifest || !manifest[slug]) {
      return { images: [] }
    }

    const images = manifest[slug].map(f => `/projects/${slug}/${f}`)

    return { images }
  } catch (error) {
    // Si hay error, devolvemos lista vacía para que el frontend maneje el fallback
    return { images: [] }
  }
})
