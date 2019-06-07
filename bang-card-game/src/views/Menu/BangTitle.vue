<template>
  <div class="bangtitle">
    <div id="background"/>
    <create v-if="create" id="create-component"/>
    <div v-else class="flex" id="content">
      <div id="main">
        <div id="titles">
          <div id="maintitle"></div>
          <h2 class="instructions">Join on your phone or tablet</h2>
          <h2 class="instructions">at join.andrewdanielyoung.com</h2>
        </div>

        <button v-if="!join" @click="createGame">Create</button>
        <button v-if="!create" @click="joinToggle">Join</button>
        <input v-if="join" type="text" placeholder="Game ID"/>
      </div>
      <div id="side-bar">
        <lobby/>
      </div>
    </div>
  </div>
</template>

<script>
import Lobby from '@/components/Menu/Lobby.vue'
import Create from '@/components/Menu/Create.vue'

export default {
  name: 'bangtitle',
  components: {
    Lobby,
    Create
  },
  data() {
    return {
      join: false,
      create: true,
      GameId: "",
      small: false,
    }
  },
  methods: {
    async joinToggle() {
      this.join = !this.join;
    },
    async joinGame() {
      let payload = {
        GameId: this.GameId,
      };
    },
    async createGame() {
      this.create = !this.create;
      this.join = false;
    }
  },
  computed: {
    lobby() {
      return this.$store.state.Game.GameId != null;
    }, 
    viewWidth() {
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if (w < 1000) {
        this.$router.push("small");
      }
    }
  },
  created() {
    this.$store.dispatch("playSong");
    this.small = this.viewWidth;
  }
}


</script>


<style scoped>
#create-component {
  position: fixed;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 100;
}
#background {
  background-image: url("../../assets/images/backgrounds/seamless-mountains.png");
  background-size: auto 100vh;
  animation: background 35s linear 0s infinite reverse;
  position: fixed;
  z-index: -100;
  width: calc(100vw);
  height: calc(100vh);
  left: 0;
  top: 0;
}

@keyframes background {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: calc(100vh * (1920 / 1080)) 0%;
  }
}

#content {
  display: block;
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: nowrap;
}

#main {
  display: block;
  width: 70%;
  height: calc(100vh);
  margin: 0;
}

#side-bar {
  display: block;
  width: 30%;
  height: calc(100vh);
  margin: 0;

  max-width: 600px;
  min-width: 375px;
  animation: slide-left 1s ease 0s 1;
}

@keyframes slide-left {
  0% {
    transform:translateX(100%);
  }
  100% {
    transform:translateX(0%);
  }
}



#titles {
  display: block;
  width: 75%;
  margin: 0 auto;
  background-image: none;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 50px;
}

#maintitle {
  font-family: 'RioGrande', Fallback, sans-serif;
  display: block;
  width: 600px;
  height: 200px;
  background-image: url("../../assets/images/menu/title.png");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  color: rgb(0, 0, 0);
  font-size: 12em;
  margin: 0px auto;
  -webkit-text-stroke: 1px rgb(255, 255, 255);
  -webkit-text-stroke: 0px rgb(255, 255, 255);
}


.instructions {
  margin: 0;
  color: rgb(0, 0, 0);
  font-weight: bolder;
  -webkit-text-stroke: 0px rgb(255, 255, 255);
}

button {
  border: 0px;
  display: block;
  font-family: 'Stylish', sans-serif;
  font-size: 1.5em;
  padding: 10px;
  min-width: 200px;
  margin: 20px auto;
}

@media (min-width:600px) {

}

@media (min-width:800px) {

}

@media (min-width:1000px) {

}

@media (min-width:1400px) {

}

@keyframes shrink {
  from { 
    transform: scale(5,5) rotate(-50deg);
    opacity: 0;
  }
  to {
    transform: scale(1,1) rotate(5deg);
    opacity: 1;
  }
}


</style>


