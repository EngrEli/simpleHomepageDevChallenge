import { ref } from "vue";

export const globalStore = defineStore("global", () => {
  const sidebarOpen = ref(false);

  return { sidebarOpen };
});
