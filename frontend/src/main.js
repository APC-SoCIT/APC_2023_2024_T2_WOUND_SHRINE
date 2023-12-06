import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue';
import About from './components/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    // add your routes here
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');