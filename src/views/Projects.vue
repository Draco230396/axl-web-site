<template>
  <section>
    <h2>Proyectos Realizados</h2>

    <div class="projects">
      <div class="card" v-for="p in projects" :key="p">
        <h3>{{ p }}</h3>
        <p>Descripción del proyecto</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3']
</script>
