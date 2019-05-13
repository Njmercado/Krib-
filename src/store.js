import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    palabra: "Palabra",
    definicion: "sit amet, consectetur adipiscing elit. In blandit ligula dolor, nec porta magna interdum ac. Aliquam non cursus neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam congue sapien non felis imperdiet dictum. Aenean placerat nibh ac mi gravida, ac pretium quam auctor. Etiam quis augue id urna semper tincidunt et a nisl. Donec condimentum, enim",
    ejemplos: [],
    listaPalabrasPorLetra:[],
    letra: ""
  },
  mutations: {//Sirve para actualizar/cambiar informacion de las variables declaradas arriba(state)

    setLetraParaPalabras(state, letra){//Para obtener todas las palabras relacionadas con la letra que se ha seleccionada

      if(letra.toLowerCase() != state.letra.toLowerCase()) {//Solo va a realizar busqueda cuando se digite una letra diferente
      
        state.listaPalabrasPorLetra = [] //Limpio la lista, para cada letra que se presione
      
        axios.get("http://localhost:5000/palabras-por-letra?letra="+letra).then(response =>{
        
          response = response.data.response
          
          for(var i = 0; i < response.length; i++){
            state.listaPalabrasPorLetra.push(
              {
                palabra: response[i]
              }
            )  
          }     
        })
      }
    },
    setPalabra(state, palabra){
      if(palabra.toLowerCase() != state.palabra.toLowerCase()){
        
        state.palabra = palabra
        axios.get('http://localhost:5000/buscar-palabra?palabra='+palabra).then(response=>{
         
          state.palabra = response.data.palabra
          state.definicion = response.data.definicion
          
          state.ejemplos = []
          response.data.ejemplos.forEach(elem =>{
            state.ejemplos.push(elem.ejemplo)
          })

        }) 
      }
    }
  },
  actions: {

  },
  getters:{
    getEjemplos: state => state.ejemplos,
    getDefinicion: state => state.definicion,
    getPalabra: state => state.palabra,
    getPalabrasPorLetra: state => state.listaPalabrasPorLetra,
    getLetra: state => state.letra
  }
})
