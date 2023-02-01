import { fileURLToPath, URL } from "node:url";
import { rmSync } from "node:fs";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import electron from "vite-plugin-electron";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  rmSync("dist-electron", { recursive: true, force: true });

  const isBuild = command === "build";

  return {
    plugins: [
      electron([
        {
          // Main-Process entry file of the Electron App.
          entry: "src-electron/main/index.js",
          onstart(options) {
            options.startup();
          },
          vite: {
            build: {
              minify: isBuild,
              outDir: "dist-electron/main",
              rollupOptions: {
                external: Object.keys(
                  "dependencies" in pkg ? pkg.dependencies : {}
                ),
              },
            },
          },
        },
        {
          entry: "src-electron/preload/index.js",
          onstart(options) {
            // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
            // instead of restarting the entire Electron App.
            options.reload();
          },
          vite: {
            build: {
              minify: isBuild,
              outDir: "dist-electron/preload",
              rollupOptions: {
                external: Object.keys(
                  "dependencies" in pkg ? pkg.dependencies : {}
                ),
              },
            },
          },
        },
      ]),
      vue({
        template: { transformAssetUrls },
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      vuetify({
        autoImport: true,
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src-ui", import.meta.url)),
      },
    },
    css: {
      devSourcemap: true,
    },
  };
});
