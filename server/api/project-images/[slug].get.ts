// server/api/project-images/[slug].get.ts
// Returns sorted list of image URLs from public/projects/[slug]/
import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const VALID_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif']

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug || !/^[\w-]+$/.test(slug)) {
    throw createError({ statusCode: 400, message: 'Invalid slug' })
  }

  const dir = resolve('public/projects', slug)

  try {
    const files = await readdir(dir)
    const images = files
      .filter(f => VALID_EXTENSIONS.some(ext => f.toLowerCase().endsWith(ext)))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map(f => `/projects/${slug}/${f}`)

    return { images }
  } catch {
    // Directory doesn't exist or is unreadable — return empty
    return { images: [] }
  }
})
