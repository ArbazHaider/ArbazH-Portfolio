import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/ArbazH-Portfolio/", // EXACT repo name, including slashes
  plugins: [react(), tailwindcss()],
});