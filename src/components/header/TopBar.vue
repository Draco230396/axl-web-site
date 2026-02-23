<template>
  <div class="top-bar">
    <div class="left">
      <span>📞 +52 2381476695</span>
      <router-link to="/contact">Soporte y Consultoría</router-link>
    </div>

    <div class="right">
      <div class="social-mini">
        <a href="https://www.linkedin.com/in/a-x-l-advanced-exponential-logic9729a43aa/" target="_blank">LinkedIn</a>
        <a href="https://wa.me/message/IXR5TMGSMIZJA1" target="_blank">WhatsApp</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue'
import SearchBox from './SearchBox.vue'
</script>

<style scoped>
.top-bar {
  background: #000000;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 6px 40px;
  font-size: 13px;
}
.left, .right {
  display: flex;
  gap: 20px;
  align-items: center;
}
a { color: inherit; text-decoration: none; }
</style>
