<template>
  <div class="main-bar">
    <router-link to="/" class="logo-link">
      <img class="logo" src="@/assets/images/logo-con-razon.png" alt="AXL Logo" />
    </router-link>

    <!-- Hamburger Button -->
    <button 
      class="menu-toggle" 
      @click="isMobileMenuOpen = !isMobileMenuOpen" 
      aria-label="Toggle menu"
      :class="{ 'active': isMobileMenuOpen }"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav :class="{ 'mobile-nav-open': isMobileMenuOpen }">
      <ul>
        <li
          v-for="item in menu"
          :key="item.label"
          class="menu-item"
          @mouseenter="!isMobile && openMenu(item.label)"
          @mouseleave="!isMobile && closeMenu()"
          @click="isMobile && toggleMobileSubmenu(item.label)"
        >
          <router-link 
            v-if="item.link" 
            :to="item.link" 
            class="nav-item-link"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }} 
          </router-link>
          <span v-else class="nav-item-link">{{ item.label }}</span>


          <MegaMenu
            v-if="item.children && (open === item.label || (isMobile && mobileSubmenuOpen === item.label))"
            :items="item.children"
            @close="isMobileMenuOpen = false"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MegaMenu from './MegaMenu.vue'
import menu from '@/data/menu'

const open = ref(null)
const isMobileMenuOpen = ref(false)
const mobileSubmenuOpen = ref(null)
const isMobile = ref(false)
let timeout

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 1024
  if (!isMobile.value) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const openMenu = (label) => {
  clearTimeout(timeout)
  open.value = label
}

const closeMenu = () => {
  timeout = setTimeout(() => {
    open.value = null
  }, 150)
}

const toggleMobileSubmenu = (label) => {
  if (mobileSubmenuOpen.value === label) {
    mobileSubmenuOpen.value = null
  } else {
    mobileSubmenuOpen.value = label
  }
}

</script>

<style scoped>
.main-bar {
  background: #3a3a3a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  position: relative;
  z-index: 1000;
  width: 100%;
}

.logo-link {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo {
  height: 60px;
  max-width: 100%;
  object-fit: contain;
  transition: height 0.3s;
}

nav {
  margin-left: auto;
  display: flex;
}

ul {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item-link {
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.3s;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 2000;
  width: 44px;
  height: 44px;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  transition: all 0.3s ease;
}

@media (max-width: 1024px) {
  .main-bar {
    padding: 10px 20px;
  }
  .logo {
    height: 50px;
  }
  .menu-toggle {
    display: flex;
  }
  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: #1a1a1a;
    flex-direction: column;
    padding: 80px 0 20px;
    transition: right 0.3s ease;
    z-index: 1500;
    box-shadow: -5px 0 20px rgba(0,0,0,0.5);
  }
  nav.mobile-nav-open {
    right: 0;
  }
  ul {
    flex-direction: column;
    gap: 0;
  }
  .nav-item-link {
    display: block;
    padding: 15px 30px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
}

@media (max-width: 480px) {
  .main-bar {
    padding: 10px 15px;
  }
  .logo {
    height: 40px;
  }
}
</style>
