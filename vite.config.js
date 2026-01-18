import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // Use repo sub-path only for GitHub Pages builds; keep dev server at root.
  base: mode === "production" ? "/3d-portfolio/" : "/",
}));
