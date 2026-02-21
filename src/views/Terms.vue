<template>
  <div class="legal-page">
    <div class="container">
      <h1>Términos y Condiciones</h1>
      <div class="legal-content">
        <p>Al contratar los servicios de A.X.L – Advanced eXponential Logic, el cliente acepta:</p>
        <ul>
          <li>Que el alcance del proyecto será definido en la propuesta formal.</li>
          <li>Que cualquier cambio adicional podrá generar ajustes en tiempo y costo.</li>
          <li>Que los tiempos de entrega dependen del cumplimiento de entregables por ambas partes.</li>
          <li>Que el pago de anticipo es requisito para iniciar cualquier desarrollo.</li>
          <li>Que la propiedad intelectual será transferida según lo estipulado en contrato.</li>
        </ul>
        <p>AXL se reserva el derecho de modificar estos términos sin previo aviso.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Términos y Condiciones',
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})
</script>

<style scoped>
.legal-page {
  padding: 120px 0 80px;
  background: #f8fafc;
  min-height: 100vh;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: #0f172a;
}

.legal-content {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  border: 1px solid #e2e8f0;
  line-height: 1.8;
  color: #334155;
}

ul {
  margin-bottom: 24px;
  padding-left: 20px;
}

li {
  margin-bottom: 12px;
}

p {
  margin-bottom: 24px;
}
</style>
