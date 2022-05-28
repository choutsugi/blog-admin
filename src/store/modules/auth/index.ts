import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: localStorage.getItem("Access-Token") || null,
    };
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem("Access-Token", token);
    },
    removeToken() {
      this.token = "";
      localStorage.removeItem("Access-Token");
    },
  },
});
