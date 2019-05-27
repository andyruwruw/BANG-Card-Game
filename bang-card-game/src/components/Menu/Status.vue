<template>
<div id="status">
  <h1>Queuing</h1>
  <h1>{{timeElapsed}}</h1>
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

    update()
    {
      this.now = new Date();
    },
  },
  computed: {
    timeElapsed() {
      let miliseconds = this.now.getTime() - this.start.getTime();
      let seconds = Math.floor(miliseconds / 1000);
      let minutes = 0;
      while (seconds >= 60) {
        seconds -= 60;
        minutes += 1;
      }
      let add = "0";
      if (seconds > 9)
      {
        add = "";
      }
      return minutes + ":" + add + seconds;
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