import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Store from "./store";

Vue.use(VueRouter);
const viewPath = "../views";

function beforeEnterCheck(to, from, next) {
  if (Store.state.authenticated) {
    next();
  } else {
    next("/login");
  }
}

const routes = [
  {
    path: "*",
    name: "notFound",
    component: () => import(`${viewPath}/NotFound`),
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
    component: () => import(`${viewPath}/Login`)
  },
  {
    path: "/register",
    name: "register",
    component: () => import(`${viewPath}/Register`)
  }
];

export default new VueRouter({
  routes
});

