import { createRouter, createWebHistory } from 'vue-router'

import AnunciarOferta from '@/views/AnunciarOferta.vue'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/', //rota raíz da aplicação
    component: Home,
    props: true
  },

  {
    path: '/anunciar-oferta', //rota anunciar oferta
    component: AnunciarOferta,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
