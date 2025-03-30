import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/movie-app/", // ✅ GitHub repo 이름과 똑같이!
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("development"),
  },
  server: {
    port: 5173,
    open: true,
  },
});
