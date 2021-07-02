import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index.vue'),
    children: [
      
    ]

  },
  {
    path: '/info',
    name: 'Infomation',
    component: ()=>import('../views/comBar/infomation/toinfo.vue'),
  },
  {
    path: '/bill',
    name: 'Bill',
    component: ()=>import('../views/comBar/bill/bill.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: ()=>import('../views/comBar/search/search.vue'),
  },
  {
    path:'/test',
    name: 'test',
    component: () => import('../views/test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
