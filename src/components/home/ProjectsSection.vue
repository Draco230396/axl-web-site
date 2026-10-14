<template>
  <section class="projects-section">
    <div class="container">
      <div class="section-header">
        <h2>Proyectos Destacados</h2>
        <p>Una selección de nuestros trabajos más recientes y exitosos</p>
      </div>

      <div class="projects-grid">
        <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
      </div>

      <div class="actions">
        <router-link to="/projects" class="btn btn-primary">Ver todos los proyectos</router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import projects from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const featuredProjects = computed(() => projects.filter(p => p.featured).slice(0, 3))
</script>

<style scoped>
.projects-section {
  padding: 100px 0;
  background-color: var(--color-white);
}

.container {
  max-width: var(--container-width);
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
  color: var(--color-text);
  margin-bottom: 16px;
}

.section-header p {
  color: var(--color-text-muted);
  font-size: 1.125rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.actions {
  text-align: center;
}


</style>
