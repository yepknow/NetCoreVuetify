import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Counter from "@/views/Counter.vue";
import FetchData from "@/views/FetchData.vue";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter
  },
  {
    path: "/fetch-data/:position?",
    name: "FetchData",
    component: FetchData
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
