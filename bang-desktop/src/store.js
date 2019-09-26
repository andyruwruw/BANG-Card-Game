import Vue from 'vue'
import Vuex from 'vuex'
let music = require('./music.js');
 
Vue.use(Vuex)
 
export default new Vuex.Store({
    state: {
      MUSIC: [

      ],
      message: null
    },
    mutations: {
      SOCKET_SERVER_MESSAGE(state, data) {
        console.log('%c' + data.message, 'background: #4a86e8; color: white;');
      }
    },
    actions: {
      playSong(context)
      {
        try {
          let media = document.getElementById("music1");
          media.volume = .5;
          playPromise = media.play();
          if (playPromise !== null){
            playPromise.catch(() => { media.play(); })
          }
        } catch(error) {
          console.log(error);
        }
      },
      // playSound(context, payload)
      // {
      // try {
      //   var media = document.getElementById(this.state.SOUNDS[payload.sound].tag);
      //   if (payload.volume == 0)
      //   {
      //       let volumeLevel = this.state.SOUNDS[payload.sound].volume[this.state.preferences.sound_pack];
      //       let multiplyer = 1;
      //       switch (this.state.preferences.svolume) {
      //         case 0:
      //         multiplyer = .5
      //         break;
      //         case 1:
      //         multiplyer = 1.3;
      //         break;
      //         case 2:
      //         multiplyer = 2.3;
      //         break;
      //       }
      //       volumeLevel = volumeLevel * multiplyer;
      //       media.volume = volumeLevel;
      //   }
      //   else
      //   {
      //       media.volume = payload.volume;
      //   }
      //   const playPromise = media.play();
      //   if (playPromise !== null) 
      //       playPromise.catch(() => {media.play();})
      // } catch (error) {
      //   console.log(error);
      // }
    //},
    }
})
