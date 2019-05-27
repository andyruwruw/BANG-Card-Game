<template>
<div id="register">
  <h2 v-if="true" class="">Register for an Account</h2>
  <input v-bind:class="{ error : error && password == ''}"  v-model="name" type="text" placeholder="Full Name">
  <input v-bind:class="{ error : error && username == ''}"  v-model="username" type="text" placeholder="Username">
  <input v-bind:class="{ error : error && password == ''}"  v-model="password" type="password" placeholder="Password">

  <p v-if="error" id="error-message">{{error}}</p>
  <button @mouseover="hover" @click="toggleLoginRegister" class="">Login Instead</button> 
  <button @mouseover="hover" @click="THISONE" type="submit" class="submit">Submit</button>
</div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      name: "",
      username: "",
      password: "",
      error: "",
    }
  },
  methods: {
    async THISONE() {
      
      if (this.name != "" && this.username != "" && this.password != "")
      {
        try {
          this.press();
          this.error = await this.$store.dispatch("register", {
            name: this.name,
            username: this.username,
            password: this.password
          });
          this.$router.push('menu');
        } catch (error) {
          console.log(error);
        }
      }
      else
      {
        this.error = "Please fill all required fields.";
      }
    },
    toggleLoginRegister() {
      this.press();
      this.$store.dispatch("toggleLoginRegister");
    },
    hover()
    {
      //this.$store.dispatch("playSound", {sound: 3, volume: 0});
    },
    press()
    {
      this.$store.dispatch("playSong");
      //this.$store.dispatch("playSound", {sound: 0, volume: 0});
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