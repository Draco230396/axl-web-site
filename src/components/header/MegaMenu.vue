<template>
  <div class="mega">
    <div
      class="column"
      v-for="section in items"
      :key="section.title"
    >
      <router-link 
        v-if="section.action" 
        :to="section.action"
        class="section-title-link"
      >
        <h4>{{ section.title }}</h4>
      </router-link>
      <h4 v-else>{{ section.title }}</h4>

      <router-link
        v-for="link in section.links"
        :key="link"
        :to="section.action || '/'"
        class="sub-link"
      >
        {{ link }}
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
.section-title-link {
  text-decoration: none;
}
.section-title-link:hover h4 {
  color: #0ea5e9;
}
.column h4 {
  color: #38bdf8;
  margin-bottom: 10px;
  font-size: 1rem;
  transition: color 0.2s;
}
.sub-link {
  display: block;
  color: #cbd5e1;
  font-size: 0.9rem;
  margin-bottom: 8px;
  text-decoration: none;
  transition: color 0.2s;
}
.sub-link:hover {
  color: #ffffff;
}
</style>
