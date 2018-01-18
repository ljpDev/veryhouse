import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexPage from '../views/index'
import detailPage from '../views/detail'
import registerPage from '../views/register'
import loginPage from '../views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/index',
      name: 'index',
      component: indexPage
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detailPage
    },
    {
      path: '/register',
      name: 'register',
      component: registerPage
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
