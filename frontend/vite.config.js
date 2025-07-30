import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 Replace with your actual IP
    port: 5173,
    strictPort: true, // optional: throws error if port is in use
  },
});
