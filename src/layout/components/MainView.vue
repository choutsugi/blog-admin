<template>
  <div class="layout-content-main-fix">
    <RouterView>
      <template #default="{ Component, route }">
        <transition appear mode="out-in" name="zoom-fade">
          <keep-alive :include="keepAliveComponents">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </transition>
      </template>
    </RouterView>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

//TODO: 页面缓存

// const keepAliveComponents = computed(() => asyncRouteStore.keepAliveComponents);

const keepAliveComponents = computed(() => []);
</script>

<style lang="less" scoped>
// zoom-fade
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: transform 0.2s, opacity 0.3s ease-out;
}

.zoom-fade-enter-from {
  opacity: 0;
  transform: scale(0.92);
}

.zoom-fade-leave-to {
  opacity: 0;
  transform: scale(1.06);
}

.layout-content-main-fix {
  margin: 15px;
}
</style>
