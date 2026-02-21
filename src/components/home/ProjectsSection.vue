<template>
  <section class="projects-section">
    <div class="container">
      <div class="section-header">
        <h2>Proyectos Destacados</h2>
        <p>Una selección de nuestros trabajos más recientes y exitosos</p>
      </div>

      <div class="projects-grid">
        <div 
          v-for="project in featuredProjects" 
          :key="project.id" 
          class="project-card"
        >
          <div class="image-wrapper">
            <img :src="project.image" :alt="project.title" loading="lazy" />
            <div class="overlay">
              <a :href="project.link" class="view-btn">Ver Proyecto</a>
            </div>
          </div>
          <div class="content">
            <div class="tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>

      <div class="actions">
        <router-link to="/projects" class="btn-primary">Ver todos los proyectos</router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import projects from '@/data/projects'

const featuredProjects = computed(() => projects.filter(p => p.featured).slice(0, 3))
</script>

<style scoped>
.projects-section {
  padding: 100px 0;
  background-color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
}

h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 16px;
}

.section-header p {
  color: #64748b;
  font-size: 1.125rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.project-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background: white;
  border: 1px solid #e2e8f0;
}

.project-card:hover {
  transform: translateY(-8px);
}

.image-wrapper {
  position: relative;
  height: 240px;
  overflow: hidden;
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
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.project-card:hover .view-btn {
  transform: translateY(0);
}

.content {
  padding: 30px;
}

.tags {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.tag {
  background: #f1f5f9;
  color: #475569;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
}

p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
}

.actions {
  text-align: center;
}

.btn-primary {
  display: inline-block;
  background: #2563eb;
  color: white;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.btn-primary:hover {
  background: #1d4ed8;
}
</style>
