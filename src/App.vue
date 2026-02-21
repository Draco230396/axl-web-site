<template>
  <Header />
  <router-view />
  <SocialFloat />
  <Footer />
</template>

<script setup>
import { useHead } from '@vueuse/head'
import Header from './components/header/Header.vue'
import SocialFloat from './components/SocialFloat.vue'
import Footer from './components/Footer.vue'

useHead({
  title: 'A.X.L - Soluciones Digitales',
  titleTemplate: '%s | A.X.L',
  meta: [
    { name: 'description', content: 'Agencia de transformación digital, desarrollo web, aplicaciones móviles y consultoría estratégica en tecnología.' },
    { name: 'theme-color', content: '#0f172a' }
  ]
})
</script>
