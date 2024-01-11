<script setup>
import { computed, ref, watch } from "vue";
import ToggleThemeModeSwitchVue from "./ToggleThemeModeSwitch.vue";
import { globalStore } from "@/stores/globalStore";
const global = globalStore();

const sidebarOpen = ref(false);
const sidebarClass = computed(() => {
  return sidebarOpen.value ? "active" : "";
});

watch(
  () => sidebarOpen.value,
  (newValue) => {
    if (newValue) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const darkIcon = computed(() => {
  return global.isDarkMode ? "#ffffff" : "#000000";
});
</script>

<template>
  <!-- Mobile sidebar -->
  <div
    class="sm:hidden"
    v-if="!sidebarOpen"
    @click="sidebarOpen = !sidebarOpen"
  >
    <font-awesome-icon
      icon="fa-solid fa-bars"
      size="2xl"
      :style="{ color: darkIcon }"
    />
  </div>
  <div class="sidebar" :class="sidebarClass">
    <div @click="toggleSidebar" class="flex justify-end my-5 mr-3">
      <font-awesome-icon icon="fa-solid fa-x" :style="{ color: darkIcon }" />
    </div>

    <ul class="sidebar__menu text-center">
      <li><a>About Us</a></li>
      <li><a>Product</a></li>
      <li><a>Resource</a></li>
      <li><a>Contact</a></li>
    </ul>
    <ToggleThemeModeSwitchVue />
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

.sidebar__menu li {
  margin: 10px 0;
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

.dark .sidebar {
  @apply bg-dark;
}

.dark .sidebar .sidebar__menu a {
  @apply text-body-background;
}
</style>
