import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '登录页',
      component: () => import('@/views/Login')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
