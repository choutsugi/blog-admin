<template>
  <div class="flex flex-row justify-between items-center h-full px-3">
    <div class="flex">
      <n-icon class="cursor-pointer" size="20" @click="appStore.switchCollapsed">
        <MenuUnfold v-if="appStore.collapsed" />
        <MenuFold v-else />
      </n-icon>
    </div>
    <div class="ml-auto mr-6">
      <div class="cursor-pointer">
        <n-dropdown :options="avatarOptions" trigger="hover" @select="avatarSelect">
          <n-avatar round> KIRT </n-avatar>
        </n-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MenuFold, MenuUnfold } from "@icon-park/vue-next";
import { useAppStore } from "@/store/modules/app";
import { useDialog, useMessage } from "naive-ui";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/modules/auth";

const appStore = useAppStore();
const authStore = useAuthStore();
const router = useRouter();

const dialog = useDialog();
const message = useMessage();

const avatarOptions = [
  {
    label: "登出",
    key: "logout",
  },
];

const avatarSelect = (key: string) => {
  switch (key) {
    case "logout":
      logout();
      break;
    default:
      break;
  }
};

const logout = () => {
  dialog.info({
    title: "登出",
    content: "确认登出？",
    positiveText: "确认",
    negativeText: "取消",
    onPositiveClick: async () => {
      try {
        message.success("模拟登出成功");
        // await router.push("/login");
        authStore.removeToken();
        await router.replace({
          path: "/login",
        });
      } catch (e) {
        console.log(e);
      }
    },
  });
};
</script>

<style lang="less" scoped></style>
