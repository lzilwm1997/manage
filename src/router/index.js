import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/home.vue'
import MainIndex from '../views/mainIndex.vue'

Vue.use(VueRouter)

// 解决router跳转到相同链接报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  //   // 路由懒加载
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  // },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/mainIndex',
    children: [
      {
        path: '/mainIndex',
        component: MainIndex
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') return next() //eslint-disable-line
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
