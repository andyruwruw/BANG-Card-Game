import Vue from 'vue'
import Router from 'vue-router'
import TitleScreen from './views/Menu/TitleScreen.vue'
import MainMenu from './views/Menu/MainMenu.vue'

import Lobby from './views/Game/Lobby.vue'
import Match from './views/Game/Match.vue'
import Spectate from './views/Game/Spectate.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'titlescreen',
      component: TitleScreen
    },
    {
      path: '/menu',
      name: 'menu',
      component: MainMenu
    },
    {
      path: '/lobby/:GameId',
      name: 'lobby',
      component: Lobby
    },
    {
      path: '/match/:GameId',
      name: 'match',
      component: Match
    },
    {
      path: '/spectate/:GameId',
      name: 'spectate',
      component: Spectate
    },
  ]
})
