import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/error",
    name: "error",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Error.vue")
  },
  {
    path: "/product-edition",
    name: "ProductEdition",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductEdition.vue")
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductDetail.vue")
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "about" */ "../views/404.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
