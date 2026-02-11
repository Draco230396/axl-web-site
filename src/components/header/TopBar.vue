<template>
  <div class="top-bar">
    <div class="left">
      <a href="#">Oficinas</a>
      <a href="#">Contacto</a>
    </div>

    <div class="right">
      <LanguageSwitcher />
      <SearchBox />
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
