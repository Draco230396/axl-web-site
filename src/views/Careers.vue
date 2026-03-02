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
  padding: 140px 0 100px;
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  background: linear-gradient(to bottom, #fff, #94a3b8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
}

.hero p {
  font-size: 1.25rem;
  color: #cbd5e1;
  max-width: 600px;
  margin: 0 auto;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
}

.content-wrapper {
  padding: 100px 0;
}

.intro {
  text-align: center;
  margin-bottom: 100px;
}

.intro h2, .positions h2 {
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 24px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.intro p {
  font-size: 1.15rem;
  color: #64748b;
  max-width: 750px;
  margin: 0 auto 50px;
  line-height: 1.7;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.benefit-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
  text-align: left;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.benefit-card .icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 20px;
}

.benefit-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #0f172a;
  font-weight: 700;
}

.benefit-card p {
  color: #64748b;
  line-height: 1.5;
  font-size: 1rem;
}

.positions {
  margin-top: 40px;
}

.jobs-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.job-card {
  background: white;
  padding: 24px 32px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f1f5f9;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.job-card:hover {
  border-color: #2563eb;
  transform: scale(1.02);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.1);
}

.job-info h3 {
  font-size: 1.25rem;
  color: #0f172a;
  margin-bottom: 6px;
  font-weight: 700;
}

.job-type {
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 500;
}

.apply-btn {
  background: #2563eb;
  color: white;
  padding: 12px 28px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  font-size: 0.95rem;
}

.apply-btn:hover {
  background: #1d4ed8;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

@media (max-width: 1024px) {
  .hero h1 { font-size: 3rem; }
  .intro h2, .positions h2 { font-size: 2.25rem; }
}

@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }
  
  .hero {
    padding: 120px 0 80px;
  }

  .hero h1 { font-size: 2.5rem; }
  .intro h2, .positions h2 { font-size: 2rem; }

  .content-wrapper {
    padding: 60px 0;
  }

  .intro {
    margin-bottom: 60px;
  }

  .job-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 30px;
  }
  
  .apply-btn {
    width: 100%;
    text-align: center;
  }
}
</style>


