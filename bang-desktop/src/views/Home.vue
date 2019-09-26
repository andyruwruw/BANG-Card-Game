<template>
  <div class="home" @click="music">
    <div id="background"></div>
    <div id="menu-grid">
      <img src="../assets/images/title.svg"></img>
      <button id="create-room">New Match</button>
      <button id="spectate">Spectate</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    music() {
      this.$store.dispatch("playSong");
    }
  },
  created() {
    this.$store.dispatch("playSong");
  }
}
</script>

<style scoped>
#background {
  background-image: url("../assets/images/seamless-mountains.png");
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

button {
  display: block;
  background: rgba(0,0,0,0);
  border: 0px;
  width: calc(20vw);
  min-width: 200px;
  height: calc(15vh);
  min-height: 50px;
  font-size: 3em;
  margin: 0 auto;
  background-size: 100% 100%;
  font-family: 'Stylish', sans-serif;
  transition: all .1s ease;
  color: rgb(19, 19, 19);
}

button:hover {
  background-image: url('../assets/PaintedUI/Main_Buttons/Button_3_Clicked_Color.png');
  transform: scale(1.1, 1.1);
}

img {
  display: block;
  height: 45vh;
}

#menu-grid {
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: calc(10vw) calc(35vw) calc(10vw) calc(35vw) calc(10vw);
  grid-template-rows: calc(10vh) calc(10vh) calc(10vh) calc(40vh) calc(10vh) calc(10vh) calc(10vh);
}

/* -400 */

@media screen and (min-width: 400px) { /* 400-799 */

}

@media screen and (min-width: 800px) { /* 800+ */
    img {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
  }
}
</style>