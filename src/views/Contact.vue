<template>
  <div class="contact-page">
    <div class="hero">
      <div class="container">
        <h1>Contáctanos</h1>
        <p>¿Tienes un proyecto en mente? Hablemos.</p>
      </div>
    </div>

    <div class="container content-wrapper">
      <div class="contact-grid">
        <!-- Contact Info Card -->
        <div class="info-card">
          <h3>Información de Contacto</h3>
          <p class="subtitle">Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo.</p>
          
          <div class="info-item">
            <span class="icon">📍</span>
            <div>
              <h4>Ubicación</h4>
              <p>México (Sede Corporativa - Modalidad Híbrida)</p>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>consultings996@gmail.com</p>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">📱</span>
            <div>
              <h4>Teléfono</h4>
              <p>+52 2381476695</p>
            </div>
          </div>

          <div class="social-links">
            <a href="https://www.linkedin.com/in/a-x-l-advanced-exponential-logic9729a43aa/" target="_blank" class="social-icon">LinkedIn</a>
            <a href="https://www.facebook.com/Advanced.eXponential.Logic" target="_blank" class="social-icon">Facebook</a>
            <a href="https://www.instagram.com/axlconsultings/" target="_blank" class="social-icon">Instagram</a>
            <a href="https://wa.me/message/IXR5TMGSMIZJA1" target="_blank" class="social-icon">WhatsApp</a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="form-card">
          <h3>Envíanos un mensaje</h3>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nombre Completo</label>
              <input type="text" id="name" v-model="form.name" placeholder="Tu nombre" required />
            </div>

            <div class="form-group">
              <label for="email">Correo Electrónico</label>
              <input type="email" id="email" v-model="form.email" placeholder="tu@email.com" required />
            </div>

            <div class="form-group">
              <label for="subject">Asunto</label>
              <input type="text" id="subject" v-model="form.subject" placeholder="¿En qué podemos ayudarte?" required />
            </div>

            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea id="message" v-model="form.message" rows="5" placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
            </div>

            <button type="submit" class="submit-btn" :disabled="loading">
              {{ loading ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>
            
            <p v-if="success" class="success-msg">¡Mensaje enviado con éxito!</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Contacto',
  meta: [
    { name: 'description', content: 'Contáctanos para discutir tu próximo proyecto digital. Estamos listos para ayudarte.' }
  ]
})

const loading = ref(false)
const success = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  loading.value = true
  // Simulate API call
  setTimeout(() => {
    loading.value = false
    success.value = true
    // Reset form after 2 seconds
    setTimeout(() => {
      success.value = false
      Object.assign(form, { name: '', email: '', subject: '', message: '' })
    }, 3000)
  }, 1500)
}
</script>

<style scoped>
.contact-page {
  background-color: #f8fafc;
  min-height: 100vh;
}

.hero {
  background: #1e293b;
  color: white;
  padding: 80px 0 60px;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
}

.hero p {
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  padding-top: 60px;
  padding-bottom: 100px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  align-items: start;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

.info-card, .form-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.info-card {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: white;
  border: none;
}

h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.subtitle {
  color: #94a3b8;
  margin-bottom: 40px;
  line-height: 1.6;
}

.info-item {
  display: flex;
  gap: 16px;
  margin-bottom: 30px;
}

.icon {
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.info-item h4 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.info-item p {
  color: #cbd5e1;
}

.social-links {
  margin-top: 40px;
  display: flex;
  gap: 16px;
}

.social-icon {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: white;
  color: #1e293b;
}

/* Form Styles */
.form-group {
  margin-bottom: 24px;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #334155;
}

input, textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  background: #f8fafc;
  transition: all 0.2s ease;
  font-family: inherit;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #2563eb;
  background: white;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 16px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #1d4ed8;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-msg {
  text-align: center;
  margin-top: 16px;
  color: #16a34a;
  font-weight: 600;
}
</style>
