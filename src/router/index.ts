import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReportView from "../views/ReportView/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/report",
    name: "report",
    component: ReportView,
  },
];

const router = createRouter({
  history: createWebHashHistory(""),
  routes,
});

export default router;
