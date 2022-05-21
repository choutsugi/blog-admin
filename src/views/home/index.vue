<template>
  <h1>首页</h1>
  <button @click="countStore.increment">INC: {{ refCount.num }}</button>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useCountStore from "@/store/modules/useCountStore";

const countStore = useCountStore();
const refCount = storeToRefs(countStore);
</script>

<style lang="scss" scoped>
h1 {
  color: $color;
}
</style>
