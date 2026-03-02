<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <h1>Advanced eXponential Logic</h1>
        <p class="tagline">Infraestructura digital diseñada para el crecimiento exponencial.</p>
      </div>
    </section>

    <!-- History Section -->
    <section class="section history">
      <div class="container grid">
        <div class="content">
          <div class="section-label">Nuestra Historia</div>
          <h2>El origen de A.X.L</h2>
          <p>
            A.X.L – Advanced eXponential Logic nace con la visión de crear soluciones tecnológicas que no solo cumplan una función operativa, sino que impulsen el crecimiento exponencial de empresas y emprendedores.
          </p>
          <p>
            Desde su concepción, AXL fue diseñada como una consultora tecnológica estratégica, enfocada en arquitectura moderna, software escalable y transformación digital. Nuestro enfoque combina ingeniería de alto nivel, metodologías ágiles y visión empresarial para convertir ideas en sistemas inteligentes y rentables.
          </p>
          <div class="quote-box">
            "No desarrollamos únicamente software. Diseñamos infraestructura digital para el crecimiento."
          </div>
        </div>
        <div class="image-placeholder">
          <div class="abstract-shape"></div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-vision section dark">
      <div class="container grid">
        <div class="card mission">
          <div class="icon">🚀</div>
          <h3>Misión</h3>
          <p>
            Desarrollar soluciones de software innovadoras, escalables y eficientes que impulsen el crecimiento exponencial de nuestros clientes, combinando ingeniería de alto nivel, metodologías ágiles y visión estratégica.
          </p>
        </div>
        <div class="card vision">
          <div class="icon">👁️</div>
          <h3>Visión</h3>
          <p>
            Ser una empresa tecnológica de referencia en Latinoamérica y el mundo, reconocida por crear sistemas inteligentes, confiables y de alto rendimiento que transformen digitalmente a las organizaciones.
          </p>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values section">
      <div class="container">
        <div class="text-center">
          <div class="section-label">Nuestros Cimientos</div>
          <h2>Valores que nos definen</h2>
        </div>
        <div class="values-grid">
          <div v-for="value in values" :key="value.title" class="value-item">
            <div class="value-icon">✓</div>
            <div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Sobre Nosotros',
  meta: [
    { name: 'description', content: 'Conoce la historia, misión y valores de A.X.L - Advanced eXponential Logic.' }
  ]
})

const values = [
  { title: 'Innovación continua', desc: 'Siempre a la vanguardia tecnológica.' },
  { title: 'Excelencia técnica', desc: 'Ingeniería de alto nivel en cada línea de código.' },
  { title: 'Compromiso con la calidad', desc: 'Sistemas robustos y confiables.' },
  { title: 'Transparencia y confianza', desc: 'Relaciones sólidas basadas en la honestidad.' },
  { title: 'Orientación a resultados', desc: 'Soluciones que generan impacto real.' },
  { title: 'Escalabilidad', desc: 'Sistemas preparados para el futuro.' }
]
</script>

<style scoped>
.about-page {
  background: #f8fafc;
  color: #1e293b;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.section {
  padding: 100px 0;
}

.section-label {
  color: #2563eb;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  margin-bottom: 12px;
}

h1 {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 20px;
  line-height: 1.1;
}

h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  color: #0f172a;
}

.about-hero {
  background: #0f172a;
  color: white;
  padding: 160px 0 100px;
  text-align: center;
}

.tagline {
  font-size: 1.5rem;
  color: #94a3b8;
  max-width: 800px;
  margin: 0 auto;
}

.history p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 20px;
}

.quote-box {
  border-left: 4px solid #2563eb;
  padding-left: 20px;
  font-style: italic;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e293b;
  margin-top: 30px;
}

.image-placeholder {
  height: 450px;
  background: #e2e8f0;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.abstract-shape {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  filter: blur(40px);
  opacity: 0.5;
}

.dark {
  background: #0f172a;
  color: white;
}

.dark h3 {
  color: white;
}

.mission-vision .card {
  background: rgba(255, 255, 255, 0.03);
  padding: 40px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s;
}

.mission-vision .card:hover {
  transform: translateY(-5px);
}

.mission-vision .icon {
  font-size: 3rem;
  margin-bottom: 24px;
}

.mission-vision h3 {
  font-size: 1.75rem;
  margin-bottom: 16px;
  font-weight: 700;
}

.mission-vision p {
  color: #94a3b8;
  line-height: 1.6;
}

.text-center {
  text-align: center;
  margin-bottom: 60px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.value-item {
  display: flex;
  gap: 20px;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
  transition: all 0.3s;
}

.value-item:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.value-icon {
  width: 44px;
  height: 44px;
  background: #eff6ff;
  color: #2563eb;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  flex-shrink: 0;
}

.value-item h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.value-item p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .grid {
    gap: 40px;
  }
  
  h1 { font-size: 3rem; }
  h2 { font-size: 2.25rem; }
}

@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }

  .grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .section {
    padding: 60px 0;
  }

  .about-hero {
    padding: 120px 0 60px;
  }

  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }

  .quote-box {
    margin: 30px auto 0;
    text-align: left;
    max-width: 500px;
  }

  .image-placeholder {
    height: 350px;
    order: -1;
  }

  .mission-vision .card {
    padding: 30px;
  }
}
</style>
