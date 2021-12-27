import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import content from "@originjs/vite-plugin-content";
import Markdown from 'vite-plugin-md';
import Pages from "vite-plugin-pages";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include: [/\.vue$/, /\.md$/], // <--
  }), content(), Pages({
    extensions: ['vue', 'md'],
  }),
    Markdown()],
});
