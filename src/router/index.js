import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      meta: { requiresAuth: true }, // 需要登录才能访问
      component: () => import('../pages/main.vue'),
      children: [
        {
          path: '',
          redirect: 'home',
          meta: { requiresAuth: true },
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('../pages/home.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'collect',
          name: 'collect',
          component: () => import('../pages/collect.vue'),
          meta: { requiresAuth: true },
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue')
    },
  ]
})