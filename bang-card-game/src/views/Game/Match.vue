<template>
  <div class="match">

  </div>
</template>

<script>
import PlayerHand from '@/components/Game/PlayerHand.vue'
import PlayerDetails from '@/components/Game/PlayerDetails.vue'
import PlayerActives from '@/components/Game/PlayerActives.vue'
import Opponent from '@/components/Game/Opponent.vue'
import CenterDecks from '@/components/Game/CenterDecks.vue'


export default {
  name: 'match',
  components: {
    
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    Game() {
      return this.$store.state.Game;
    }
  },
  created() {
    if (this.user == null)
    {
      //this.$router.push("/");
    }
  }
}


</script>


<style scoped>

@media (min-width:600px) {

}

@media (min-width:800px) {

}

@media (min-width:1000px) {

}

@media (min-width:1400px) {

}

</style>

