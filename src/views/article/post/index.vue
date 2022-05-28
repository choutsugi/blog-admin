<template>
  <div>
    <button
      class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer"
    >
      文章发布
    </button>
    <Markdown />
  </div>
</template>

<script lang="ts" setup>
import Markdown from "@/components/Markdown/index.vue";
</script>

<style lang="less" scoped></style>
