import Vue from 'vue'
import Vuex from 'vuex'

import Server from './serverConfigurations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    palabra: 'Palabra',
    definicion:'Definicion', 
    ejemplos: [],
    listaPalabrasPorLetra: [],
    letra: ''
  },
  mutations: {// Sirve para actualizar/cambiar informacion de las variables declaradas arriba(state)

    setLetraParaPalabras(state, letra) { // Para obtener todas las palabras relacionadas con la letra que se ha seleccionada

      if (letra.toLowerCase() != state.letra.toLowerCase()) {//Solo va a realizar busqueda cuando se digite una letra diferente
      
        Server.getPalabrasPorLetra(letra).then(result =>{
          state.listaPalabrasPorLetra = result
        })
      }
    },
    setPalabra(state, palabra){
      
      if(palabra.toLowerCase() != state.palabra.toLowerCase()){
        
        Server.buscarPalabra(palabra).then(result =>{
          
          state.palabra = result.palabra
          state.definicion = result.definicion
          state.ejemplos = result.ejemplos
        })
      }
    }
  },
  getters:{
    getEjemplos: state => state.ejemplos,
    getDefinicion: state => state.definicion,
    getPalabra: state => state.palabra,
    getPalabrasPorLetra: state => state.listaPalabrasPorLetra,
    getLetra: state => state.letra
  }
})
