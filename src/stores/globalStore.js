import { ref } from "vue";
import { defineStore } from "pinia";

export const globalStore = defineStore("global", () => {
  const sidebarOpen = ref(false);
  const isDarkMode = ref(false);

  const darkModeToggle = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  return { sidebarOpen, isDarkMode, darkModeToggle };
});
