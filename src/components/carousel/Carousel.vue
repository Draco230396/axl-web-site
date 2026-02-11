<template>
  <div class="carousel">
    <img :src="images[current]" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = [
  '../images/logo_con_fondo.png',
  '../images/logo-con-razon.png'
]

const current = ref(0)

setInterval(() => {
  current.value = (current.value + 1) % images.length
}, 3000)
</script>

<style scoped>
.carousel img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
