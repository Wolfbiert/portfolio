// server/api/project-images/[slug].get.ts
// Returns sorted list of image URLs from the Nitro storage layer
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug || !/^[\w-]+$/.test(slug)) {
    throw createError({ statusCode: 400, message: 'Invalid slug' })
  }

  const VALID_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif']

  try {
    // Usamos useStorage para acceder a los assets del servidor integrados por Nitro
    const storage = useStorage('assets:projects')
    const allKeys = await storage.getKeys()
    
    // Las llaves detectadas tendrán el formato 'slug:archivo.ext' o 'slug/archivo.ext'
    // Nitro suele usar ':' como separador interno
    const images = allKeys
      .filter(key => {
        const lowerKey = key.toLowerCase()
        const isProjectFile = key.startsWith(`${slug}:`) || key.startsWith(`${slug}/`)
        const hasValidExt = VALID_EXTENSIONS.some(ext => lowerKey.endsWith(ext))
        return isProjectFile && hasValidExt
      })
      .map(key => {
        // Normalizamos la ruta para la URL pública
        const fileName = key.split(/[:/]/).pop()
        return `/projects/${slug}/${fileName}`
      })
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

    return { images }
  } catch (error) {
    // Si hay error o no hay storage, devolvemos vacío
    return { images: [] }
  }
})
