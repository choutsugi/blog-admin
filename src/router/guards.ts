import type { Router } from "vue-router";

export const createRouterGuards = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("Access-Token");

    if (to.path === "/login") {
      if (token) {
        next("/");
        return;
      } else {
        next();
        return;
      }
    }

    if (token) {
      next();
    } else {
      next("/login");
    }
  });
};
