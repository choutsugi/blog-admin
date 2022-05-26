<template>
  <div class="login-container justify-center items-center">
    <div class="title-container relative">
      <div class="title text-3xl font-mono cursor-default animate-bounce">柯特の小窝</div>
    </div>
    <el-form ref="formRef" class="w-1/4 max-w-xs min-w-max" :model="form" :rules="rules">
      <el-form-item prop="account">
        <el-input v-model="form.username" :prefix-icon="User" placeholder="账户"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" :prefix-icon="Key" show-password placeholder="密码" />
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" type="primary" @click="handleLogin">登录</el-button>
        <n-button type="primary"> Click</n-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import { ref } from "vue";
import { Key, User } from "@element-plus/icons-vue";
import { login } from "@/api/login";

const form = ref({
  username: "admin",
  password: "dangerous",
});

const rules = ref({
  username: [
    {
      required: true,
      message: "请输入账户",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
});

const formRef = ref();
const handleLogin = () => {
  formRef.value.validate(async (valid: boolean) => {
    if (valid) {
      await login(form.value);
    } else {
      alert("error");
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
    background: url("@/assets/svg/login-bg.svg") no-repeat;
    background-size: cover;
  }
}
</style>
