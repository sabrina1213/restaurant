import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',

    component: () => import('../views/home/index.vue'),
    beforeEnter:(to ,from ,next)=>{
        if( sessionStorage.getItem('isadmin')=='true'){
          next();
        }
        else{
          alert('您还未登录');
          router.push('/login') ;
        }
    },
    children: [
      {
        path: 'manageMenu',
        name:'manageMenu',
        component: () => import('../views/home/content/manageMenu/index.vue')
      },
      {
        path: 'QRcode',
        name:'QRcode',
        component: ()=> import('../views/home/content/QRcode/index.vue')
      },
      {
        path: 'manageBill',
        name:'manageBill',
        component: ()=> import('../views/home/content/manageBill/index.vue')
      }
    ]

  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
