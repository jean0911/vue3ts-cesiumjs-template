import { fileURLToPath, URL } from "node:url";

import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteExternalsPlugin } from "vite-plugin-externals";
import { h, insertHtml } from "vite-plugin-insert-html";
import { viteStaticCopy } from "vite-plugin-static-copy";
import compress from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    viteExternalsPlugin(
      {
        cesium: "Cesium",
      },
      {
        disableInServe: false,
      }
    ),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/cesium/Build/Cesium/Cesium.js",
          dest: "libs/cesium/",
        },
        {
          src: "node_modules/cesium/Build/Cesium/Assets/*",
          dest: "libs/cesium/Assets/",
        },
        {
          src: "node_modules/cesium/Build/Cesium/ThirdParty/*",
          dest: "libs/cesium/ThirdParty/",
        },
        {
          src: "node_modules/cesium/Build/Cesium/Workers/*",
          dest: "libs/cesium/Workers/",
        },
        {
          src: "node_modules/cesium/Build/Cesium/Widgets/*",
          dest: "libs/cesium/Widgets/",
        },
      ],
    }),
    insertHtml({
      head: [
        h("script", {
          src: "libs/cesium/Cesium.js",
        }),
      ],
    }),
    compress({ threshold: 10 * 1024 }), //10KB以下不压缩
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
