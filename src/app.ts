import { createSSRApp } from 'vue'
import type { RouterHistory } from 'vue-router'
import type { VueHeadClient } from '@unhead/vue'
import App from './App.vue'
import { createAppRouter } from './router'

import '@fontsource-variable/sora/wght.css'
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import './styles/tokens.css'
import './style.css'

/** Arma la aplicación; lo usan tanto el navegador como el prerender del build */
export function createApp(history: RouterHistory, head: VueHeadClient) {
  const app = createSSRApp(App)
  const router = createAppRouter(history)
  app.use(router).use(head)
  return { app, router }
}
