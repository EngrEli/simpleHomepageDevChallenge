<script setup>
import MainNav from "./components/MainNav.vue";
import HeroSection from "./components/HeroSection.vue";
</script>

<template>
  <div class="px-[15px] sm:px-[35px] lg:px-5">
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

@media only screen and (max-width: 639px) {
  html {
    font-size: 12px;
  }
}
</style>
