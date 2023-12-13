import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import RegisterPage from './components/RegisterPage.vue';
import LoginPage from './components/LoginPage.vue';
import Home from './components/HomePage.vue';
import About from './components/AboutPage.vue';
import Blog from './components/BlogPost.vue';
import services from './components/ServicesComponent.vue';
import Contact from './components/ContactInfo.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/register', component: RegisterPage },
    { path: '/login', component: LoginPage },
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
    { path: '/services', component: services },
    { path: '/contact', component: Contact },
    // add your routes here
  ],
});

const app = createApp(App);

app.use(router);
app.component('VueSlickCarousel', VueSlickCarousel)

app.mount('#app');