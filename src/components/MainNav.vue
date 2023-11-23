<script setup>
import ToggleThemeModeSwitchVue from "./ToggleThemeModeSwitch.vue";
</script>

<template>
  <header>
    <div class="flex justify-between pt-7 items-center">
      <h1>
        <a href="#">
          <img src="../assets/alarado-icon-homepage.svg" alt="Company Icon" />
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
      <div class="sm:hidden">
        <font-awesome-icon icon="fa-solid fa-bars" size="2xl" />
      </div>
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
</style>
