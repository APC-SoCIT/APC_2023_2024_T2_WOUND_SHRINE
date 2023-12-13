<template>
  <div id="app">
    <nav>
      <div class="menu-icon" @click="toggleMenu">
        <!-- Clickable icon here -->
        <i class="fas fa-bars"></i>
      </div>
      <ul :class="{ 'menu-open': isMenuOpen }">
        <!-- Navigation links -->
        <router-link to="/">HOME</router-link>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/blogpost">BLOG</router-link>
        <router-link to="/ServicesComponent">Services</router-link>
        <router-link to="/contact">Contact</router-link>
        <!-- Login and Register links -->
        <li v-if="isMenuOpen" class="menu-item"><router-link to="/register">Register</router-link></li>
        <li v-if="isMenuOpen" class="menu-item"><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
/* Your styling goes here */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #760e0e;
}

nav {
  background-color: #ffaa2b;
  overflow: hidden;
  height: 2em;
  display: flex;
  justify-content: center;
  color: black;
}

.menu-icon {
  cursor: pointer;
  margin-right: 10px;
}

ul {
  color: black;
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  transition: transform 0.3s ease-in-out;
}

router-link {
  display: inline-block;
  color: black;
  color: rgb(0, 0, 0);
  text-decoration: none;
  display: flex;
}

router-link:hover {
  background-color: #000000;
  color: rgb(0, 0, 0);
}

.menu-item {
  display: inline-block;
  margin-top: 10px;
}

.menu-open {
  transform: translateX(0%);
}
</style>
