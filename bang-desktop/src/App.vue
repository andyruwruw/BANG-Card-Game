<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Stylish&display=swap');

#app {
  font-family: 'Stylish', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  min-width: 100vw;
  min-height: 100vw;
  display: block;
  left: 0;
  top: 0;
}

@font-face {
  font-family: 'RioGrande';
  src: url('./assets/fonts/RioGrande.ttf') format('truetype');
}

@font-face {
  font-family: 'RioGrandeStriped';
  src: url('./assets/fonts/RioGrandeStriped.ttf') format('truetype');
}
</style>
