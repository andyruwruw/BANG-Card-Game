<template>
<div id="status">
  <h1>Queuing</h1>
  <h1>{{timeElapsed}}</h1>
  <button @click="cancel">Cancel Search</button>
</div>
</template>

<script>
export default {
  name: 'status',
  data() {
    return {
      start: null,
      now: null,
    }
  },
  methods: {
    async cancel() {
      this.error = await this.$store.dispatch("findMatch", {
          username: this.username,
          password: this.password
      });
    },
    update()
    {
      this.now = new Date();
    },
  },
  computed: {
    timeElapsed() {
      let miliseconds = this.now.getTime() - this.start.getTime();
      let seconds = Math.floor(miliseconds / 1000);
      let newseconds = seconds;
      let minutes = 0;
      while (seconds >= 60) {
        newseconds -= 60;
        minutes += 1;
      }
      let add = "0";
      if (seconds > 9)
      {
        add = "";
      }
      return minutes + ":" + add + newseconds;
    }
  },
  created() {
    this.start = new Date();
    this.now = new Date();
    setInterval(this.update, 1000);
  }
}
</script>

<style scoped>
#status {
  background: rgb(190, 190, 190);
  border-radius: 50px;
}
</style>