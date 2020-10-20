import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import Detail from '@/views/Detail.vue'
import Categories from '@/views/Categories.vue'
import Random from '@/views/Random.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/cat', 
    name: 'Categories',
    component: Categories
  },
  {
    path: '/random',
    name: 'Random', 
    component: Random
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes, 
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

export default router
