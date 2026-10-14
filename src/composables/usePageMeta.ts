import { useHead } from '@unhead/vue'
import { OG_IMAGE, SITE_NAME, absoluteUrl } from '@/data/site'

interface PageMeta {
  /** Título de la página (se le agrega " | A.X.L") */
  title: string
  description: string
  /** Ruta canónica, p. ej. "/about" */
  path: string
  /** true para páginas que no deben aparecer en buscadores */
  noindex?: boolean
}

/** Título, descripción, URL canónica y etiquetas para redes sociales de una página */
export function usePageMeta({ title, description, path, noindex = false }: PageMeta) {
  const url = absoluteUrl(path)
  const fullTitle = `${title} | ${SITE_NAME}`
  const image = absoluteUrl(OG_IMAGE.path)

  useHead({
    title,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: noindex ? 'noindex, follow' : 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: 'es_MX' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: String(OG_IMAGE.width) },
      { property: 'og:image:height', content: String(OG_IMAGE.height) },
      { property: 'og:image:alt', content: OG_IMAGE.alt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ]
  })
}
