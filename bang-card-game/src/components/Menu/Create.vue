<template>
  <div id="create">
    <div class="flex" id="create-div">
      <div id="game-settings">
        <div class="flex window-header" id="options">
          <h1 class="window-header-title">GAME SETTINGS</h1>
        </div>
        <div id="game-settings-div">
          <button @click="changePage(0)"><h3 class="button-title">Presets</h3></button>
          <button @click="changePage(1)"><h3 class="button-title">Game Play</h3></button>
          <button @click="changePage(2)"><h3 class="button-title">Lobby</h3></button>
          <button @click="changePage(3)"><h3 class="button-title">Cards</h3></button>
        </div>
      </div>

      <div v-if="page == 0" class="side-menu" id="presets-div">
        <div class="flex window-header" id="deck">
          <h1 class="window-header-title">PRESETS</h1>
        </div>
      </div>

      <div v-if="page == 1" class="side-menu" id="lobby-div">
        <div class="flex window-header" id="deck">
          <h1 class="window-header-title">GAME PLAY</h1>
        </div>
      </div>

      <div v-if="page == 2" class="side-menu" id="gameplay-div">
        <div class="flex window-header" id="deck">
          <h1 class="window-header-title">LOBBY SETTINGS</h1>
        </div>
      </div>

      <div v-if="page == 3" class="side-menu" id="card-packs">
        <div class="flex window-header" id="deck">
          <h1 class="window-header-title">CARDS</h1>
        </div>
        <div class="flex" id="card-tabs">
          <button @click="changeDeck(0)" v-bind:class="{active : deck == 0}">ORIGINAL</button>
          <button @click="changeDeck(1)" v-bind:class="{active : deck == 1}">HIGH NOON</button>
          <button @click="changeDeck(2)" v-bind:class="{active : deck == 2}">DODGE CITY</button>
          <button @click="changeDeck(3)" v-bind:class="{active : deck == 3}">DANGEROUS</button>
        </div>
        <div id="card-deck">
          <div class="grid">
            <div class="card" v-for="card in cards" v-bind:key="card">
              <div class="card-title-div"><h3 class="card-title">{{card}}</h3></div>
              <div class="card-icon"/>
              <div class="flex card-info">
                <button class="subtract"/>
                <h3 class="card-num">4</h3>
                <button class="add"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create',
  data() {
      return {
        cards: ["APPALOOSA","BANG","BARREL","4","5","6","7","8","9","10","11","12",'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        page: 0,
        deck: 0,
        Game: {
          GameId: null,
          MatchTypeKey: "",
          Properties: [],
          Player: {
            UserName: "",
          },
          Cards: [],
          TurnTimeout: 20,
        },
        ORIGINAL_DECK: {
          bang: 26,
          missed: 12,
          beer: 6,
          duel: 3,

          catbleu: 4,
          panic: 4,
          indians: 2,
          gattling: 1,

          stationwag: 2,
          wellsfargo: 1,
          generalstore: 2,
          saloon: 1,

          gvolcanic: 2,
          gscolfield: 3,
          gremington: 1,
          grevcara: 1,
          gwichester: 1,

          appaloosa: 1,
          mustang: 2,
          barrel: 2,
          dynamite: 1,
          jail: 3,
        },
        DODGE_CITY: {
          bang: 4,
          missed: 1,
          beer: 2,

          catbleu: 1,
          panic: 1,
          indians: 1,

          generalstore: 2,

          gremington: 1,
          grevcara: 1,

          mustang: 2,
          barrel: 2,
          dynamite: 1,

          ragtime: 1,
          springfield: 1,
          punch: 1,
          brawl: 1,

          whiskey: 1,
          dodge: 2,
          tequila: 1,

          binocular: 1,
          hideout: 1,

          buffalo: 1,
          pepperbox: 1,
          howitzer: 1,
          knife: 1,

          ponyexpress: 1,
          conestoga: 1,
          derringer: 1,
          cancan: 1,
          bible: 1,

          canteen: 1,
          ironplate: 2,
          hat: 1,
          sombrero: 1,
        },
        ARMED_AND_DANGEROUS: {
          bang: 4,
          missed: 1,
          catbleu: 1,

          ammo: 32,

          caravan: 1,
          duck: 1,
          reload: 1,
          littlenip: 1,

          quickshot: 1,
          flintlock: 1,
          arrow: 1,
          rust: 1,

          squaw: 1,

          belltower: 1,
          bomb: 1,
          buntline: 1,
          bigfifty: 1,
          thunderer: 1,

          ace: 1,
          bandolier: 1,
          doublebarrel: 1,
          lockpick: 1,
          
          whip: 1,
          create: 1,
          tumbleweed: 1,
          beerkeg: 1,
        },
      }
  },
  methods: {
    changePage(num) {
      this.page = num;
      console.log(this.page);
    },
    changeDeck(num) {
      this.deck = num;
    },
    generateRandomKey() {
      let id = "";
      let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      for (var i = 0; i < 4; i++)
      {
        id += letters[Math.floor(Math.random() * letters.length)];
      }
      console.log(id);
      return id;
    },
    generateOriginalCards(Cards) {
      let keys = Object.keys(this.ORIGINAL_DECK);
      for (var i = 0; i < keys.length; i++)
      {
        for (var j = 0; j < this.ORIGINAL_DECK[keys[i]]; j++)
        {
          this.Game.Cards.push(keys[i]);
        }
      }
      console.log(this.Game.Cards);
    }
  },
  computed: {
    GameId() {
      if (this.Game.GameId)
      {
        return this.Game.GameId;
      }
      else {
        return "Null";
      }
    }
  },
  created() {
    this.Game.GameId = this.generateRandomKey();
    this.Game.Cards = this.generateOriginalCards(this.Game.Cards);
    this.$store.dispatch("playSong");
  }
}
</script>

<style scoped> /* General */
@import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
.flex {
    display: flex;
}
</style>
<style scoped> /* Component */

.side-menu {
  position: relative;
  display: block;
  width: 55%;
  height: 100%;

  background-image: url("../../assets/images/PaintedUI/Main Windows/Widnow Frame Large.png");
  background-size: 100% 100%;
}
#create-div {
  width: 75%;
  height: 80%;
  margin: calc(10vh) auto;
  flex-wrap: nowrap;
  justify-content: space-around;
}

#game-settings {
  position: relative;
  display: block;
  width: 35%;
  height: 100%;

  background-image: url("../../assets/images/PaintedUI/Main Windows/Widnow Frame.png");
  background-size: 100% 100%;
}


</style>
<style scoped> /* Headers */
.window-header {
  position: absolute;
  left: -30px;
  top: -30px;
  display: block;
  width: 400px;
  height: 100px;
  background-image: url("../../assets/images/PaintedUI/Main Windows/Window Header.png");
  background-size: 100% 100%;
}

.window-header-title {
  text-align: left;
  margin: 0;
  background: -webkit-linear-gradient(#eee, rgb(255, 238, 203));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  left: 75px;
  top: calc(2vh);
  font-weight: lighter;
}

#options {
  background-image: url("../../assets/images/menu/create/game-settings-title.png");
}

#deck {
  background-image: url("../../assets/images/menu/create/card-deck-title.png");
}

#presets {
  background-image: url("../../assets/images/menu/create/card-deck-title.png");
}

#lobby {
  background-image: url("../../assets/images/menu/create/card-deck-title.png");
}

#gameplay {
  background-image: url("../../assets/images/menu/create/card-deck-title.png");
}
</style>
<style scoped> /* Scroll Bar */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-image: url("../../assets/images/PaintedUI/Sliders/Slider Bar Vertical.png");
  background-size: 100% 100%;
  }

/* Handle */
::-webkit-scrollbar-thumb {
  background-image: url("../../assets/images/PaintedUI/Sliders/Slider Thumbtrack 2 white.png");
  background-size: 85% 85%;
  opacity: .5;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-image: url("../../assets/images/PaintedUI/Sliders/Slider Thumbtrack 2 white.png");
  background-size: 85% 85%;
  opacity: 1;
}
</style>
<style scoped> /* Game Settings Buttons */
#game-settings-div {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 140px 140px 140px;
  grid-column-gap: 30px;
  grid-row-gap: 50px;
  width: calc(100% - 50px);
  height: calc(100% - 90px);

  overflow: auto;
  padding: 25px;
  margin-top: 40px;
  justify-content: space-around;
}

@media (min-width:900px) {
  #game-settings-div {
    grid-template-columns: auto;
  }
}

@media (min-width:1450px) {
  #game-settings-div {
    grid-template-columns: auto auto;
  }
}

#game-settings-div button {
  background-color: rgba(255, 255, 207, 0.164);
  border: 0;
  color: white;
  width: 140px;
  height: 140px;
}
</style>
<style scoped> /* Card Grid */
#card-tabs {
  justify-content: space-around;
  margin: 0 auto;
  margin-top:40px;
  width: 95%;
}

#card-tabs button {
  font-family: 'Stylish', sans-serif;
  z-index: 100;
  color: rgb(209, 208, 208);
  font-size: 1em;
  background-image: url("../../assets/images/PaintedUI/Character & Inventory/Inventory Tab UnSelected.png");
  background-size: 100% 100%;
  background-color: rgba(255, 238, 203, 0);
  border: 0;
  width: 22%;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.295);
}

#card-tabs button.active {
  background-image: url("../../assets/images/PaintedUI/Character & Inventory/Inventory Tab UnSelected.png");
  color: white;
  font-weight: bolder;
}

#card-deck {
  width: 90%;
  height: 85%;
  padding: 5%;
  padding-top: 18px;
}

.grid {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto;
  grid-row-gap:20px;
  overflow: auto;
}

@media (min-width:900px) {
  .grid {
    grid-template-columns: auto auto;
  }
}

@media (min-width:1450px) {
  .grid {
    grid-template-columns: auto auto auto;
  }
}
</style> 
<style scoped> /* Card Item */
.card-num {
  margin: 0;
  background: -webkit-linear-gradient(#eee, rgb(255, 238, 203));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card {
  display: block;
  width: 80%;
  height: 90%;
  position: relative;
  margin: 0 auto;
  background-color: rgba(255, 255, 233, 0.089);
  border: 1px solid rgba(255, 255, 207, 0.164);
  padding: 10px;
  border-radius: 20px;
}

.card-icon {
  display: block;
  width: 95%;
  padding-top: 122%;
  height: auto;
  background-image: url("../../assets/images/menu/create/icons/Appaloosa 2.png");
  background-size: 100% 100%;
  border-radius: 10px;
  padding: -3px;
  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.699);
  opacity: 1;
}

.card-title {
  margin: 0;
  color: white;
  font-weight: lighter;
  background: -webkit-linear-gradient(#eee, rgb(255, 238, 203));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 1;
  font-size: 130%;
}

.card-title-div {
  position: absolute;
  top: 0px;
  left: -10px;
  background-image: url("../../assets/images/PaintedUI/HUD/Announcement/Announcement Splash 85.png");
  background-size: 100% 100%;
  padding: 10px 25px;
  opacity: 0;
  
}

.card-info {
  justify-content: space-around;
  background-image: url("../../assets/images/PaintedUI/Character & Inventory/Inventory Currency Panel.png");
  background-size: 100% 100%;
}

button.subtract {
  width: 20px;
  height: 20px;
  background-image: url("../../assets/images/PaintedUI/Icons/Arrow Down 1.png");
  background-size: 100% 100%;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}

button.add {
  width: 20px;
  height: 20px;
  background-image: url("../../assets/images/PaintedUI/Icons/Arrow Up 1.png");
    background-size: 100% 100%;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
</style>
<style scoped> /* Template Screen Size */

@media (min-width:600px) {

}

@media (min-width:800px) {

}

@media (min-width:1000px) {

}

@media (min-width:1400px) {

}

</style>