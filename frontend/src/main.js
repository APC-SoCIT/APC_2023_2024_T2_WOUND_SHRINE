import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue';
import About from './components/AboutPage.vue';
import Services from './components/ServicesComponent.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/aboutPage', component: About },
    { path: '/ServicesComponent', component: Services },
    // add your routes here
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');