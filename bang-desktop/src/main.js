import Vue from 'vue';
import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue'
import router from './router'
import store from './store'

export const SocketInstance = socketio('http://localhost:3003');

Vue.use(VueSocketIO, SocketInstance, store)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
