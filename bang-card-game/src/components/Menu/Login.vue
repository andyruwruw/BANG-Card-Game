<template>
<div id="login">
  <h2 v-if="true" class="">Login to your Account</h2>
  
  <div class="group">
    <input v-bind:class="{ error : error && username == ''}"  v-model="username" type="text" placeholder="Username">
  </div>

  <div class="group">
    <input v-bind:class="{ error : error && password == ''}"  v-model="password" type="password" placeholder="Password">
  </div>
  <p v-if="error" id="error-message">{{error}}</p>
  <div class="">
    <button @mouseover="hover" @click="toggleLoginRegister" class="">Register Instead</button> 
    <button @mouseover="hover" @click="login" type="submit" class="submit">Submit</button>
  </div>
  
</div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: "",
      password: "",
      error: "",
    }
  },
  methods: {
    async login() {
      try {
        this.press();
        this.error = await this.$store.dispatch("login", {
          username: this.username,
          password: this.password
        });
        this.$router.push('menu');
      } catch (error) {
        console.log(error);
      }
    },
    toggleLoginRegister() {
      this.press();
      this.$store.dispatch("toggleLoginRegister");
    },
    hover()
    {
      this.$store.dispatch("playSound", {sound: 3, volume: 0});
    },
    press()
    {
      this.$store.dispatch("playSound", {sound: 0, volume: 0});
    },
  },
  computed: {
    valid() {
      if (this.username != "" && this.password != "") return true;
      return false;
    }
  }
}
</script>

<style scoped>
button {
  font-size: 1em;
}


</style>