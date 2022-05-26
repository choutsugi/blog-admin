<template>
  <h1 class="text-2xl text-emerald-600 font-bold">主页</h1>
  <el-button class="justify-center" @click="handleClick">Click!</el-button>
</template>

<script setup lang="ts">
import Request from "@/service";

const handleClick = () => {
  Request.request({
    url: "/home/hasaki",
    method: "GET",
  });
};
</script>

<style scoped></style>
