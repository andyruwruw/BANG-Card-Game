<template>
  <div id="lobby">
    <div id="lobby-div">

      <span id="indicator-gap"/>

      <div id="slots-side-bar">
        <span id="slots-top"></span>

        <div id="slots">
          <div v-bind:class="{inactive : player.UserName == 'login to play!', slot1 : player.key == 0, slot2 : player.key == 1, slot3 : player.key == 2, slot4 : player.key == 3, slot5 : player.key == 4, slot6 : player.key == 5, slot7 : player.key == 6, }" 
          class="slot" v-for="player in players" v-bind:key="player.key">

            <div v-bind:class="{ searching : player.UserName == 'login to play!'}" class="indicator-block"></div>
            <h2 v-bind:class="{ pending : player.UserName == 'login to play!'}" class="player-name">{{player.UserName}}</h2>

          </div>
        </div>

        <span id="slots-bottom"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'lobby',
  data() {
      return {
        
      }
  },
  methods: {
    
    
  },
  computed: {
    players() {
      let players = this.$store.state.Game.Players;
      let send = []
      for (var i = 0; i < players.length; i++)
      {
        players[i].key = i;
        send.push(players[i]);
      }
      while (send.length < 7)
      {
        send.push({UserName: "login to play!", key: send.length});
      }
      return send;
    }
  },
  created() {
    this.$store.dispatch("playSong");
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Anton&display=swap');

#lobby-div {
  display: flex;
  width: 100%;
  height: calc(100vh);
  margin: 0;
  max-width: 600px;
  min-width: 375px;
  font-family: 'Anton', sans-serif;
}

.slot {
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(10vh);
  background-size: auto 100%;
  background-position: left;
  position: relative;
}

#slots {
height: 70vh;
}

#slots-side-bar {
  width: 80%;
  height: 100vh;

}

#slots-top {
  display: block;
  width: 100%;
  background-image: url("../../assets/images/backgrounds/pattern.png");
  background-size: 75%;
  height: calc(10vh);
  border-left: 2px solid rgb(17, 17, 17);
  border-bottom: 2px solid rgb(17, 17, 17);
}

#slots-bottom {
  display: block;
  width: 100%;
  background-image: url("../../assets/images/backgrounds/pattern.png");
  background-size: 75%;
  height: calc(20vh - 2px);
  border-left: 2px solid rgb(17, 17, 17);
  border-top
  : 2px solid rgb(17, 17, 17);
}

.slot1 .player-name {
  color: rgb(97, 120, 247);
}

.slot2 .player-name {
  color: rgb(247, 97, 97);
}

.slot3 .player-name {
  color: rgb(247, 237, 97);
}

.slot4 .player-name {
  color: rgb(110, 247, 97);
}

.slot5 .player-name {
  color: rgb(247, 165, 97);
}

.slot6 .player-name {
  color: rgb(217, 97, 247);
}

.slot7 .player-name {
  color: rgb(97, 217, 247);
}

.slot.slot7 {
  background-image: url("../../assets/images/menu/slots_lighter/ReadyColor7.png");
}

.slot.slot1 {
  background-image: url("../../assets/images/menu/slots_lighter/ReadyColor1.png");
}

.slot.slot2 {
  background-image: url("../../assets/images/menu/slots_lighter/ReadyColor2.png");
}

.slot.slot3 {
  background-image: url("../../assets/images/menu/slots_lighter/ReadyColor3.png");
}

.slot.slot4 {
  background-image: url("../../assets/images/menu/slots_lighter/ReadyColor4.png");
}

.slot.slot5 {
  background-image: url("../../assets/images/menu/slots_lighter/ReadyColor5.png");
}

.slot.slot6 {
  background-image: url("../../assets/images/menu/slots_lighter/ReadyColor6.png");
}

.slot.slot7 {
  background-image: url("../../assets/images/menu/slots_lighter/ReadyColor7.png");
}

.slot.slot1.inactive {
  background-image: url("../../assets/images/menu/slots_lighter/Open1.png");
}

.slot.slot2.inactive {
  background-image: url("../../assets/images/menu/slots_lighter/Open2.png");
}

.slot.slot3.inactive {
  background-image: url("../../assets/images/menu/slots_lighter/Open3.png");
}

.slot.slot4.inactive {
  background-image: url("../../assets/images/menu/slots_lighter/Open4.png");
}

.slot.slot5.inactive {
  background-image: url("../../assets/images/menu/slots_lighter/Open5.png");
}

.slot.slot6.inactive {
  background-image: url("../../assets/images/menu/slots_lighter/Open6.png");
}

.slot.slot7.inactive {
  background-image: url("../../assets/images/menu/slots_lighter/Open7.png");
}




#player-in {
  display: block;
  width: 20%;
  height: 80vh;
  padding: calc(10vh) 0;
}

.indicator-block {
  position: absolute;
  left: calc(-60px);
  display: block;
  width: 45px;
  height: 45px;
  border: 3px solid white;
  border-radius: 500px;
  background-image: url("../../assets/images/menu/indicator-icon/ready-slot.png");
  background-color: rgba(102, 47, 11, 0.815);
  background-size: 100%;
  animation: shake 0.82s linear infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  0%, 100%, 50% {
    background-position: 0px 0px;
  }

  10%, 90% {
    background-position: -1px 1px;
  }
  
  20%, 80% {
    background-position: 1px -1px;
  }

  30%, 70% {
    background-position: -1px -1px;
  }

  40%, 60% {
    background-position: 1px 1px;
  }
}

.indicator-block.searching {
  background-image: url("../../assets/images/menu/indicator-icon/open-slot.png") !important;
  background-color: rgba(92, 92, 92, 0.397);
  animation: twirl 1.8s ease-in-out 0s infinite alternate;
  border-style: solid;
}

@keyframes twirl {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#indicator-gap {
  width: 20%;
  display: block;
  margin: 0 auto;
}

.player-name {
  text-align: center;
  padding: 2px 0;
  margin-left: 15%;
  font-size: 2.5em;
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 3px #080808;
  font-weight: lighter;
  text-align: left;
  font-family: 'Anton', sans-serif;
}

.pending {
  animation: pulse 1.8s linear 0s infinite;
  padding: 2% 15%;
  min-width: 150px;
  margin: auto;
  text-align: center !important;
  border: 3px white;
  color: white;
  border-style: dashed;
  font-size: 1.5em;
}

@keyframes pulse {
  0% {
    color: rgb(255, 255, 255);
    border-color: rgb(255, 255, 255);
  }
  50% {
    color: rgb(167, 167, 167);
    border-color: rgb(167, 167, 167);
  }
  100% {
    color: rgb(255, 255, 255);
    border-color: rgb(255, 255, 255);
  }
}

.flex {
    display: flex;
}

@media (min-width:600px) {

}

@media (min-width:800px) {

}

@media (min-width:1000px) {

}

@media (min-width:1400px) {

}

</style>
