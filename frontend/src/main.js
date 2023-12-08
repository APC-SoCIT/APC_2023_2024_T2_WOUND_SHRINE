import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue';
import About from './components/AboutPage.vue';
import services from './components/ServicesComponent.vue';
import Contact from './components/ContactInfo.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: services },
    { path: '/contact', component: Contact },
    // add your routes here
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');