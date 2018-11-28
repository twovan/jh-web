import Vue from 'vue'
import Router from 'vue-router'
import PageOne from '@/pages/PageOne'
import PageTwo from '@/pages/PageTwo'
import PageThree from '@/pages/PageThree'
import PageFour from '@/pages/PageFour'
import PageFive from '@/pages/PageFive'
import PageSix from '@/pages/PageSix'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    name: 'page1',
    path: '/page1',
    component: PageOne,
    redirect: '/'
  },
  {
    name: 'page2',
    path: '/page2',
    component: PageTwo
  },
  {
    name: 'page3',
    path: '/page3',
    component: PageThree
  },
  {
    name: 'page4',
    path: '/page4',
    component: PageFour
  },
  {
    name: 'page5',
    path: '/page5',
    component: PageFive
  },
  {
    name: 'page6',
    path: '/page6',
    component: PageSix
  },
  {
    name: 'index',
    path: '/',
    component: PageOne
  }]
})
