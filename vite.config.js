import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import content from "@originjs/vite-plugin-content";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), content()],
});
