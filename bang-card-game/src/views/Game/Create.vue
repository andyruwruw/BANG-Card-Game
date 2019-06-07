<template>
  <div class="create">
    <h1>Create a Match</h1>
    <h1>Presets</h1>
    <div class="flex">
        <button class="preset">Bang!</button>
        <button class="preset">Dodge City</button>
        <button class="preset">High Noon</button>
        <button class="preset">Armed and Dangerous</button>
    </div>
    <h2>Settings</h2>
    <div class="flex">
        <button class="preset">Turn Time</button>
        <button class="preset">Role Visability</button>
        <button class="preset">Role Choice</button>
        <button class="preset">Character Force</button>
        <button class="preset">Character Choice</button>
        <button class="preset">Random Seats</button>
    </div>
    <button>Create Match</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'create',
  data() {
      return {
        MatchData: {
            MatchId: null,
            MatchTypeKey: "orig",  // A Match Type definition Key.
            PlayerLimit: 7,   // Maximum number of players that can join the match
            Properties: [],    // Modifyers Active.
            TurnTimeout: 30,   // Time for each player to complete turns.
            Players: [],       // Players queued
            AutoStart: false,     // Starts match when player limit reached.
            Private: false,       // Private matches only include friends.
        },

        ORIGINAL_DECK: {
            bang: 26,
            missed: 12,
            beer: 6,
            duel: 3,

            catbleu: 4,
            panic: 4,
            indians: 2,
            gatling: 1,

            stationwagon: 2,
            wellsfargo: 1,
            generalstore: 2,
            saloon: 1,

            volcanic: 2,
            scolfield: 3,
            remington: 1,
            revcarabine: 1,
            wichester: 1,

            appaloosa: 1,
            mustang: 2,
            barrel: 2,
            dynamite: 1,
            jail: 3,
        },
      }
  },
  methods: {
    loadPreset(num) {
        this.MatchData.Properties = [];
        for (var i = 0; i < this.presets[num].data.length; i++)
        {
            this.MatchData.Properties.push(this.presets[num].data[i]);
        }
        this.MatchData.MatchTypeKey = this.presets[num].typekey;
    }
  },
  computed: {
      type() {
      }
  },
  created() {
    this.$store.dispatch("playSong");
    this.MatchId = Math.floor(Math.random() * 90000) + 10000;
  }
}
</script>


<style scoped>
.preset {
    width: 200px;
    background: rgba(223, 222, 222, 0.623);
    padding: 3px;
    margin: 3px;
    border-radius: 20px;
    transition: .3s ease;
}

.preset:hover {
    background: rgba(36, 36, 36, 0.863);
    color: white;
}

.active {
    background: rgba(133, 133, 133, 0.863);
}

.flex {
    display: flex;
    justify-content: center;
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
