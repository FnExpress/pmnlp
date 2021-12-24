import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

createApp(App).use(router).mount("#app");
