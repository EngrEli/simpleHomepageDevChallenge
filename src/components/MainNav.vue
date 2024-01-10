<template>
  <header>
    <div class="flex justify-between pt-7 items-center">
      <h1>
        <a
          href="#"
          class="flex gap-2 font-bold text-dark text-2xl items-center"
        >
          <!-- <img src="../assets/alarado-icon-homepage.svg" alt="Company Icon" /> -->
          <img
            src="../assets/alarado-icon.png"
            alt="Company Icon"
            class="h-full"
          />
          <span class="company-icon-text">Alarado</span>
        </a>
      </h1>
      <ul
        class="nav-link justify-between gap-10 text-sm items-center hidden sm:flex"
      >
        <li class="active"><a href=""> About us </a></li>
        <li><a href="">Product</a></li>
        <li><a href="">Resource</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <ToggleThemeModeSwitchVue />
      <Sidebar />
    </div>
  </header>
</template>

<style scoped>
.nav-link .active {
  @apply font-bold text-dark;
}

.nav-link li {
  @apply text-light-text;
}

.dark .nav-link li {
  @apply text-grey;
}

.dark .nav-link .active {
  @apply text-body-background;
}

.dark .company-icon-text {
  @apply text-body-background;
}
</style>

<script setup>
import { ref } from "vue";
import ToggleThemeModeSwitchVue from "./ToggleThemeModeSwitch.vue";
import Sidebar from "./Sidebar.vue";
</script>
