import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Server from './serverRequests'
import ShowNews from './views/ShowNews.vue'
import Store from './store'

(() => {
  Server.getArticles().then(response => {
    Store.commit('setArticles', response)
  })
  // await configRoutes()
})()

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kajangarí',
    name: 'Kajangarí',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/Diccionario.vue')
  },
  {
    path: '/arrelike',
    name: 'Arrelike',
    component: () => import('./views/Juegos.vue')
  },
  {
    path: '/chakero',
    name: 'Chakero',
    // component: () => import('./views/Noticias.vue')
    component: () => import('./views/Noticias.vue')
  },
  {
    path: '/suto',
    name: 'Suto',
    component: () => import('./views/Creditos.vue')
  },
  {
    path: '/bentorriyo',
    name: 'Bentorriyo',
    // component: () => import('./views/Tienda.vue')
    component: () => import('./views/templateOnDevelopPage.vue')
  },
  // {
  //   path: '/actividades',
  //   name: 'Actividades',
  //   // component: () => import('./views/Tienda.vue')
  //   component: () => import('./views/templateOnDevelopPage.vue')
  // },
  {
    path: '/chakero/:id',
    name: 'Noticia',
    props: true,
    component: ShowNews
  },
  {
    path: '/contactos',
    name: 'Contactos',
    component: () => import('./views/Contactos.vue')
  },
  {
    path: '/yurumbí',
    name: 'Yurumbí',
    component: () => import('./views/Yurumbi.vue')
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
