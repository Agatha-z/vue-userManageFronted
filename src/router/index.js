import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/',
      name:'customer',
      component: () =>import('@/components/customer.vue')
    },
    {
      path:'/about',
      name:'about',
      component: () =>import('@/components/about.vue')
    },
    {
      path:'/add',
      name:'add',
      component: () =>import('@/components/add.vue')
    },
    {
      path:'/customer/:id',
      name:'customerDetail',
      component: () =>import('@/components/customerDetail.vue')
    },
    {
      path:'/edit/:id',
      name:'edit',
      component: () =>import('@/components/edit.vue')
    }
  ]
})
