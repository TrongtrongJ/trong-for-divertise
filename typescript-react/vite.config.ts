import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginFonts } from "vite-plugin-fonts";
import VitePluginIcons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [
          {
            name: "Sarabun",
            styles: "wght@400;500;600;700;800;900",
          },
        ],
      },
    }),
    VitePluginIcons({
      compiler: "jsx",
      jsx: "react",
      autoInstall: true,
    }),
  ],
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
