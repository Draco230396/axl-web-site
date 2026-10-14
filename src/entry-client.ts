import { createWebHistory } from 'vue-router'
import { createHead } from '@unhead/vue/client'
import { createApp } from './app'

// BASE_URL toma el valor de `base` en vite.config.ts
const { app, router } = createApp(createWebHistory(import.meta.env.BASE_URL), createHead())

// Se espera al router para "hidratar" el HTML prerenderizado sin rehacerlo
router.isReady().then(() => app.mount('#app'))
