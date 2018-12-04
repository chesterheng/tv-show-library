<template>
  <div id="app">
    <NavBar/>
    <Home/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Home from "./views/Home.vue";
export default {
  name: "app",
  components: {
    NavBar,
    Home
  }
};
</script>

<style>
:root {
  --nav-background: #576574;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  margin: 0;
}
</style>