import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages publishes this repository below /pp-website/.
  base: process.env.GITHUB_ACTIONS ? "/pp-website/" : "/",
});