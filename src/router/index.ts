import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/report",
    name: "report",
    component: () => import(/* webpackChunkName: "ReportView" */ "../views/ReportView/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(""),
  routes,
});

export default router;
