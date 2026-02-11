<template>
  <select v-model="lang" @change="changeLang">
    <option value="es">Español</option>
    <option value="en">English</option>
  </select>
</template>

<script setup>
import { ref } from 'vue'

const lang = ref('es')

function changeLang() {
  console.log('Idioma:', lang.value)
}
</script>

<style scoped>
select {
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  border: none;
}
</style>
