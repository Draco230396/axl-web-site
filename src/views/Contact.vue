<template>
  <div>
    <PageHero
      title="Hablemos de tu proyecto"
      lead="Cuéntanos qué necesitas en el formulario o escríbenos directo. Te respondemos para agendar una llamada."
    />

    <section class="contact">
      <div class="container layout">
        <QuoteForm />

        <aside class="channels" aria-labelledby="channels-title">
          <h2 id="channels-title">Otras formas de contactarnos</h2>
          <ul>
            <li>
              <span class="label">WhatsApp</span>
              <a :href="whatsapp.url" target="_blank" rel="noopener noreferrer">Enviar mensaje</a>
            </li>
            <li>
              <span class="label">Correo</span>
              <a :href="`mailto:${company.email}`">{{ company.email }}</a>
            </li>
            <li>
              <span class="label">Teléfono</span>
              <a :href="company.phone.href">{{ company.phone.display }}</a>
            </li>
            <li>
              <span class="label">Ubicación</span>
              <span>{{ company.location }}</span>
            </li>
          </ul>

          <h3>Redes</h3>
          <ul class="social">
            <li v-for="link in otherSocial" :key="link.id">
              <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import PageHero from '@/components/PageHero.vue'
import QuoteForm from '@/components/QuoteForm.vue'
import { company, social, socialLinks } from '@/data/company'

usePageMeta({
  title: 'Contacto',
  description: 'Cotiza tu proyecto de software con A.X.L. Escríbenos por el formulario, WhatsApp, correo o teléfono.',
  path: '/contact'
})

const whatsapp = social('whatsapp')
const otherSocial = socialLinks.filter((s) => s.id !== 'whatsapp')
</script>

<style scoped>
.contact {
  background: var(--paper);
  padding: clamp(48px, 7vw, 88px) 0 var(--section-space);
}

.layout {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.8fr);
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}

.channels {
  padding: clamp(24px, 3vw, 32px);
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: #ffffff;
}

h2 {
  font-size: var(--text-lg);
  color: var(--ink);
  margin-bottom: 20px;
}

h3 {
  font-family: var(--font-body);
  font-size: 0.95rem;
  letter-spacing: 0;
  color: var(--ink);
  margin: 28px 0 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 18px;
}

.label {
  display: block;
  font-size: var(--text-sm);
  color: var(--muted);
  margin-bottom: 2px;
}

.channels a {
  color: var(--signal);
  font-weight: 600;
  text-decoration: none;
  word-break: break-word;
}

.channels a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.social {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.social a {
  display: inline-block;
  padding: 6px 14px;
  border: 1px solid var(--line);
  border-radius: var(--radius-pill);
  font-weight: 500;
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
