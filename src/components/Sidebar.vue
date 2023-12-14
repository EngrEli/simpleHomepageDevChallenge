<script setup>
import { computed, ref } from "vue";

const sidebarOpen = ref(false);
const sidebarClass = computed(() => {
  return sidebarOpen.value ? "active" : "";
});

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;

  // Add or remove the 'no-scroll' class to the body based on sidebar state
  if (sidebarOpen.value) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.classList.remove("no-scroll");
  }
};
</script>

<template>
  <!-- Mobile sidebar -->
  <div
    class="sm:hidden"
    v-if="!sidebarOpen"
    @click="sidebarOpen = !sidebarOpen"
  >
    <font-awesome-icon icon="fa-solid fa-bars" size="2xl" />
  </div>
  <div class="sidebar" :class="sidebarClass">
    <div @click="toggleSidebar">
      <font-awesome-icon icon="fa-solid fa-x" />
    </div>

    <ul class="sidebar__menu">
      <li><a>Home</a></li>
      <li><a>Beverages</a></li>
      <li><a>Chef</a></li>
      <li><a>Ingredient</a></li>
      <li><a>Stories</a></li>
      <li><a>My Kitchen</a></li>
    </ul>
  </div>
  <div v-if="sidebarOpen" class="sidebar-overlay" @click="toggleSidebar"></div>
</template>

<style scoped>
.sidebar-overlay {
  position: fixed;
  z-index: 101;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.sidebar {
  position: fixed;
  right: -205px;
  top: 0;
  width: 200px;
  background-color: #ffffff;
  height: 100%;
  z-index: 102;
  -webkit-box-shadow: 7px 8px 15px 8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 8px 15px 8px rgba(0, 0, 0, 0.75);
  box-shadow: 7px 8px 15px 8px rgba(0, 0, 0, 0.75);
  transition: all 300ms ease-in;
}

.sidebar.active {
  right: 0 !important;
}

.sidebar__menu {
  position: relative;
}

.sidebar__show {
  right: 0;
}

.sidebar__menu a:hover {
  color: var(--primary-text-color);
  font-weight: bold;
}

.sidebar__close {
  position: absolute;
  top: -30px;
  right: 20px;
}

body.no-scroll {
  overflow: hidden;
}
</style>
