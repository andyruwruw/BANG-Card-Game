<template>
  <div class="small">
    <div id="background"/>
    <div class="flex" id="content">
        <div id="titles">
          <h2 class="instructions">Your screen is too small!</h2>
          <h2 class="instructions">Please enlarge or use a different device.</h2>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'small',
  data() {
    return {

    }
  },
  methods: {
    checkWidth() {
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if (w < 1000) {
        console.log("Too Small");
      }
      else {
        this.$router.push("/");
      }
    }
  },
  computed: {
    viewWidth() {

    }
  },
  created() {
    setInterval(this.checkWidth, 10);
  }
}


</script>


<style scoped>

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




.instructions {
  margin: 0;
  color: rgb(0, 0, 0);
  font-weight: bolder;
  -webkit-text-stroke: 0px rgb(255, 255, 255);
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


