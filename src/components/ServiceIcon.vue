<template>
  <!-- Íconos de línea con el lenguaje del logo: trazos redondeados y nodos en las puntas -->
  <svg
    class="service-icon"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'code'">
      <path d="M11 10 5 16l6 6M21 10l6 6-6 6M18 7l-4 18" />
    </template>

    <template v-else-if="name === 'cloud'">
      <path d="M9.5 21a5 5 0 0 1-.6-9.96A7 7 0 0 1 22.6 10.5 5.25 5.25 0 0 1 22.5 21H9.5Z" />
      <path d="M12 21v4M16 21v6M20 21v4" />
      <circle cx="12" cy="26.5" r="1.5" />
      <circle cx="20" cy="26.5" r="1.5" />
    </template>

    <template v-else-if="name === 'devices'">
      <rect x="3" y="6" width="20" height="14" rx="2" />
      <path d="M9 25h8M13 20v5" />
      <rect x="22" y="12" width="7" height="14" rx="1.5" />
      <path d="M25 23h1" />
    </template>

    <template v-else-if="name === 'automation'">
      <path d="M25 13a9.5 9.5 0 0 0-17.4-3.5M7 19a9.5 9.5 0 0 0 17.4 3.5" />
      <path d="M7.5 4.5v5h5M24.5 27.5v-5h-5" />
      <circle cx="16" cy="16" r="2.5" />
    </template>

    <template v-else-if="name === 'integration'">
      <rect x="3" y="5" width="9" height="7" rx="1.5" />
      <rect x="20" y="20" width="9" height="7" rx="1.5" />
      <path d="M12 8.5h4.5v15H20" />
      <circle cx="16.5" cy="16" r="1.5" />
    </template>

    <template v-else-if="name === 'growth'">
      <path d="M4 27h24M4 27V5" />
      <path d="M7 23c6 0 10-2 13-6s4.5-8 6-11" />
      <circle cx="7" cy="23" r="1.5" />
      <circle cx="17.5" cy="19" r="1.5" />
      <circle cx="26" cy="6" r="1.5" />
    </template>
  </svg>
</template>

<script setup lang="ts">
import type { ServiceIconName } from '@/data/services'

defineProps<{ name: ServiceIconName }>()
</script>

<style scoped>
.service-icon {
  width: 32px;
  height: 32px;
  display: block;
}
</style>
