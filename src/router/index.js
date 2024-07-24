import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store/index";
import HomePage from "@/views/home/HomePage.vue";
import SigninPage from "@/views/auth/SigninPage.vue";
import SignupPage from "@/views/auth/SignupPage.vue";
import ForgotPage from "@/views/auth/ForgotPage.vue"
import PostPage from "@/views/post/PostPage.vue"
import NotFound from '@/views/404/NotFound.vue'
import NotificationPage from "@/views/account/NotificationPage.vue";
import LayoutPage from "@/views/learn/LayoutPage.vue";
import AboutUs from "@/views/learn/AboutUs.vue";
import ServicePage from "@/views/learn/ServicePage.vue";
import MessageLayout from "@/views/account/MessageLayout.vue";
import AddPost from "@/views/ads/AddPost.vue";
import RegisterPage from "@/views/services/RegisterPage.vue"
import ManageService from "@/views/services/ManageService.vue";
import LawyerProfile from "@/views/services/lawyer/LawyerProfile.vue";
import RealEstateProfile from "@/views/services/RealEstate/RealEstateProfile.vue";
import TrainerProfile from "@/views/services/Trainer/TrainerProfile.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: { requiresAuth: false }
  },
  {
    path: "/signin",
    name: "sign in",
    component: SigninPage,
  },
  {
    path: "/signup",
    name: "sign up",
    component: SignupPage,
  },
  {
    path: "/forgot-password",
    name: "forgot password",
    component: ForgotPage,
  },
  {
    path: "/forgot-username",
    name: "forgot username",
    component: ForgotPage,
  },
  {
    path: "/post/:id",
    name: "post",
    component: PostPage,
    meta: { requiresAuth: false }
  },
  {
    path: "/account/notification",
    name: "notification",
    component: NotificationPage,
  },
  {
    path: "/learn",
    name: "learn",
    component: LayoutPage,
    redirect: "/learn/about",
    children: [
      {
        path: "about",
        name: "about",
        component: AboutUs,
      },
      {
        path: "service",
        name: "service",
        component: ServicePage,
      }
    ]
  },
  {
    path: "/messages",
    name: "messages",
    component: MessageLayout,
    children: [
      {
        path: "chat/:id",
        name: "chat",
        component: AboutUs,
      },
      {
        path: "service",
        name: "service",
        component: ServicePage,
      }
    ]
  },
  {
    path: "/ads/add",
    name: "ads",
    component: AddPost,
  },
  {
    path: "/services",
    name: "services",
    children: [
      {
        path: "register",
        name: "service register",
        component: RegisterPage
      },
      {
        path: ':id/explore',
        component:ManageService
      },
      {
        path: 'lawyer/profile/:id',
        component:LawyerProfile
      },
      {
        path: 'realEstate/profile/:id',
        component:RealEstateProfile
      },
      {
        path: 'trainer/profile/:id',
        component:TrainerProfile
      },
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
  // {
  //   path: "/about",
  //   name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutPage.vue"),
  // },
];

const router = createRouter({
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  },
  history: createWebHashHistory(),
  routes,
});

// const res = store.getters.getLoggedIn()
// console.log(res,'router res')
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isLoggedIn;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'sign in' })
    } else {
      store.dispatch('GetUserInfo')
      //reload vuex actions which will trigger and update state
      next()
    }
  }
  else {
    next()
  }
})

export default router;
