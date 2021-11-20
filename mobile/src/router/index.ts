import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect:'/menu/detial',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('../views/shopBody.vue'),
        children: [
          {
            path: 'detial',
            name: 'Detial',
            component: () => import('../views/shopBodyDetial.vue'),
          },
          {
            path: 'search',
            name: 'Search',
            component: () => import('../views/shopBodySearch.vue'),
          },
          {

            path: 'bill',
            name: 'Bill',
            component: () => import('../views/shopBill.vue')
          }
        ]
      },
      
    ]

  },

  // {
  //   path: '/info',
  //   name: 'Infomation',
  //   component: ()=>import('../views/comBar/infomation/toinfo.vue'),
  // },
  // {
  //   path: '/bill',
  //   name: 'Bill',
  //   component: ()=>import('../views/comBar/bill/bill.vue'),
  // },
  // {
  //   path: '/search',
  //   name: 'Search',
  //   component: ()=>import('../views/comBar/search/search.vue'),
  // },

]
// history: createWebHistory(process.env.BASE_URL),

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
})

export default router
