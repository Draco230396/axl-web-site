<template>
  <div
    class="slide"
    :style="{ backgroundImage: `url(${slide.image})` }"
  >
    <div class="overlay">
      <h1>{{ slide.title }}</h1>
      <p>{{ slide.subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  slide: Object
})
</script>

<style scoped>
.slide {
  height: 80vh;
  background-size: cover;
  background-position: center;
  position: relative;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
  color: white;
}
h1 {
  font-size: 48px;
}
p {
  font-size: 18px;
  max-width: 500px;
}
</style>
