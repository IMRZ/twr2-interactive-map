<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
}
</style>
