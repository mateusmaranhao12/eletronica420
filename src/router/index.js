import { createRouter, createWebHistory } from 'vue-router'

import AnunciarOferta from '@/views/AnunciarOferta.vue'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path: '/anunciar-oferta',
    component: AnunciarOferta
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
