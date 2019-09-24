<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Stylish&display=swap');

body.noScroll { /* ...or body.dialogShowing */
  overflow: hidden;
}

#app {
  font-family: 'Stylish', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.content {
  position: absolute;
  left: 0px;
  right: 0px;
  width: 100vw;
  height: 100vw;
  z-index: 100;
}

body {
  background-color: rgb(255, 255, 255);
  background-size: auto 100vh;
}

.flex {
  display: flex;
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
