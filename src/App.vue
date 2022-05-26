<template>
  <naive-provider>
    <router-view />
  </naive-provider>
</template>

<script setup lang="ts">
import NaiveProvider from "@/components/NaiveProvider/index.vue";
</script>

<style lang="less">
@import "styles/index.less";
</style>
