import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import regist from '@/views/regist'
import home from '@/views/home'
import item from '@/views/item'
import itemAdd from '@/views/itemAdd'
import itemAmend from '@/views/itemAmend'
import content from '@/views/content'
import pie from '@/views/pie'
import bar from '@/views/bar'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '',
    name: 'home',
    component: home,
    redirect: '/home/index',
    children: [{
      path: '/home/index',
      name: 'home',
      component: home
    },
    {
      path: '/home/item',
      name: 'item',
      component: item
    },
    {
      path: '/home/itemAdd',
      name: 'itemAdd',
      component: itemAdd
    },
    {
      path: '/home/itemAmend',
      name: 'itemAmend',
      component: itemAmend
    },
    {
      path: '/home/content',
      name: 'content',
      component: content
    },
    {
      path: '/home/pie',
      name: 'pie',
      component: pie
    },
    {
      path: '/home/bar',
      name: 'bar',
      component: bar
    }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/regist',
    name: 'regist',
    component: regist
  }
  ]
})
