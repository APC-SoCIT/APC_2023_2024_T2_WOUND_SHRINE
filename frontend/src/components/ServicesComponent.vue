<template>
  <div>
    <!-- Other components and content go here -->
    <h1>CAMPER CAFE</h1>
            <p>Est. 2020</p>
    <h2>Contact Information</h2>
    <!-- Vue Slick Carousel -->
    <VueSlickCarousel :options="carouselOptions">
      <!-- Carousel items go here -->
      <div v-for="item in carouselItems" :key="item.id" class="carousel-item">
        <img :src="item.image" alt="Carousel Image" />
        <div class="caption">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </VueSlickCarousel>

    <!-- Other components and content go here -->
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  components: {
    VueSlickCarousel,
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

/* Add additional styles as needed */
</style>
