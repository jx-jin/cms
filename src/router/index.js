import Vue from 'vue'
import VueRouter from 'vue-router'
import shopManage from "./shopManage"
import userManage from "./userManage"
import Login from "./login"
import Home from "./home"
import store from "@store"
Vue.use(VueRouter)

const routes = [
  {
    path: "",
    component: _ => import("@pages/layout"),
    name: "layout",
    meta:{
      breadcrumb:[
          {
              path:"/home",
              text:"首页"
          }
      ]
  },
    children: [
      Home,
      shopManage,
      userManage,
    ]
  },
  Login
]

const router = new VueRouter({
  mode: "hash",
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    next()
  } else {
    if (store.state.authToken) {
      next()
    } else {
      next("/login")
    }
  }
})

export default router
