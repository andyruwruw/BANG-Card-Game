import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import { SSL_OP_MICROSOFT_SESS_ID_BUG } from 'constants';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ErrorMessage: "",

    Game: {
      GameId: 1,
      Properties: [],
  
      Players: [
        {
          UserName: "ANDREW",
          Turn: false,
          Role: null,
          Character: "",
          Health: 3,
          Hand: 0,
          Actives: [],
        },
        {
          UserName: "MARIAH",
          Turn: false,
          Role: null,
          Character: "",
          Health: 3,
          Hand: 0,
          Actives: [],
        },
        {
          UserName: "SATAN",
          Turn: false,
          Role: null,
          Character: "",
          Health: 3,
          Hand: 0,
          Actives: [],
        },
      ],
  
      DrawPile: [],
      DiscardPile: [],
  
      OutcomeData: String,
      HasOutcome: Boolean,
  
      TurnTimeout: {
        Time: Number,
        Started: Date,
        Expires: Date,
      },
  
      Turn: {
        TurnNumber: Number,
        PlayersWaitingFor: [],
        CardInPlay: String,
        Scenario: null,
      },
  
      TurnType: String,
      TurnOrderType: String,
    },
    

    SOUNDS: [
      {tag: "click", volume: [0, .1, .007, .01, .01]},
      {tag: "click", volume: [0, .1, .007, .01, .01]},
    ],
    music: 0,
    MUSIC: [
      {tag: "gunninforyou", volume: 1},
    ],
    preferences: {
      mvolume: 1,
      svolume: 1,
    },
  },
  mutations: {
    setSong(state, song) {
      state.preferences.music = song;
    },
    setGame(state, Game) {
      state.Game = Game;
    },
    setError(state, ErrorMessage) {
      state.ErrorMessage = ErrorMessage;
    },
    setPreferences(state, preferences) {
      state.preferences = preferences;
    },
  },
  actions: {
// SOUND OPTIONS--------------------------------------------------------------------------------------------------------
    playSound(context, payload)
    {
      try {/*
        var media = document.getElementById(this.state.preferences.sound_pack + this.state.SOUNDS[payload.sound].tag);

        media.volume = this.state.SOUNDS[payload.sound].volume * this.store.preferences.svolume;
        
        const playPromise = media.play();
        if (playPromise !== null) 
            playPromise.catch(() => {media.play();})
            */
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
        var media = document.getElementById(this.state.MUSIC[this.state.music].tag);
        media.volume = this.state.MUSIC[this.state.music].volume * this.state.preferences.mvolume;
        var playPromise = media.play();
        if (playPromise !== null){
          playPromise.catch(() => { media.play(); })
        }
      } catch(error)
      {
        console.log(error);
      }
    },
  // MATCHMAKING--------------------------------------------------------------------------------------------------------
    async createGame(context, payload) {
      let response = await axios.post("/desktop/create/" + payload.GameId, payload);
      if (response.Created) {
        context.commit('setGame', response.Desktop);
      }
      else {
        context.commit('setError', response.Error);
      }
    },
    async joinGame(context, payload) {
      let response = await axios.put("/desktop/join/" + payload.GameId);
      if (response.Found) {
        context.commit('setGame', response.Desktop);
      }
      else {
        context.commit('setError', response.Error);
      }
    },
    async awaitUpdate() {
      let response = await axios.get("/desktop/check/" + this.state.Game.GameId);
      if (response.Get)
      {
        context.commit('setGame', response.Desktop);
      }
      else {
        context.commit('setError', respones.Error);
      }
    },
  // GAME--------------------------------------------------------------------------------------------------------
    
  }
})
