<template>
  <div class="bangtitle">
      <div id="content">
        <h1>BANG!</h1>
        <button>Create</button>
        <button>Join</button>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'bangtitle',
  computed: {
    toggle() {
      return this.$store.state.loginregister;
    }
  },
  created() {
    this.$store.dispatch("playSong");
  }
}


</script>


<style scoped>
h1 {
  margin-top: 10px;
  transform: rotate(5deg);
  font-family: 'RioGrande', Fallback, sans-serif;
  color: rgb(0, 0, 0);
  font-size: 5em;
}

@media (min-width:600px) {
  h1 {
    font-size: 6em;
  }
}

@media (min-width:800px) {
  h1 {
    font-size: 9em;
  }
}

@media (min-width:1000px) {
  h1 {
    font-size: 10em;
  }
}

@media (min-width:1400px) {
  h1 {
    font-size: 15em;
  }
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

#loading {
  position: absolute;
  left: 0px;
  top: 0px;
  width: calc(100vw);
  height: calc(100vh);
  display: block;
  background-color: rgb(185,14,14);
  background-image: url("../../assets/images/backgrounds/loadbackground.png");
  background-size: auto calc(100vh);
  background-repeat: no-repeat;
  background-position: 0px 0px 0px 0px;
}
</style>


