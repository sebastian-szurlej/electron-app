import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage/HomePage.vue";
import PageOne from "@/pages/PageOne/PageOne.vue";
import PageTwo from "@/pages/PageTwo/PageTwo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/page-one",
      name: "page-one",
      component: PageOne,
    },
    {
      path: "/page-two",
      name: "page-two",
      component: PageTwo,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
