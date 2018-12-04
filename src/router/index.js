import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Home'
import AntiAging from '@/pages/AntiAging'
import Science from '@/pages/Science'
import Cooperation from '@/pages/Cooperation'
import Client from '@/pages/Client'
import ContactUs from '@/pages/ContactUs'

// 手机端
import MIndex from '@/mpages/Home'
import MAntiAging from '@/mpages/AntiAging'
import MScience from '@/mpages/Science'
import MCooperation from '@/mpages/Cooperation'
import MClient from '@/mpages/Client'
import MContactUs from '@/mpages/ContactUs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    name: 'Home',
    path: '/home',
    component: Index,
    redirect: '/'
  },
  {
    name: 'Client',
    path: '/client',
    component: Client
  },
  {
    name: 'Antiaging',
    path: '/antiaging',
    component: AntiAging
  },
  {
    name: 'Science',
    path: '/science',
    component: Science
  },
  {
    name: 'Cooperation',
    path: '/cooperation',
    component: Cooperation
  },
  {
    name: 'Contactus',
    path: '/contactus',
    component: ContactUs
  },
  {
    name: 'Index',
    path: '/pc_index',
    component: Index
  },
  {
    name: 'MIndex',
    path: '/m_index', // 手机端首页
    component: MIndex
  },

  {
    name: 'MAntiAging',
    path: '/m_antiaging', // 手机端
    component: MAntiAging
  },
  {
    name: 'MScience',
    path: '/m_science', // 手机端
    component: MScience
  },
  {
    name: 'MCooperation',
    path: '/m_cooperation', // 手机端
    component: MCooperation
  },
  {
    name: 'MClient',
    path: '/m_client', // 手机端
    component: MClient
  },
  {
    name: 'MContactUs',
    path: '/m_contactUs', // 手机端
    component: MContactUs
  }
  ]
})
