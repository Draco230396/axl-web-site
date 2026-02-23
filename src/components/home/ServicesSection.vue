<template>
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <h2>Nuestros Servicios</h2>
        <p>Soluciones digitales diseñadas para impulsar tu negocio al siguiente nivel</p>
      </div>

      <div class="services-grid">
        <div 
          v-for="service in services" 
          :key="service.id" 
          class="service-card"
        >
          <div class="icon-wrapper" :class="service.color">
            <span class="emoji-icon">{{ service.icon }}</span>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <a href="#" class="learn-more">Saber más &rarr;</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import services from '@/data/services'
</script>

<style scoped>
.services-section {
  padding: 80px 0;
  background-color: #f8fafc;
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
  letter-spacing: -0.02em;
}

.section-header p {
  color: #64748b;
  font-size: 1.125rem;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(226, 232, 240, 0.8);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.1);
  border-color: transparent;
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #e2e8f0 0%, #f1f5f9 100%); /* Fallback */
}

/* Gradient classes applied dynamically */
.from-blue-400.to-blue-600 { background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%); }
.from-purple-400.to-purple-600 { background: linear-gradient(135deg, #c084fc 0%, #9333ea 100%); }
.from-green-400.to-green-600 { background: linear-gradient(135deg, #4ade80 0%, #16a34a 100%); }
.from-orange-400.to-orange-600 { background: linear-gradient(135deg, #fb923c 0%, #ea580c 100%); }

.emoji-icon {
  font-size: 28px;
}

h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
}

p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
}

.learn-more {
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.2s ease;
}

.service-card:hover .learn-more {
  gap: 8px;
}
</style>
