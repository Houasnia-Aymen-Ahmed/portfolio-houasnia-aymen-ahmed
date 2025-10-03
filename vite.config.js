import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Removed GitHub Pages base path for Vercel deployment
  build: {
    // Optimize images and assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    rollupOptions: {
      output: {
        // Optimize chunk splitting for better caching
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
          icons: [
            "@fortawesome/react-fontawesome",
            "@fortawesome/free-solid-svg-icons",
          ],
        },
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
});
