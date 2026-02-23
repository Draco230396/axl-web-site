<template>
  <section class="section dark">
    <div class="container">
      <h2>Nuestros Valores</h2>

      <div class="grid">
        <div class="card">
          <h3>Innovación</h3>
          <p>Implementamos tecnología moderna y escalable.</p>
        </div>

        <div class="card">
          <h3>Excelencia Técnica</h3>
          <p>Desarrollo con estándares profesionales.</p>
        </div>

        <div class="card">
          <h3>Orientación a Resultados</h3>
          <p>La tecnología debe generar crecimiento real.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dark {
  background: #0f172a;
  color: white;
}

.grid {
  display: flex;
  gap: 30px;
  margin-top: 40px;
}

.card {
  background: #1e293b;
  padding: 30px;
  border-radius: 12px;
  flex: 1;
}
</style>
