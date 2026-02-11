<template>
  <div class="mega">
    <div
      class="column"
      v-for="section in items"
      :key="section.title"
    >
      <h4>{{ section.title }}</h4>
        <router-link
          v-for="link in section.links"
          :key="link.name"
          :to="link.route"
          class="mega-link"
        >
          {{ link.name }}
        </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array
})
</script>

<style scoped>
.mega {
  position: absolute;
  top: 100%;
  left: 0;
  background: #222;
  display: flex;
  gap: 60px;
  padding: 30px;
  min-width: 600px;
}
.mega-link {
  display: block;
  color: #e5e7eb;
  font-size: 13px;
  margin-bottom: 6px;
  text-decoration: none;
}
.mega-link:hover {
  color: #38bdf8;
}
.column h4 {
  color: #38bdf8;
  margin-bottom: 10px;
}
.column a {
  display: block;
  color: #e5e7eb;
  font-size: 13px;
  margin-bottom: 6px;
  text-decoration: none;
}
</style>
