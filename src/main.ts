import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import Nakhonsi from './components/Nakhonsi.vue'
import Nakhonsawan from './components/Nakhonsawan.vue'
import Nonthaburi from './components/Nonthaburi.vue'
import Narathiwat from './components/Nara.vue'
import Uthaithani from './components/Uthaithani.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/NakhonSiThammarat', component: Nakhonsi},
  { path: '/NakhonSawan', component: Nakhonsawan},
  { path: '/Nonthaburi', component: Nonthaburi},
  { path: '/Narathiwat', component: Narathiwat},
  { path: '/UthaiThani', component: Uthaithani},
  { path: '/Path', component: Home},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const watdai = createApp(App)
watdai.use(router)
watdai.mount('#app')
