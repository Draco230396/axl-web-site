<template>
  <div class="top-bar">
    <div class="container-top">
      <div class="left">
        <span class="phone">📞 +52 2381476695</span>
        <router-link to="/contact" class="support-link">Soporte y Consultoría</router-link>
      </div>

      <div class="right">
        <div class="social-mini">
          <a href="https://www.linkedin.com/in/a-x-l-advanced-exponential-logic9729a43aa/" target="_blank" title="LinkedIn">
            <span class="social-text">LinkedIn</span>
            <span class="social-icon">IN</span>
          </a>
          <a href="https://wa.me/message/IXR5TMGSMIZJA1" target="_blank" class="whatsapp" title="WhatsApp">
            <span class="social-text">WhatsApp</span>
            <span class="social-icon">WA</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.top-bar {
  background: #000000;
  color: #ffffff;
  padding: 8px 0;
  font-size: 13px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
}

.container-top {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left, .right {
  display: flex;
  gap: 20px;
  align-items: center;
}

.social-mini {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: none;
  font-weight: bold;
  background: rgba(255, 255, 0, 0.1); 
  padding: 2px 6px;
  border-radius: 4px;
}

/* Base styles for TopBar */
.top-bar {
  background: #000;
  color: #fff;
  padding: 8px 0;
  font-size: 13px;
  width: 100%;
}

.container-top {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left, .right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.support-link {
  color: #fff;
  text-decoration: none;
}

.social-mini {
  display: flex;
  gap: 15px;
}

.social-link {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
}

@media (max-width: 1024px) {
  .container-top {
    padding: 0 20px;
  }
  .social-text, .support-link {
    display: none;
  }
  .social-icon {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 11px;
  }
}

@media (max-width: 768px) {
  .container-top {
    padding: 8px 15px;
  }
  .phone {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .container-top {
    gap: 10px;
  }
  .phone {
    font-size: 11px;
  }
}
</style>
