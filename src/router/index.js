import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MembersView from "../views/MembersView.vue";
import LoginView from "../views/LoginView.vue";
import Store from "../store/index";
import Auth0Callback from "../views/Auth0Callback.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { requiresAuth: true },
  },
  {
    path: "/members",
    name: "members",
    component: MembersView,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/auth0callback",
    name: "auth0callback",
    component: Auth0Callback,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  // Allow finishing callback url for logging in
  if (to.matched.some((record) => record.path == "/auth0callback")) {
    console.log("router.beforeEach found /auth0callback url");
    Store.dispatch("auth0HandleAuthentication");
    next(false);
  }
  // check if user is logged in (start assuming the user is not logged in = false)
  let routerAuthCheck = false;
  // Verify all the proper access variables are present for proper authorization
  if (
    localStorage.getItem("access_token") &&
    localStorage.getItem("id_token") &&
    localStorage.getItem("expires_at")
  ) {
    console.log("found local storage tokens");
    // Check whether the current time is past the Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    // set localAuthTokenCheck true if unexpired / false if expired
    routerAuthCheck = new Date().getTime() < expiresAt;
  }

  // set global ui understanding of authentication
  Store.commit("setUserIsAuthenticated", routerAuthCheck);

  // check if the route to be accessed requires authorizaton
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if user is Authenticated
    if (routerAuthCheck) {
      // user is Authenticated - allow access
      next();
    } else {
      //user not authenticated
      if (router.currentRoute.fullPath !== "/login") router.replace("/login");
    }
  }
  //load page
  else {
    // Store.commit("setUserIsAuthenticated", routerAuthCheck);
    next();
  }
});

export default router;
