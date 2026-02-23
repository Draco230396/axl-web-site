<template>
  <div class="main-bar">
    <router-link to="/">
      <img class="logo" src="@/assets/images/logo-con-razon.png" alt="AXL Logo" />
    </router-link>

    <nav>
      <ul>
        <li
          v-for="item in menu"
          :key="item.label"
          class="menu-item"
          @mouseenter="openMenu(item.label)"
          @mouseleave="closeMenu"
        >

          <router-link 
            v-if="item.link" 
            :to="item.link" 
            class="nav-item-link"
          >
            {{ item.label }}
          </router-link>
          <span v-else>{{ item.label }}</span>

          <!-- Si tiene ruta -->
          <router-link
            v-if="item.route"
            :to="item.route"
            class="menu-link"
          >
            {{ item.label }} 
            https://github.com/Draco230396/axl-web-site/pull/2/conflict?name=src%252Fcomponents%252Fheader%252FMegaMenu.vue&ancestor_oid=64fed9d65ade37b173b27c1df45e9464e43620ff&base_oid=8906e21cd861c7a983bdec56420ae987b8b6ba0d&head_oid=612c287f86a90607901e928bd1fbfa2c0f374dd5
          </router-link>

          <!-- Si tiene submenu -->
          <span v-else class="menu-link">
            {{ item.label }}
          </span>


          <MegaMenu
            v-if="item.children && open === item.label"
            :items="item.children"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MegaMenu from './MegaMenu.vue'
import menu from '@/data/menu'

const open = ref(null)
let timeout

const openMenu = (label) => {
  clearTimeout(timeout)
  open.value = label
}

const closeMenu = () => {
  timeout = setTimeout(() => {
    open.value = null
  }, 150)
}

</script>

<style scoped>
.menu-item {
  position: relative;
}
.main-bar {
  background: #3a3a3a;
  overflow: visible;
  display: flex;
  align-items: center;
  padding: 10px 40px;
  position: relative;
  z-index: 100;
}
.logo {
  height: 100px;
}
nav {
  margin-left: auto;
}
ul {
  display: flex;
  gap: 30px;
  list-style: none;
}
span {
  color: rgb(255, 255, 255);
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
}
.nav-item-link {
  color: rgb(255, 255, 255);
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
}
.mega {
  z-index: 999;
}
li {
  position: relative;
}


</style>
