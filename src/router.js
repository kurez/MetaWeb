import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Homepage from "./views/Homepage.vue";
import About from "./views/About.vue";
import Token from "./views/Tokenpage.vue";
import Whitepaper from "./views/Whitepaper.vue";
// import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  hash: false,
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "homepage",
      components: {
        header: AppHeader,
        default: Homepage,
        footer: AppFooter
      }
    },
    {
      path: "/metawild",
      name: "about",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: "/tokenomics",
      name: "token",
      components: {
        header: AppHeader,
        default: Token,
        footer: AppFooter
      }
    },
    {
      path: "/whitepaper",
      name: "whitepaper",
      components: {
        header: AppHeader,
        default: Whitepaper,
        footer: AppFooter
      }
    },
    // {
    //   path: "/profile",
    //   name: "profile",
    //   components: {
    //     header: AppHeader,
    //     default: Profile,
    //     footer: AppFooter
    //   }
    // }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
