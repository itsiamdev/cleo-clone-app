// Extend the Lovable TanStack config while customizing for Vercel
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Override base path for Vercel (root deployment)
    base: "/",
    build: {
      // Custom output directory for Vercel static build
      outDir: "dist/client/client",
      emptyOutDir: true,
    },
  },
});