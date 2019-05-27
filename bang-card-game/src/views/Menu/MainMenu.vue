<template>
  <div class="mainmenu">
      <status/>
      <div id="content">
        <div id="topbar">
          <h1>BANG!</h1>
          <button>Account</button>
        </div>
        <div id="buttons">
          <button>Find Game</button>
          <button>Match List</button>
          <button>Settings</button>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Menu/Login.vue'
import Register from '@/components/Menu/Register.vue'
import Status from '@/components/Menu/Status.vue'

export default {
  name: 'mainmenu',
  components: {
    Login,
    Register,
    Status,
  },
  methods: {
    async searchForMatch() {
      
    },
  },
  created() {
    this.$store.dispatch("playSong");
  }
}
</script>


<style scoped>
#status {
  position: fixed;
  width: 30%;
  top: 10px;
  left: 35%;
  margin: 0 auto;
}
#content {
  margin: 30px 50px;
}

#topbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

h1 {
  color: black;
  font-size: 7em;
  font-family: 'RioGrande', Fallback, sans-serif; 

  margin: 0px;
  text-align: left;
}

button {
  font-family: 'Stylish', sans-serif;
  font-size: 3em;

  display: block;
  background-color: rgba(0,0,0,0);
  border: none;
  margin-bottom: 30px;

  transition: margin .1s ease;
  text-align: left;
}

button:hover {
  margin-left: 20px;
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


