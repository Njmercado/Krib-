import Vue from 'vue'
import Vuex from 'vuex'

import Server from './serverRequests.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    palabra: 'Palabra',
    definicion: 'Definicion',
    ejemplos: [],
    idioma: 'Espanol',
    listaPalabras: [],
    letra: '',
    randomWords: '',
    articles: []
  },
  mutations: {// Sirve para actualizar/cambiar informacion de las variables declaradas arriba(state)
    setLetraParaPalabras (state, data) { // Para obtener todas las palabras relacionadas con la letra que se ha seleccionada
      if (data.letra.toLowerCase() !== state.letra.toLowerCase()) { // Solo va a realizar busqueda cuando se digite una letra diferente
        Server.getPalabrasPorLetra(data.letra, data.page).then(result => {
          state.listaPalabras = result
        })
      }
    },
    async setPalabra (state, palabra) {
      // Si la palabra no ha sido buscada antes.
      if (palabra.toLowerCase() !== state.palabra.toLowerCase()) {
        await Server.buscarPalabra(palabra).then(result => {
          state.palabra = result.palabra
          state.definicion = result.definicion
          state.ejemplos = result.ejemplos
          state.idioma = result.idioma
        })
      }
    },
    setAutoCompletado (state, palabra) {
      if (palabra.length > 2) {
        Server.autoCompletado(palabra).then(result => {
          state.listaPalabras = result
        })
      } else {
        state.listaPalabras = []
      }
    },
    setRandomWords (state, numeroPalabras) {
      Server.palabrasRandom(numeroPalabras).then(result => {
        state.randomWords = result.map(el => ({
          palabra: el.palabra.toLowerCase(),
          definicion: el.definicion.toLowerCase()
        }))
      })
    },
    setArticles (state, articles) {
      state.articles = articles
    }
  },
  getters: {
    getEjemplos: state => state.ejemplos,
    getDefinicion: state => state.definicion,
    getPalabra: state => state.palabra,
    getIdioma: state => state.idioma,
    getPalabrasPorLetra: state => state.listaPalabras,
    getLetra: state => state.letra,
    getRandomWords: state => state.randomWords,
    getArticles: state => state.articles
  }
})
