<template>
  <div class="legal-page">
    <div class="container">
      <h1>Política de Privacidad</h1>
      <div class="legal-content">
        <p>A.X.L – Advanced eXponential Logic respecte la privacidad de sus usuarios y clientes.</p>
        <p>
          La información recopilada a través de formularios, correos electrónicos o canales de contacto será utilizada exclusivamente para fines comerciales, informativos o contractuales relacionados con los servicios ofrecidos por la empresa.
        </p>
        <p>No compartimos, vendemos ni distribuimos datos personales a terceros sin autorización expresa del titular.</p>
        <p>
          Los usuarios pueden solicitar en cualquier momento la modificación o eliminación de sus datos enviando un correo a: 
          <strong>consultings996@gmail.com</strong>
        </p>
        <p>AXL implementa medidas técnicas y organizativas para proteger la información contra accesos no autorizados.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Política de Privacidad',
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

p {
  margin-bottom: 24px;
}
</style>
