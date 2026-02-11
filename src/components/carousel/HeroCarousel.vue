<template>
  <div class="carousel">
    <CarouselSlide :slide="slides[current]" />

    <div class="controls">
      <span
        v-for="(_, index) in slides"
        :key="index"
        :class="{ active: index === current }"
        @click="current = index"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CarouselSlide from './CarouselSlide.vue'
import slides from './carousel.data'

const current = ref(0)

onMounted(() => {
  setInterval(() => {
    current.value = (current.value + 1) % slides.length
  }, 6000)
})
</script>

<style scoped>
.carousel {
  position: relative;
}
.controls {
  position: absolute;
  bottom: 30px;
  left: 80px;
  display: flex;
  gap: 10px;
}
.controls span {
  width: 12px;
  height: 12px;
  background: #aaa;
  border-radius: 50%;
  cursor: pointer;
}
.controls .active {
  background: #38bdf8;
}
</style>
