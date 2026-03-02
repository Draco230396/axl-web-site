import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import './style.css'

const head = createHead()

createApp(App).use(router).use(head).mount('#app')
