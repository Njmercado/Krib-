import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Server from './serverConfigurations'
import ShowNews from './views/ShowNews.vue'
import Store from './store'

(() => {
  Server.getArticles().then(response => {
    Store.commit("setArticles", response)
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
  // {
  // path: '/diccionario',
  // name: 'Diccionario',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ './views/Diccionario.vue')
  // },
  {
    path: '/juegos',
    name: 'Juegos',
    component: () => import('./views/Juegos.vue')
  },
  {
    path: '/chakero',
    name: 'Chakero',
    // component: () => import('./views/Noticias.vue')
    component: () => import('./views/Noticias.vue')
  },
  {
    path: '/creditos',
    name: 'Creditos',
    component: () => import('./views/Creditos.vue')
  },
  {
    path: '/bentorriyo',
    name: 'Bentorriyo',
    // component: () => import('./views/Tienda.vue')
    component: () => import('./views/templateOnDevelopPage.vue')
  },
  {
    path: '/chakero/:id',
    name: 'articulo',
    props: true,
    component: ShowNews
  }
  /* {
    path: '*' ,
    redirect: ' / '
  }, // catch all use case
  */
]

// const configRoutes = () => {
//   Store.getters.getArticles.forEach((article, index) => {
//     routes.push({
//       path: `/${index}`,
//       name: `${article.title}`,
//       component: () => {
//         console.log("cargado config")
//         import('../public/markdown/test.js')
//       }
//     })
//   })
// }

// setTimeout(() => {
//   routes.push({
//     path: `/chakero/${Store.getters.getArticles[1].title.toLowerCase().split(' ').join('-')}`,
//     name: 'name hp',
//     component: () => import('../public/markdown/test.md')
//   })
// }, 1000)

export default new Router({
  mode: 'history',
  routes: routes
})
