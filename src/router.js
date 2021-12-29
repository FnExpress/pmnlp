import { createWebHistory, createRouter } from "vue-router";
import routes from "~pages";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 20,
      };
    } else {
      return {
        top: 0,
        behavior: "instant",
      };
    }
  },
});

export default router;
