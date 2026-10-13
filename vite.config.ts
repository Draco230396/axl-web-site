import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// Desplegado en Vercel: el sitio vive en la raíz del dominio.
// La navegación de la SPA (recargar /contact, etc.) se resuelve en vercel.json.
export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
