import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
  // server: {
  //   proxy: {
  //     '/admin': {
  //       // 例如：/admin/login => http://itsukirt.com/api/admin/login
  //       //代理的目标地址
  //       target: 'https://itsukirt.com/api',
  //       changeOrigin: true,
  //       //路径重写：删除多余的api
  //       // rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
});
