import Vue from 'vue'
import Router from 'vue-router'

import BangTitle from './views/Menu/BangTitle.vue'

import Create from './views/Game/Create.vue'

import Screen from './views/Game/Screen.vue'

import Settings from './views/Settings.vue'

import Small from './views/Menu/Small.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'bang',
      component: BangTitle
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/screen/:GameId',
      name: 'screen',
      component: Screen
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/small',
      name: 'small',
      component: Small
    },
  ]
})
