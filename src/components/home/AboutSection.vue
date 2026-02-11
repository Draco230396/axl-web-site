<template>
  <section class="about">
    <div class="container">

      <div class="text">
        <span class="label">QUIÉNES SOMOS</span>

        <h2>
          Somos el acelerador que impulsa el crecimiento
          en Latinoamérica
        </h2>

        <p>
          En A.X.L combinamos experiencia tecnológica,
          ingeniería digital, inteligencia artificial y
          consultoría estratégica para impulsar empresas
          hacia la transformación digital real.
        </p>

        <div class="tags">
          <span>Ingeniería global de excelencia</span>
          <span>Servicios Nearshore</span>
          <span>Consultoría especializada</span>
          <span>Innovación AI-Native</span>
        </div>
      </div>

      <div class="image">
        <img src="../assets/images/home/prueba.png" alt="Colocar uma imagen de prueba">
      </div>

    </div>
  </section>
</template>

<style scoped>
.about {
  background: #eaf1f7;
  padding: 100px 0;
}

.container {
  width: 85%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

.text {
  flex: 1;
}

.label {
  letter-spacing: 4px;
  font-size: 13px;
  color: #1e3a8a;
  font-weight: 600;
}

h2 {
  font-size: 42px;
  margin: 20px 0;
  color: #2563eb;
  line-height: 1.2;
}

p {
  font-size: 16px;
  color: #334155;
  margin-bottom: 30px;
  max-width: 500px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.tags span {
  border: 1px solid #2563eb;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 14px;
  color: #2563eb;
  cursor: pointer;
  transition: 0.3s;
}

.tags span:hover {
  background: #2563eb;
  color: white;
}

.image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image img {
  width: 380px;
  border-radius: 50%;
}
</style>
