import { defineConfig, mergeConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackViteConfig } from "@tanstack/vite-config";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [
    TanStackRouterVite({
      target: "react",
      routesDirectory: "./app/routes",
      generatedRouteTree: "./app/routeTree.gen.ts",
      routeFileIgnorePrefix: "-", // ignore files that start with "-"
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
    },
  },
});

export default mergeConfig(
  config,
  tanstackViteConfig({
    entry: "./app/index.ts",
    srcDir: "./app",
  })
);
