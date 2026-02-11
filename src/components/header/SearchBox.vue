<template>
  <input
    type="text"
    placeholder="Buscar..."
    @keyup.enter="search"
  />
</template>

<script setup>
function search(e) {
  console.log('Buscar:', e.target.value)
}
</script>

<style scoped>
input {
  background: #111;
  border: none;
  color: white;
  padding: 4px 8px;
}
</style>
