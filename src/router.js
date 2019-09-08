import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/diccionario',
      name: 'Diccionario',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Diccionario.vue')
    },
    {
      path:'/curso',
      name: 'Curso',
      component:()=> import('./views/Curso.vue')
    },
    {
      path: '/chakero',
      name: 'Chakero',
      component: () => import('./views/Noticias.vue')
    },
    {
      path: '/creditos',
      name: 'Creditos',
      component: ()=>import('./views/Creditos.vue')
    },
    {
      path: '/bentorriyo',
      name: 'Bentorriyo',
      component: () => import('./views/Tienda.vue')
    },
    { 
      path: '*', 
      redirect: '/' 
    }, // catch all use case
  ]
})
