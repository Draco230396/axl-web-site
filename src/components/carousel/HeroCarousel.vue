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
  const timer = setInterval(() => {
    current.value = (current.value + 1) % slides.length
  }, 6000)
})
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.controls {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}
.controls span {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}
.controls .active {
  background: #3b82f6;
  border-color: #3b82f6;
  transform: scale(1.2);
}

@media (min-width: 1024px) {
  .controls {
    left: 80px;
    transform: none;
  }
}
</style>
