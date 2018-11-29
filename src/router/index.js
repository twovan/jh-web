import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import AntiAging from '@/pages/AntiAging'
import Science from '@/pages/Science'
import Cooperation from '@/pages/Cooperation'
import Client from '@/pages/Client'
import ContactUs from '@/pages/ContactUs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    name: 'home',
    path: '/home',
    component: Home,
    redirect: '/'
  },
  {
    name: 'client',
    path: '/client',
    component: Client
  },
  {
    name: 'antiaging',
    path: '/antiaging',
    component: AntiAging
  },
  {
    name: 'science',
    path: '/science',
    component: Science
  },
  {
    name: 'cooperation',
    path: '/cooperation',
    component: Cooperation
  },
  {
    name: 'contactus',
    path: '/contactus',
    component: ContactUs
  },
  {
    name: 'index',
    path: '/',
    component: Home
  }]
})
