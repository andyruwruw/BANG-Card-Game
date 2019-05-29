import Vue from 'vue'
import Router from 'vue-router'

import BangTitle from './views/Menu/BangTitle.vue'

import Create from './views/Game/Create.vue'

import Lobby from './views/Game/Lobby.vue'
import Screen from './views/Game/Screen.vue'
import Hand from './views/Game/Hand.vue'

import Settings from './views/Settings.vue'

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
      path: '/lobby/:GameId',
      name: 'lobby',
      component: Lobby
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
  ]
})
