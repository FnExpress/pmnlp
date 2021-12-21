import { createWebHistory, createRouter } from "vue-router";
import home from "./views/Home.vue";
import pm from "./views/tutor/pm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/pm",
    name: "pm",
    component: pm,
  },
];

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
      };
    }
  },
});

export default router;
