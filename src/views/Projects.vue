<template>
  <div class="projects-page">
    <div class="hero">
      <div class="container">
        <h1>Nuestro Portafolio</h1>
        <p>Explora nuestros casos de éxito y descubre cómo transformamos ideas en realidad digital.</p>
      </div>
    </div>

    <div class="container content-wrapper">
      <!-- Filter Tags -->
      <div class="filters">
        <button 
          v-for="category in categories" 
          :key="category"
          class="filter-btn"
          :class="{ active: activeCategory === category }"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <TransitionGroup name="fade">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id" 
            class="project-card"
          >
            <div class="image-wrapper">
              <img :src="project.image" :alt="project.title" loading="lazy" />
              <div class="overlay">
                <a :href="project.link" class="view-btn">Ver Detalles</a>
              </div>
            </div>
            <div class="card-body">
              <div class="tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-description">{{ project.description }}</p>
            </div>
          </div>
        </TransitionGroup>
      </div>
      
      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="empty-state">
        <p>No se encontraron proyectos en esta categoría.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '@vueuse/head'
import projects from '@/data/projects'

useHead({
  title: 'Portafolio de Proyectos',
  meta: [
    { name: 'description', content: 'Explora nuestro portafolio de proyectos exitosos en desarrollo web, móvil y diseño UI/UX.' }
  ]
})

const activeCategory = ref('Todos')

// Extract unique categories from project tags, simplistic approach
const categories = computed(() => {
  // Just generic categories for demo, in real app could be derived or explicit property
  return ['Todos', 'Desarrollo Web', 'Diseño UI/UX', 'Aplicaciones Móviles']
})

// Custom filtering logic (simulated for now based on tags/content)
const filteredProjects = computed(() => {
  if (activeCategory.value === 'Todos') return projects
  
  // Simple mapping for demo purposes since projects have tech tags not categories
  const term = activeCategory.value.toLowerCase()
  if (term.includes('web')) return projects.filter(p => p.tags.some(t => ['Vue 3', 'React', 'Astro', 'Next.js'].some(k => t.includes(k))))
  if (term.includes('móvi')) return projects.filter(p => p.tags.some(t => ['React Native', 'Flutter', 'iOS'].some(k => t.includes(k))))
  if (term.includes('diseño')) return projects.filter(p => p.tags.some(t => ['Figma', 'CSS'].some(k => t.includes(k))) || p.description.toLowerCase().includes('diseño'))
  
  return projects
})
</script>

<style scoped>
.projects-page {
  background-color: #f8fafc;
  min-height: 100vh;
}

.hero {
  background: #1e293b;
  color: white;
  padding: 80px 0 60px;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
}

.hero p {
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  padding-top: 60px;
  padding-bottom: 100px;
}

.filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 50px;
}

.filter-btn {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 10px 24px;
  border-radius: 50px;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.filter-btn:hover {
  background: #f1f5f9;
  color: #334155;
}

.filter-btn.active {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e2e8f0;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.image-wrapper {
  height: 220px;
  overflow: hidden;
  position: relative;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .image-wrapper img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .overlay {
  opacity: 1;
}

.view-btn {
  background: white;
  color: #0f1742;
  padding: 10px 24px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.project-card:hover .view-btn {
  transform: scale(1);
}

.card-body {
  padding: 24px;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.tag {
  font-size: 0.75rem;
  background: #f1f5f9;
  color: #475569;
  padding: 4px 10px;
  border-radius: 4px;
  font-weight: 600;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}

.card-description {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #94a3b8;
}

/* Transitions */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>
