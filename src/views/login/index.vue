<template>
  <h1>登录页</h1>
</template>

<script lang="ts" setup>
import { getUserInfo } from "@/api/user";
import { onMounted, ref } from "vue";
import type { ILoginResponse } from "@/api/types/user";

const uid = ref<ILoginResponse["uid"]>(0);

//组件挂载后调用
onMounted(() => {
  getUserInfo().then((res) => {
    //res: axios包装的响应对象
    uid.value = res.uid;
    window.$message.error("登录错误");
    console.log(uid);
  });
});
</script>

<style lang="scss" scoped></style>
