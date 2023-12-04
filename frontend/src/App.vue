<template>
  <div id="app">
    <router-view></router-view>
  </div>
  <HomePage msg="Welcome to Your Vue.js App"/>
  <AboutPage msg="About Page"/>
</template>

<script>
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'

export default {
  name: 'App',

  components: {
    HomePage, AboutPage,
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
