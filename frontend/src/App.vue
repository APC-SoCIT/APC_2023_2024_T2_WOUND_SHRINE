<template>
  <section>
        <!-- Add the carousel component here -->
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in carouselItems" :key="item.id">
            <img :src="item.image" alt="Image" />
            <template v-slot:desc>
              <p>{{ item.description }}</p>
            </template>
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
      </section>
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
