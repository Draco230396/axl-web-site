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
        <img src="@/assets/images/home/prueba.png" alt="Colocar uma imagen de prueba">
      </div>

    </div>
  </section>
</template>

<style scoped>
.about {
  background: #eaf1f7;
  padding: 60px 0;
  overflow: hidden;
  width: 100%;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.text {
  width: 100%;
  text-align: center;
}

.label {
  letter-spacing: 2px;
  font-size: 12px;
  color: #1e3a8a;
  font-weight: 600;
}

h2 {
  font-size: clamp(1.5rem, 8vw, 2.5rem);
  margin: 15px 0;
  color: #2563eb;
  line-height: 1.2;
}

p {
  font-size: 15px;
  color: #334155;
  margin: 0 auto 25px;
  max-width: 100%;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.tags span {
  border: 1px solid #2563eb;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: #2563eb;
  cursor: pointer;
  transition: 0.3s;
}

.tags span:hover {
  background: #2563eb;
  color: white;
}

.image {
  width: 100%;
  display: flex;
  justify-content: center;
}

.image img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 20px;
}

@media (min-width: 1024px) {
  .container {
    flex-direction: row;
    width: 85%;
    gap: 60px;
  }
  .text {
    flex: 1;
    text-align: left;
  }
  .image {
    flex: 1;
  }
  .image img {
    width: 380px;
    border-radius: 50%;
  }
  .tags {
    justify-content: flex-start;
  }
}
</style>
