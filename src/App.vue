<template>
  <Header />
  <router-view />
  <SocialFloat />
  <Footer />
</template>

<script setup>
import Header from './components/header/Header.vue'
import SocialFloat from './components/SocialFloat.vue'
import Footer from './components/Footer.vue'
</script>
