import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

 const router =  new Router({
  mode:"hash",
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/',
      // component: () =>import('@/components/login.vue')
      redirect:'/login'
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
    },
    {
      path:'/customer',
      name:'customer',
      component: () =>import('@/components/customer.vue')
    },
    {
      path:'/login',
      name:'login',
      component: () =>import('@/components/login.vue')
	},
	{
		path:'/register',
		name:'register',
		component: () =>import('@/components/register.vue')
	  }
  ]
})

router.beforeEach((to,from,next) =>{
	console.log(to)
	console.log(window.location.hash)
	let isLogin = localStorage.login
	if(isLogin){
		next()
	}else{
		if(to.path === '/login') {
			next()
		}else if(to.path === '/register'){
			next()
		}else{
			next('/login')
			alert('请先登录')
		}
	}
})

export default router