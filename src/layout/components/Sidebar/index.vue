<template>
  <n-menu
    :collapsed="appStore.collapsed"
    :collapsed-icon-size="20"
    :collapsed-width="68"
    :indent="24"
    :options="menus"
    :value="activeKey"
    inverted
    @update:value="handleUpdateValue"
  />
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/modules/app";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import type { MenuOption } from "naive-ui";
import { renderIcon } from "@/utils/icon";
import { Bookshelf, CategoryManagement, Dashboard, TagOne } from "@icon-park/vue-next";

const appStore = useAppStore();

const router = useRouter();
const currentRoute = useRoute(); // 当前路由
const activeKey = ref(currentRoute.fullPath);

watch(
  () => currentRoute.fullPath,
  () => {
    activeKey.value = currentRoute.fullPath;
  }
);

function handleUpdateValue(key: string) {
  activeKey.value = key;
  router.push(key);
}

const menus: MenuOption[] = [
  {
    label: "控制台",
    key: "/dashboard",
    icon: renderIcon(Dashboard),
  },
  {
    label: "文章管理",
    key: "/article",
    icon: renderIcon(Bookshelf),

    children: [
      {
        label: "文章列表",
        key: "/article/list",
      },
      {
        label: "发布文章",
        key: "/article/post",
      },
    ],
  },
  {
    label: "分类管理",
    key: "/category",
    icon: renderIcon(CategoryManagement),
  },
  {
    label: "标签管理",
    key: "/tag",
    icon: renderIcon(TagOne),
  },
];
</script>

<style lang="less" scoped></style>
