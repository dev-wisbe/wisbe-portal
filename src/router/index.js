import Vue from "vue";
import VueRouter from "vue-router";
import Portal from "../views/Portal.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Portal",
    component: Portal,
  },
  {
    path: "/register",
    name: "Register",
    component: import("../views/Register.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
