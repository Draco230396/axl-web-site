<template>
  <div class="floating">
    <Transition name="fade">
      <button v-if="showTop" type="button" class="fab top" aria-label="Volver arriba" @click="toTop">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
      </button>
    </Transition>

    <a
      :href="whatsapp.url"
      target="_blank"
      rel="noopener noreferrer"
      class="fab whatsapp"
      aria-label="Escríbenos por WhatsApp"
    >
      <!-- Ícono de WhatsApp simplificado -->
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2Z"
          class="bubble"
        />
        <path
          d="M9.1 7.9c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.7-.1-.3 0-.4.1-.5l.4-.4.2-.4c.1-.2 0-.3 0-.4l-.8-1.9Z"
          class="handset"
        />
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { social } from '@/data/company'

const whatsapp = social('whatsapp')
const showTop = ref(false)

const onScroll = () => {
  showTop.value = window.scrollY > window.innerHeight
}
const toTop = () => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.floating {
  position: fixed;
  right: max(16px, env(safe-area-inset-right));
  bottom: max(16px, env(safe-area-inset-bottom));
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.fab {
  display: grid;
  place-items: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 10px 24px -8px rgba(10, 26, 47, 0.45);
  transition: transform 0.15s ease;
}

.fab:hover {
  transform: translateY(-2px);
}

.whatsapp {
  width: 56px;
  height: 56px;
  background: #25d366;
}

.whatsapp svg {
  width: 30px;
  height: 30px;
}

.whatsapp .bubble {
  fill: none;
  stroke: #ffffff;
  stroke-width: 1.6;
  stroke-linejoin: round;
}

.whatsapp .handset {
  fill: #ffffff;
}

.top {
  width: 44px;
  height: 44px;
  border: 1px solid var(--line-dark);
  background: var(--ink);
}

.top svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--ice);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
