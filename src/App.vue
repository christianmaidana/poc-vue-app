<template>
  <div id="app">
    <h1>Keystone POC</h1>
    <Archivos/>
  </div>
</template>

<script>
import Archivos from './components/Archivos-keystone.vue'

export default {
  name: 'App',
  components: {
    Archivos,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
