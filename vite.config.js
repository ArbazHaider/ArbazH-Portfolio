import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "/ArbazH-Portfolio/",
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/models/*", // Source folder for .glb files
          dest: "assets/models",      // Destination in the dist/ folder
        },
      ],
    }),
  ],
});
