<template>
  <n-config-provider>
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import NaiveProvider from "@/components/NaiveProvider/index.vue";
</script>

<style lang="less">
//@import "styles/index.less";
</style>
