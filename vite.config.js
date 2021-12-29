import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import content from "@originjs/vite-plugin-content";
import Markdown from 'vite-plugin-md';
import Pages from "vite-plugin-pages";
import fs from "fs";
// https://vitejs.dev/config/


export default defineConfig({
  plugins: [vue({
    include: [/\.vue$/, /\.md$/], // <--
  }), content(), Pages({
    extensions: ['vue', 'md'],
    onRoutesGenerated(routes) {
      const yaml = require("js-yaml");
      const doc = yaml.load(fs.readFileSync('config.yaml', 'utf8'));
      // 读原routes
      const posts = routes.find((item) => item.path === '/post').children;
      posts.map((item, index) => {
        item.path = doc.activity[index].route;
      });
      console.log(routes.find((item) => item.path === '/post'));
      return routes;
    }
  }),
    Markdown()],
});
