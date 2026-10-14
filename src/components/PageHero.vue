<template>
  <section class="page-hero on-dark">
    <div class="container">
      <p v-if="kicker" class="kicker">{{ kicker }}</p>
      <h1>{{ title }}</h1>
      <p v-if="lead" class="lead">{{ lead }}</p>
      <slot />
    </div>
    <!-- Trazo de circuito decorativo, el mismo lenguaje del logo -->
    <svg class="trace" viewBox="0 0 400 120" aria-hidden="true">
      <path d="M0 90 H140 V40 H260 V70 H400" />
      <circle cx="140" cy="90" r="4" />
      <circle cx="260" cy="40" r="4" />
      <circle cx="400" cy="70" r="4" />
    </svg>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; lead?: string; kicker?: string }>()
</script>

<style scoped>
.page-hero {
  position: relative;
  overflow: hidden;
  background: var(--ink);
  color: #ffffff;
  padding: clamp(56px, 9vw, 104px) 0 clamp(56px, 8vw, 88px);
}

.kicker {
  margin: 0 0 16px;
  color: var(--ice);
  font-weight: 600;
}

h1 {
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  max-width: 20ch;
}

.lead {
  margin: 20px 0 0;
  max-width: 58ch;
  color: var(--muted-dark);
  font-size: var(--text-lg);
  line-height: 1.6;
}

.trace {
  position: absolute;
  right: -20px;
  bottom: 24px;
  width: min(420px, 45vw);
  fill: none;
  stroke: var(--ice);
  stroke-width: 1.5;
  opacity: 0.35;
}

.trace circle {
  fill: var(--ink);
}

@media (max-width: 640px) {
  .trace {
    display: none;
  }
}
</style>
