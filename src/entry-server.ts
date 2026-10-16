import { createMemoryHistory } from 'vue-router'
import { renderToString } from 'vue/server-renderer'
import { createHead, transformHtmlTemplate } from '@unhead/vue/server'
import { createApp } from './app'

export { prerenderRoutes } from './router'
export { SITE_URL } from './data/site'
export { hasProjects } from './data/projects'

/** Genera el HTML completo de una ruta a partir de la plantilla del build */
export async function render(url: string, template: string) {
  const head = createHead()
  const { app, router } = createApp(createMemoryHistory(), head)

  await router.push(url)
  await router.isReady()

  const appHtml = await renderToString(app)
  const html = template.replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`)
  return transformHtmlTemplate(head, html)
}
