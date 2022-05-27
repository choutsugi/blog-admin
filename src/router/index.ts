import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";
import { createRouterGuards } from "@/router/guards";
import Layout from "@/layout/index.vue";
import type { IRouteRecord } from "@/types/route";

export const routes: IRouteRecord[] = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: { title: "控制台" },
      },
    ],
  },
  {
    path: "/article",
    component: Layout,
    meta: { title: "文章管理" },
    children: [
      {
        path: "list",
        component: () => import("@/views/article/list/index.vue"),
        meta: { title: "文章列表" },
      },
      {
        path: "post",
        component: () => import("@/views/article/post/index.vue"),
        meta: { title: "发布文章" },
      },
    ],
  },
  {
    path: "/category",
    component: Layout,
    meta: { title: "分类管理" },
    children: [
      {
        path: "",
        component: () => import("@/views/category/index.vue"),
      },
    ],
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
