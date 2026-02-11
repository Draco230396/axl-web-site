<template>
  <div class="main-bar">
    <img class="logo" src="../../assets/images/logo-con-razon.png" />

    <nav>
      <ul>
        <li
          v-for="item in menu"
          :key="item.label"
          class="menu-item"
          @mouseenter="openMenu(item.label)"
          @mouseleave="closeMenu"
        >
          <span>{{ item.label }}</span>

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
import menu from '../../data/menu'

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
.mega {
  z-index: 999;
}
li {
  position: relative;
}


</style>
