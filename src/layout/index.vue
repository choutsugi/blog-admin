<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider
      inverted
      :width="220"
      collapse-mode="width"
      :collapsed-width="68"
      show-trigger
      :collapsed="collapsed"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <PageSideBar :collapsed="collapsed" />
    </n-layout-sider>
    <n-layout class="h-full">
      <n-layout-header>头部</n-layout-header>
      <n-layout-content :native-scrollbar="false" position="absolute">
        <PageMainView />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import PageMainView from "@/layout/components/MainView.vue";
import PageSideBar from "@/layout/components/Sidebar/index.vue";
import { ref } from "vue";

const collapsed = ref<boolean>(false);
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
