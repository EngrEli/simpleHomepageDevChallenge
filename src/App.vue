<script setup>
import MainNav from "./components/MainNav.vue";
import HeroSection from "./components/HeroSection.vue";
</script>

<template>
  <div class="p-[15px] sm:p-[35px] lg:p-0">
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
</style>
