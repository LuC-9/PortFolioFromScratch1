import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "all",
      "ad7aadd0-cb3f-4b1f-82d5-b4cc4455c6bc-00-j03q294c8hru.janeway.replit.dev",
    ],
  },
});
