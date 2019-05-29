<template>
  <div class="create">
    <h1>Create a Match</h1>
    <h1>Presets</h1>
    <div class="flex">
        <div v-bind:class="{active : MatchData.MatchTypeKey == preset.typekey}" class="preset" @click="loadPreset(preset.num)" v-for="preset in presets" v-bind:key="preset.typekey">
            <h2>{{preset.name}}</h2>
            <p>{{preset.description}}</p>
        </div>
    </div>
    <h1>Card Packs</h1>
    <h2>Original</h2>
      
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

        presets: [
            {
                num: 0,
                typekey: "dodge",
                name: "Dodge City",
                description: "Official expansion with additional cards and characters.",
                data: ["original-characters", "original-blue", "original-brown", "dodgecity-characters", "dodgecity-brown", "dodgecity-green", "dodgecity-blue"],
            },
            {
                num: 1,
                typekey: "armed",
                name: "Armed and Dangerous",
                description: "Official expansion with additional game mechanics.",
                data: ["original-characters", "original-blue", "original-brown", "armedanddangerous-characters", "armedanddangerous-brown", "armedanddangerous-orange"],
            },
            {
                num: 2,
                typekey: "high",
                name: "High Noon",
                description: "Official expansion with turn scenario modifiers.",
                data: ["original-characters", "original-blue", "original-brown", "original", "scenarios"],
            },
        ]
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
