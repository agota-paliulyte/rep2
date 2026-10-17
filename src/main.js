import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import FactsView from './views/FactsView.vue'
import AboutView from './views/AboutView.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/facts', name: 'facts', component: FactsView },
    { path: '/about', name: 'about', component: AboutView },
  ],
  scrollBehavior() { return { top: 0 } },
})

createApp(App).use(router).mount('#app')
