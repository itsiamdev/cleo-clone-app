// Vercel-specific Vite configuration
// Builds client-only SPA for static hosting
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    tanstackRouter({
      // Generate route tree for client-side routing
    }),
  ],
  build: {
    // Output to root dist for Vercel
    outDir: "dist",
    emptyOutDir: true,
    // No SSR - pure client build
    ssr: false,
  },
  // Override base path for Vercel root deployment
  base: "/",
});