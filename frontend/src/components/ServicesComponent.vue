<template>
    <div>
      <h1>Vue Slick Carousel Demo</h1>
  
      <div class="carousel-container">
        <Carousel :options="carouselOptions">
          <div v-for="item in carouselItems" :key="item.id" class="carousel-item">
            <img :src="item.image" alt="Carousel Image" />
            <div class="caption">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  </template>
  
  <script>
  import Carousel from 'vue-slick-carousel';
  
  export default {
    components: {
      Carousel,
    },
    data() {
      return {
        carouselOptions: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
        },
        carouselItems: [
          { id: 1, image: 'path/to/image1.jpg', title: 'Description 1', description: 'Lorem ipsum 1' },
          { id: 2, image: 'path/to/image2.jpg', title: 'Description 2', description: 'Lorem ipsum 2' },
          { id: 3, image: 'path/to/image3.jpg', title: 'Description 3', description: 'Lorem ipsum 3' },
          // Add more items as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    margin-top: 30px;
  }
  
  .carousel-item {
    position: relative;
  }
  
  .carousel-item img {
    width: 100%;
  }
  
  .caption {
    position: absolute;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    padding: 10px;
    text-align: center;
  }
  </style>
  