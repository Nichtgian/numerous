import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Store from "../store/index";

Vue.use(VueRouter);

function beforeEnterCheck(to, from, next) {
  if(Store.state.authenticated == true) {
    next();
  } else {
    next("/login");
  }
}

const routes = [
  {
    path: "*",
    name: "notFound",
    component: () => import("../views/NotFound"),
  },
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: beforeEnterCheck
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register")
  }
];

const router = new VueRouter({
  routes
});

export default router;
