<template>
  <div class="screen">

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'screen',
  data() {
      return {
        
      }
  },
  methods: {
    
  },
  computed: {

  },
  created() {
    this.$store.dispatch("playSong");
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

#card {
  display: block;
  width: 300px;
  height: 462.406px;

  background-image: url("../../assets/images/cards/Original/Blue/Barrel.png");
  background-size: cover;
  background-repeat: no-repeat;

  margin: 20px auto;
  border-radius: 30px;
  border: 2px solid rgba(148, 148, 148, 0.199);
  box-shadow: 10px 10px 10px grey;
}

</style>
