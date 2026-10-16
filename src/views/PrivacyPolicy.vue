<template>
  <LegalLayout title="Aviso de privacidad">
    <p>{{ company.legalName }} respeta la privacidad de sus usuarios y clientes.</p>
    <p>
      La información recopilada a través de formularios, correos electrónicos o canales de contacto será utilizada
      exclusivamente para fines comerciales, informativos o contractuales relacionados con los servicios ofrecidos
      por la empresa.
    </p>
    <p>No compartimos, vendemos ni distribuimos datos personales a terceros sin autorización expresa del titular.</p>
    <p>
      Los usuarios pueden solicitar en cualquier momento la modificación o eliminación de sus datos enviando un
      correo a <a :href="`mailto:${company.email}`">{{ company.email }}</a>.
    </p>
    <p>{{ company.name }} implementa medidas técnicas y organizativas para proteger la información contra accesos no autorizados.</p>
  </LegalLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import LegalLayout from '@/components/LegalLayout.vue'
import { company } from '@/data/company'

usePageMeta({
  title: 'Aviso de privacidad',
  description: 'Aviso de privacidad de A.X.L – Advanced eXponential Logic: uso y protección de tus datos personales.',
  path: '/privacy',
  noindex: true
})
</script>
