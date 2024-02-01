import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/frontend-mentor-dictionary-web-app/",
  plugins: [react()],
});
