<template>
  <div class="social">
    <a href="https://wa.me/521XXXXXXXXXX" target="_blank">🟢</a>
    <a href="#">📘</a>
    <a href="#">📸</a>
    <a href="#">💼</a>
  </div>
</template>

<style scoped>
.social {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 24px;
  z-index: 1000;
}

@media (max-width: 480px) {
  .social {
    bottom: 15px;
    right: 15px;
    gap: 8px;
    font-size: 20px;
  }
}
</style>
