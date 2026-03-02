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
        @click="$emit('close')"
      >
        <h4>{{ section.title }}</h4>
      </router-link>
      <h4 v-else>{{ section.title }}</h4>

      <router-link
        v-for="link in typeof section.links[0] === 'string' ? section.links : section.links"
        :key="typeof link === 'string' ? link : link.name"
        :to="typeof link === 'string' ? (section.action || '/') : link.route"
        class="sub-link"
        @click="$emit('close')"
      >
        {{ typeof link === 'string' ? link : link.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array
})

defineEmits(['close'])
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
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
}

.section-title-link {
  text-decoration: none;
}

.section-title-link:hover h4 {
  color: #2563eb;
}

.column h4 {
  color: #60a5fa;
  margin-bottom: 12px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sub-link {
  display: block;
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-decoration: none;
  transition: color 0.2s;
}

.sub-link:hover {
  color: #ffffff;
}

@media (max-width: 1024px) {
  .mega {
    position: static;
    min-width: 100%;
    flex-direction: column;
    gap: 30px;
    padding: 20px 40px;
    background: #2a2a2a;
    box-shadow: none;
  }

  .column h4 {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }

  .sub-link {
    padding: 5px 0;
    font-size: 0.95rem;
  }
}
</style>
