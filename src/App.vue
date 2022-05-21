<template>
  <el-config-provider :locale="locale">
    <!-- 路由的渲染出口 -->
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ElConfigProvider } from 'element-plus';

  import zhCn from 'element-plus/lib/locale/lang/zh-cn';

  export default defineComponent({
    components: {
      ElConfigProvider,
    },
    setup() {
      return {
        locale: zhCn,
        zIndex: 3000,
        size: 'small',
      };
    },
  });
</script>

<style lang="scss"></style>
