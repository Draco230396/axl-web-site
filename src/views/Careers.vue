<template>
  <div class="careers-page">
    <div class="hero">
      <div class="container">
        <h1>Únete a nuestro equipo</h1>
        <p>Buscamos mentes creativas y apasionadas por la tecnología.</p>
      </div>
    </div>

    <div class="container content-wrapper">
      <div class="intro">
        <h2>¿Por qué A.X.L?</h2>
        <p>En A.X.L no solo escribimos código, construimos el futuro. Ofrecemos un ambiente flexible, proyectos desafiantes y aprendizaje continuo.</p>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <span class="icon">🚀</span>
            <h3>Crecimiento</h3>
            <p>Planes de carrera y capacitación constante.</p>
          </div>
          <div class="benefit-card">
            <span class="icon">🏠</span>
            <h3>Remoto First</h3>
            <p>Trabaja desde donde te sientas más productivo.</p>
          </div>
          <div class="benefit-card">
            <span class="icon">🩺</span>
            <h3>Bienestar</h3>
            <p>Seguro médico y días de salud mental.</p>
          </div>
        </div>
      </div>

      <div class="positions">
        <h2>Vacantes Abiertas</h2>
        <div class="jobs-list">
          <div v-for="job in jobs" :key="job.id" class="job-card">
            <div class="job-info">
              <h3>{{ job.title }}</h3>
              <span class="job-type">{{ job.type }} • {{ job.location }}</span>
            </div>
            <a :href="'mailto:careers@axlconsulting.mx?subject=Aplicación para ' + job.title" class="apply-btn">Aplicar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Carreras',
  meta: [
    { name: 'description', content: 'Únete al equipo de A.X.L - Advanced eXponential Logic. Descubre nuestras vacantes y crece profesionalmente con nosotros.' }
  ]
})

const jobs = [
  { id: 1, title: 'Backend Engineering', type: 'Proyecto/Híbrido', location: 'Remoto' },
  { id: 2, title: 'Frontend Engineering', type: 'Proyecto/Híbrido', location: 'Remoto' },
  { id: 3, title: 'Arquitectura Cloud', type: 'Proyecto/Híbrido', location: 'Remoto' },
  { id: 4, title: 'DevOps', type: 'Proyecto/Híbrido', location: 'Remoto' },
  { id: 5, title: 'Project Management', type: 'Proyecto/Híbrido', location: 'Remoto' },
  { id: 6, title: 'Ventas Tecnológicas', type: 'Proyecto/Híbrido', location: 'Remoto' }
]
</script>

<style scoped>
.careers-page {
  background-color: #f8fafc;
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: white;
  padding: 100px 0 80px;
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: -webkit-linear-gradient(#fff, #94a3b8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  font-size: 1.25rem;
  color: #cbd5e1;
  max-width: 600px;
  margin: 0 auto;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  padding: 80px 20px;
}

.intro {
  text-align: center;
  margin-bottom: 80px;
}

.intro h2, .positions h2 {
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 24px;
  font-weight: 700;
}

.intro p {
  font-size: 1.1rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.benefit-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  border: 1px solid #e2e8f0;
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-card .icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 16px;
}

.benefit-card h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: #1e293b;
}

.jobs-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.job-card {
  background: white;
  padding: 24px 32px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e2e8f0;
  transition: all 0.2s;
}

.job-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
}

.job-info h3 {
  font-size: 1.2rem;
  color: #1e293b;
  margin-bottom: 4px;
}

.job-type {
  color: #64748b;
  font-size: 0.9rem;
}

.apply-btn {
  background: #2563eb;
  color: white;
  padding: 10px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;
}

.apply-btn:hover {
  background: #1d4ed8;
}

@media (max-width: 600px) {
  .job-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .apply-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
