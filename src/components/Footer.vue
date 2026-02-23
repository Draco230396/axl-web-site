<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Company Info -->
        <div class="footer-col">
          <div class="logo-area">
            <span class="logo-text">A.X.L</span>
          </div>
          <p class="description">
            Impulsamos la transformación digital de empresas líderes con tecnología de vanguardia y diseño estratégico.
          </p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/a-x-l-advanced-exponential-logic9729a43aa/" target="_blank" class="social-link" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://www.facebook.com/Advanced.eXponential.Logic" target="_blank" class="social-link" aria-label="Facebook">Facebook</a>
            <a href="https://www.instagram.com/axlconsultings/" target="_blank" class="social-link" aria-label="Instagram">Instagram</a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/projects">Proyectos</router-link></li>
            <li><router-link to="/about">Nosotros</router-link></li>
            <li><router-link to="/contact">Contacto</router-link></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-col">
          <h3>Servicios</h3>
          <ul>
            <li>Desarrollo Web</li>
            <li>Aplicaciones Móviles</li>
            <li>Consultoría TI</li>
            <li>Diseño UI/UX</li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-col">
          <h3>Contacto</h3>
          <ul class="contact-info">
            <li>
              <span class="icon">📍</span>
              México (Híbrido/Remoto)
            </li>
            <li>
              <span class="icon">📧</span>
              consultings996@gmail.com
            </li>
            <li>
              <span class="icon">📞</span>
              +52 2381476695
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} A.X.L - Todos los derechos reservados.</p>
        <div class="legal-links">
          <router-link to="/privacy">Privacidad</router-link>
          <router-link to="/terms">Términos</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0f172a;
  color: #94a3b8;
  padding: 80px 0 30px;
  font-size: 0.95rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}

.footer-col h3 {
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 24px;
}

.logo-text {
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  display: inline-block;
  margin-bottom: 16px;
}

.description {
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 300px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 12px;
}

a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #38bdf8;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  color: white;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
}

.social-link:hover {
  background: white;
  color: #0f172a;
}

.contact-info li {
  display: flex;
  gap: 10px;
  align-items: center;
}

.footer-bottom {
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.legal-links {
  display: flex;
  gap: 24px;
}
</style>
