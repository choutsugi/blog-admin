import { defineStore } from "pinia";
import userAPI from "@/api/login";
import router from "@/router";

export const index = defineStore("user", {
  state: () => ({
    token: sessionStorage.getItem("token"),
    name: "",
  }),
  actions: {
    login({ username, password }: any) {
      return userAPI.login({ username, password }).then((res: any) => {
        const { data } = res;
        this.token = data.token;
        sessionStorage.setItem("token", data);
      });
    },
    logout() {
      this.token = "";
      sessionStorage.removeItem("token");
      router.push("/login");
    },
  },
});
