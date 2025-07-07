import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Deployment_FE_PemrogramanIII/",
  plugins: [react()],
});
