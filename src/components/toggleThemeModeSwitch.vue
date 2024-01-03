<template>
  <label
    for="toggleThree"
    class="items-center cursor-pointer select-none text-dark dark:text-white hidden sm:flex"
  >
    <div class="relative">
      <input
        type="checkbox"
        id="toggleThree"
        class="peer sr-only"
        @change="global.darkModeToggle"
      />
      <div
        class="block h-8 rounded-full bg-light-text dark:bg-dark-2 w-14"
      ></div>
      <div
        class="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dark:bg-dark-5 left-1 top-1 peer-checked:translate-x-full peer-checked:test"
      >
        <span class="text-blue-600 dark:text-light sun">
          <img
            src="@/assets/sun-fill.svg"
            alt="Sun"
            class="w-4 h-4 stroke-current"
          />
        </span>
        <span class="text-blue-600 dark:text-light moon hidden">
          <img
            src="@/assets/moon-fill.svg"
            alt="Moon"
            class="w-4 h-4 stroke-current"
          />
        </span>
      </div>
    </div>
  </label>
</template>

<style scoped>
/* Add any custom styles if needed */
.peer:checked ~ .peer-checked\:test .sun {
  display: none;
}

.peer:checked ~ .peer-checked\:test .moon {
  display: block;
}
</style>

<script setup>
import { globalStore } from "@/stores/globalStore";
const global = globalStore();
</script>
