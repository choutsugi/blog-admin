import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Unocss from "unocss/vite";
import { presetAttributify, presetIcons, presetUno } from "unocss";
import prismjs from "vite-plugin-prismjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
    prismjs({
      languages: "all",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
        additionalData: `@import "@/styles/var.less";`,
      },
    },
  },
  // server: {
  //   https: false,
  //   proxy: {
  //     "/api": {
  //       target: "https://lianghj.top:8888/api/private/v1/",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, "/api/v1"),
  //     },
  //   },
  // },
});
