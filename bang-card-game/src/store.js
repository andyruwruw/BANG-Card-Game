import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    loginregister: true,

    GameId: null,

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

    matchMaking: {
      searching: false,
      lobby: false,
    },
    Match: {
      MatchTypeKey: null,  // A Match Type definition Key.
      PlayerLimit: null,   // Maximum number of players that can join the match
      Properties: null,    // Modifyers Active.
      TurnTimeout: null,   // Time for each player to complete turns.
      Players: null,       // Players queued
      AutoStart: null,     // Starts match when player limit reached.
      Private: null,       // Private matches only include friends.
    },
    Game: {
      MatchTypeKey: "",
      State: [],
      Properties: [],
      StateData: {
        Role: [],
        Hand: [],
        Actives: [],
        Health: [],
      
        DrawPile: [],
        DiscardPile: [],
      },
      OutcomeData: String,
      HasOutcome: Boolean,
      TurnTimeout: {
        Time: Number,
        Started: Date,
        Expires: Date,
      },
      WaitingTimeout: {
        Time: 30,
        Started: Date,
        Expires: Date,
      },
      Turn: {
        TurnNumber: Number,
        PlayersWaitingFor: [],
        CardInPlay: String,
      },
      TurnType: String,
      TurnOrderType: String,

      Players: [],
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setSong(state, song) {
      state.preferences.music = song;
    },
    setSearching(state, searching) {
      state.matchMaking.searching = searching;
    },
    setLobby(state, lobby) {
      if (lobby == true)
        state.matchMaking.searching = false;
      state.matchMaking.lobby = lobby;
    },
  },
  actions: {
// USER LOGIN and REGISTER -----------------------------------------------------------------------------------
    async register(context, data) {
      try {
        console.log("Trying to register...");
        let response = await axios.post("/api/users", data);
        context.commit('setUser', response.data);
        response = await axios.post("/api/preferences");
        context.commit('setPreferences', response.data);
        return "";
      } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
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
    async toggleLoginRegister(context) {
      try {
        this.state.loginregister = !this.state.loginregister;
      } catch (error) {
        return error;
      }
    },
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
    async findMatch(context, payload) {
      try {
        if (this.state.matchMaking.searching)
        {
          let response = await axios.delete("/api/match/leave/" + this.state.Match.GameId);
        }
        let response = await axios.post("/api/match/find");

      } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
        return error.response.data.message;
      }
    },
    async createMatch(context, payload) {

    },
    async cancelMatch(context, payload) {

    },
    async checkMatch(context, payload) {

    },
    async startMatch(context, payload) {

    },
  // GAME--------------------------------------------------------------------------------------------------------
    
  }
})
