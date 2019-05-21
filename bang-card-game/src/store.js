import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,

    SOUNDS: [
      {tag: "click", volume: [0, .1, .007, .01, .01]},
    ],
    music: 0,
    MUSIC: [
      {tag: "", volume: 0},
    ],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setSong(state, song) {
      state.preferences.music = song;
    },
  },
  actions: {
// USER LOGIN and REGISTER -----------------------------------------------------------------------------------
    async register(context, data) {
      try {
        let response = await axios.post("/api/users", data);
        context.commit('setUser', response.data);
        response = await axios.post("/api/preferences");
        context.commit('setPreferences', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        let newresponse = await axios.get("/api/preferences");
        context.commit('setPreferences', newresponse.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        let newresponse = await axios.get("/api/preferences");
        context.commit('setPreferences', newresponse.data);
        return "";
      } catch (error) {
        return "";
      }
    },
// --------------------------------------------------------------------------------------------------------
playSound(context, payload)
    {
      try {
        var media = document.getElementById(this.state.preferences.sound_pack + this.state.SOUNDS[payload.sound].tag);

        media.volume = this.state.SOUNDS[payload.sound].volume * this.store.preferences.svolume;
        
        const playPromise = media.play();
        if (playPromise !== null) 
            playPromise.catch(() => {media.play();})
      } catch (error) {
        console.log(error);
      }
    },
    changeSong(context, payload)
    {
      try{
        var media = document.getElementById(this.state.MUSIC[payload.music].tag);
        var playPromise = media.pause();

        context.commit('setSong', payload.music);

        media = document.getElementById(this.state.MUSIC[payload.music].tag);
        media.volume = this.state.MUSIC[payload.music].volume * this.state.preferences.mvolume;
        playPromise = media.play();
        if (playPromise !== null){
          playPromise.catch(() => { media.play(); })
        }
      } catch(error)
      {
        console.log(error);
      }
    },
    playSong(cotext)
    {
      try{
        media = document.getElementById(this.state.MUSIC[payload.music].tag);
        media.volume = this.state.MUSIC[payload.music].volume * this.state.preferences.mvolume;
        playPromise = media.play();
        if (playPromise !== null){
          playPromise.catch(() => { media.play(); })
        }
      } catch(error)
      {
        console.log(error);
      }
    },
  }
})
