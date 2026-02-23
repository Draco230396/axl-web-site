<template>
  <HeroCarousel />
  <AboutSection />
  <StatsSection />
  <ServicesSection />
  <ProjectsSection />
  <CtaSection />
</template>

<script setup>
import { useHead } from '@vueuse/head'
import HeroCarousel from '@/components/carousel/HeroCarousel.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import StatsSection from '@/components/home/StatsSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import CtaSection from '@/components/home/CtaSection.vue'

useHead({
  title: 'Inicio',
  meta: [
    { name: 'description', content: 'Soluciones digitales integrales para hacer crecer tu negocio. Desarrollo web, apps y consultoría.' }
  ]
})
</script>
