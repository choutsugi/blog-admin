<template>
  <el-config-provider :z-index="3000">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts"></script>

<style lang="less">
@import "styles/index.less";
</style>
