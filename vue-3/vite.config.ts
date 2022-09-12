import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePluginComponents from "unplugin-vue-components/vite";
import { VitePluginFonts } from "vite-plugin-fonts";
import VitePluginIcons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    vue(),
    VitePluginComponents({ dts: true }),
    VitePluginFonts({
      google: {
        families: [
          {
            name: "Prompt",
            styles: "wght@400;500;600;700;800;900",
          },
          {
            name: "Sarabun",
            styles: "wght@400;500;600;700;800;900",
          },
          {
            name: "Roboto",
            styles: "wght@300;400;500;600;700",
          },
        ],
      },
    }),
    VitePluginIcons({
      autoInstall: true,
    }),
  ],
  optimizeDeps: {
    include: [
      "vue",
      "@vueuse/core",
      "@vueuse/head",
      "unplugin-vue-components",
      "vite-plugin-fonts",
      "unplugin-icons",
    ],
  },
  resolve: {
    alias: [
      {
        find: "~",
        replacement: `/src/assets`,
      },
      {
        find: "@src",
        replacement: `/src`,
      },
      {
        find: "@data",
        replacement: `/src/data`,
      },
      {
        find: "@store",
        replacement: `/src/store`,
      },
      {
        find: "@composables",
        replacement: `/src/composables`,
      },
      {
        find: "@utils",
        replacement: `/src/utils`,
      },
      {
        find: "@components",
        replacement: `/src/components`,
      },
    ],
  },
});
