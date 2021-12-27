import { createWebHistory, createRouter } from "vue-router";
import routes from "~pages";


// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: home,
//   },
//   {
//     path: "/tutor/:id",
//     name: "tutor-page",
//     component: tutorPage,
//   },
//   {
//     path: "/post/:id",
//     name: "post-page",
//     component: postPage
//   }
// ];

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
