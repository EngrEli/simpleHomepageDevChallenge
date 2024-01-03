<script setup>
import MainNav from "./components/MainNav.vue";
import HeroSection from "./components/HeroSection.vue";

import { ref, watch } from "vue";
import { globalStore } from "@/stores/globalStore";
const global = globalStore();

watch(
  () => global.isDarkMode,
  (newVal) => {
    document.documentElement.classList.toggle("dark", newVal);
    console.log("test");
  }
);
</script>

<template>
  <div class="px-[15px] py-[15px] sm:px-[35px] sm:py-0 lg:px-5">
    <div class="container max-w-7xl mx-auto">
      <MainNav />
      <HeroSection />
    </div>
  </div>
</template>

<style>
html {
  height: 100%;
  width: 100%;
  background-color: #f2f9fe;
}

.dark {
  background-color: #111729;
}

@media only screen and (max-width: 639px) {
  html {
    font-size: 12px;
  }
}
</style>
