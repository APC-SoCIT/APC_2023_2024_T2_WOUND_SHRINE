<template>
    <div>
      <router-link to="/">
        <header>
          <h1>Church Management System</h1>
          <link href="Home.css" rel="stylesheet"/>
        </header>
      </router-link>
      <main>
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav>
        
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
        
        <section>
          <!-- Content for the Home page -->
        </section>
        <!-- Add more sections for different functionalities -->
      </main>
      <footer>
        <p>&copy; 2023 Church Management System</p>
      </footer>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  
  export default {
    name: "HomePage",
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        carouselItems: [
          { id: 1, image: './assets/Image1.jpg', description: 'flkgjmdflkgjdlfkgjdlfkg' },
          { id: 2, image: './assets/Image2.jpg', description: 'Description for Image 2' },
          { id: 3, image: './assets/Image3.jpg', description: 'Description for Image 3' },
          // Add more items as needed
        ]
      };
    }
  };
  </script>
  
  
  