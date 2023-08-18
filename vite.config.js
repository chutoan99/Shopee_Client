import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    "/api": {
      // target: "http://localhost:8000",
      port: 3000,
      changeOrigin: true,
      secure: false,
    },
  },
  plugins: [react()],

  define: {
    "process.env": {},
  },
});
