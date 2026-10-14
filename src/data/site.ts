/**
 * Datos del sitio para SEO.
 * La URL pública se define con VITE_SITE_URL (en Vercel: Settings → Environment Variables).
 * Mientras no haya dominio propio se usa la URL de Vercel.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://axl-web-site.vercel.app').replace(/\/+$/, '')

export const SITE_NAME = 'A.X.L'

/** Imagen que se muestra al compartir el sitio en redes (1200×630, en /public) */
export const OG_IMAGE = { path: '/og-image.png', width: 1200, height: 630, alt: 'A.X.L – Desarrollo de software a medida en México' }

/** Convierte una ruta del sitio en URL absoluta */
export const absoluteUrl = (path = '/') => `${SITE_URL}${path === '/' ? '/' : path}`
