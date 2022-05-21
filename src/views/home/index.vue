<template>
  <h1>首页</h1>
  <el-button type="primary">Primary</el-button>
  <button @click="countStore.increment">INC: {{ refCount.num }}</button>
  <div class="block">
    <el-date-picker v-model="value" placeholder="Pick a day" type="date" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import useCountStore from '@/store/modules/useCountStore';

  const countStore = useCountStore();
  const refCount = storeToRefs(countStore);

  const value = ref('');
</script>

<style lang="scss" scoped>
  h1 {
    color: $color;
  }
</style>
