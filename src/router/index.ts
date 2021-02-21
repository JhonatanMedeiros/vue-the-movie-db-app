import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Checkout from "../views/CheckoutPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
