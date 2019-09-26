import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import VueSocketIO from 'vue-socket.io'
 
const options = { path: '/my-app/' }; //Options object to pass into SocketIO
 
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3003',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
  options: { path: "" } //Optional options
}))
 
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')