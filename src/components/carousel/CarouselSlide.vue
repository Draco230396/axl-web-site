<template>
  <div
    class="slide"
    :style="{ backgroundImage: `url(${slide.image})` }"
  >
    <div class="overlay">
      <div class="container">
        <h1>{{ slide.title }}</h1>
        <p>{{ slide.subtitle }}</p>
      </div>
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
  height: 85vh;
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
}
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 80px;
}
h1 {
  font-size: clamp(1.75rem, 10vw, 4rem);
  line-height: 1.1;
  margin-bottom: 20px;
  font-weight: 900;
  max-width: 800px;
  word-break: break-word;
  overflow-wrap: break-word;
}
p {
  font-size: clamp(0.9rem, 4vw, 1.25rem);
  max-width: 600px;
  color: #cbd5e1;
}

@media (max-width: 768px) {
  .container {
    padding: 0 30px;
    text-align: center;
  }
  h1 { 
    margin: 0 auto 15px;
    font-size: clamp(1.5rem, 12vw, 2.5rem);
  }
  p { margin: 0 auto; }
}

@media (max-width: 360px) {
  .container {
    padding: 0 15px;
    max-width: 290px;
  }
  h1 {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 10px;
  }
  p {
    font-size: 0.85rem;
  }
}
</style>
