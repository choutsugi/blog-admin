<template>
  <div class="login-container justify-center items-center">
    <div class="title-container relative">
      <div class="title text-3xl font-mono cursor-pointer select-none">柯特の小窝</div>
    </div>
    <n-form ref="formRef" :model="formValue" :rules="rules" class="w-1/4 max-w-xs min-w-max">
      <n-form-item path="username">
        <n-input v-model:value="formValue.username" placeholder="账户"></n-input>
      </n-form-item>
      <n-form-item path="password">
        <n-input v-model:value="formValue.password" placeholder="密码" type="password" />
      </n-form-item>
      <n-form-item>
        <n-button class="w-full" :loading="loadingRef" type="primary" attr-type="button" @click="handleLogin"
          >登录
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import type { FormInst, FormRules } from "naive-ui";
import { NButton, useMessage } from "naive-ui";
import { ref } from "vue";
import { login } from "@/api/login";
import router from "@/router";
import { useAuthStore } from "@/store/modules/auth";

interface ModelType {
  username: string;
  password: string;
}

const formRef = ref<FormInst | null>(null);
const formValue = ref<ModelType>({
  username: "admin",
  password: "dangerous",
});
const rules: FormRules = {
  username: [
    {
      required: true,
      message: "请输入账号",
      trigger: ["input", "blur"],
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: ["input", "blur"],
    },
  ],
};
const loadingRef = ref(false);
const message = useMessage();
const authStore = useAuthStore();
const handleLogin = () => {
  formRef.value?.validate(async (errors: any) => {
    if (!errors) {
      loadingRef.value = true;
      await login(formValue.value)
        .then((data: any) => {
          loadingRef.value = false;
          message.success("登录成功");
          authStore.setToken(data.access_token);
          router.push("/");
        })
        .catch(() => {
          loadingRef.value = false;
        });
    } else {
      message.error("请输入账号和密码");
      return false;
    }
  });
};
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
}

@media (min-width: 768px) {
  .login-container {
    @apply w-full h-full absolute;
    background: url("./src/assets/svg/login-bg.svg") no-repeat;
    background-size: cover;
  }
}
</style>
