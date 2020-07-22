import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: resolve => require(['@/views/Home'],resolve)
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('@/views/Login')
  },
  {
    path:'/',
    redirect:'/home'
  },
]

const router = new VueRouter({
  routes
})

export default router
