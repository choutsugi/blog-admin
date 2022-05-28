<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider
      :collapsed="appStore.collapsed"
      :collapsed-width="68"
      :width="220"
      collapse-mode="width"
      inverted
      show-trigger
      @collapse="appStore.setCollapsed(true)"
      @expand="appStore.setCollapsed(false)"
    >
      <PageSideBar />
    </n-layout-sider>
    <n-layout class="h-full">
      <n-layout-header>
        <PageHeader />
      </n-layout-header>
      <n-layout-content :native-scrollbar="false" position="absolute">
        <PageMainView />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import PageMainView from "@/layout/components/MainView.vue";
import PageSideBar from "@/layout/components/Sidebar/index.vue";
import PageHeader from "@/layout/components/Header/index.vue";
import { useAppStore } from "@/store/modules/app";

const appStore = useAppStore();
</script>

<style scoped>
.n-layout-header {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
}

.n-layout-content {
  top: 60px;
  height: calc(100vh - 75px);
}
</style>
