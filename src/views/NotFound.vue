<template>
  <div class="not-found">
    <div class="content">
      <div class="error-code">404</div>
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
      <router-link to="/" class="home-btn">Volver al Inicio</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Página no encontrada',
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})
</script>

<style scoped>
.not-found {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f8fafc;
  padding: 20px;
}

.content {
  max-width: 600px;
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  color: #e2e8f0;
  line-height: 1;
  margin-bottom: 20px;
  background: -webkit-linear-gradient(#cbd5e1, #94a3b8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

h1 {
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 16px;
  font-weight: 800;
}

p {
  color: #64748b;
  font-size: 1.1rem;
  margin-bottom: 40px;
}

.home-btn {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.home-btn:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
}
</style>
