import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/vite";
import { routerPlugin } from "@tanstack/router-plugin";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      // TanStack Start configuration
      // This will generate both client and server builds
    }),
    routerPlugin({
      // TanStack Router plugin for generating route trees
      rsc: true,
    }),
  ],
  build: {
    // For Vercel static deployment
    outDir: "dist/client",
    emptyOutDir: true,
  },
  // Vercel environment typically sets NODE_VERSION=20
  define: {
    "import.meta.env.VERCEL": JSON.stringify(true),
  },
});