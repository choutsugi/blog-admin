import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state() {
    return {
      collapsed: false,
    };
  },
  actions: {
    switchCollapsed() {
      this.collapsed = !this.collapsed;
    },
    setCollapsed(collapsed: boolean) {
      this.collapsed = collapsed;
    },
  },
});
