<template>
  <div class="insights-page">
    <div class="hero">
      <div class="container">
        <h1>Insights & Technology</h1>
        <p>Pensamiento estratégico, arquitectura de software y el futuro de la tecnología.</p>
      </div>
    </div>

    <div class="container content-wrapper">
      <div class="coming-soon">
        <div class="icon">🔍</div>
        <h2>Estamos preparando contenido de alto valor</h2>
        <p>Próximamente encontrarás aquí:</p>
        <ul class="topics">
          <li>Blog Técnico (Arquitectura, Cloud, Escalabilidad)</li>
          <li>Casos de Éxito Estratégicos</li>
          <li>Artículos sobre Transformación Digital</li>
          <li>Noticias Corporativas y Alianzas</li>
        </ul>
        <router-link to="/contact" class="cta-btn">Suscríbete para recibir actualizaciones</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Insights',
  meta: [
    { name: 'description', content: 'Explora artículos técnicos y estratégicos sobre tecnología y transformación digital en A.X.L.' }
  ]
})
</script>

<style scoped>
.insights-page {
  background-color: #f8fafc;
  min-height: 100vh;
}

.hero {
  background: #0f172a;
  color: white;
  padding: 100px 0 80px;
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto;
}

.content-wrapper {
  padding: 100px 20px;
  display: flex;
  justify-content: center;
}

.coming-soon {
  text-align: center;
  max-width: 600px;
}

.icon {
  font-size: 4rem;
  margin-bottom: 24px;
}

h2 {
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 24px;
}

p {
  color: #64748b;
  font-size: 1.1rem;
  margin-bottom: 24px;
}

.topics {
  list-style: none;
  padding: 0;
  margin: 0 auto 40px;
  text-align: left;
  display: inline-block;
}

.topics li {
  margin-bottom: 12px;
  color: #1e293b;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
}

.topics li::before {
  content: '→';
  color: #2563eb;
}

.cta-btn {
  display: inline-block;
  background: #2563eb;
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s;
}

.cta-btn:hover {
  transform: translateY(-2px);
}
</style>
