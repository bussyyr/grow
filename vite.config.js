// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/grow/", // 👈 GitHub repo adın grow ise bu doğru
});
