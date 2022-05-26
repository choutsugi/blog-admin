import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";
import { createRouterGuards } from "@/router/guards";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes: routes, // 路由规则
});

export default router;

export const setupRouter = (app: App<Element>) => {
  app.use(router);
  createRouterGuards(router);
};
