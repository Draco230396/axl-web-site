<template>
  <LegalLayout title="Términos y condiciones">
    <p>Al contratar los servicios de {{ company.legalName }}, el cliente acepta:</p>
    <ul>
      <li>Que el alcance del proyecto será definido en la propuesta formal.</li>
      <li>Que cualquier cambio adicional podrá generar ajustes en tiempo y costo.</li>
      <li>Que los tiempos de entrega dependen del cumplimiento de entregables por ambas partes.</li>
      <li>Que el pago de anticipo es requisito para iniciar cualquier desarrollo.</li>
      <li>Que la propiedad intelectual será transferida según lo estipulado en contrato.</li>
    </ul>
    <p>{{ company.name }} se reserva el derecho de modificar estos términos sin previo aviso.</p>
  </LegalLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import LegalLayout from '@/components/LegalLayout.vue'
import { company } from '@/data/company'

usePageMeta({
  title: 'Términos y condiciones',
  description: 'Términos y condiciones de los servicios de desarrollo de software de A.X.L – Advanced eXponential Logic.',
  path: '/terms',
  noindex: true
})
</script>
