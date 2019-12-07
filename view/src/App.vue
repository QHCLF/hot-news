<template>
  <div id="app">
    <Nav></Nav>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import Nav from './components/Nav';
export default {
  name: 'app',
  components: { Nav }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: #2c3e50;
  padding: 5rem 10rem;
}
</style>
