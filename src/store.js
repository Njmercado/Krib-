import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    palabra: "Palabra",
    definicion: "sit amet, consectetur adipiscing elit. In blandit ligula dolor, nec porta magna interdum ac. Aliquam non cursus neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam congue sapien non felis imperdiet dictum. Aenean placerat nibh ac mi gravida, ac pretium quam auctor. Etiam quis augue id urna semper tincidunt et a nisl. Donec condimentum, enim",
    ejemplos: [
      {ejemplo: "Ejemplo numero 1 asdfasdf asdfasdfasd fasf asdf asdfasdfasdfasd fasdfasdfasfasdf"},
      {ejemplo: "Ejemplo numero 2 asdfasdf asdfasdfasd fasf asdf asdfasdfasdfasd fasdfasdfasfasdf"},
      {ejemplo: "Ejemplo numero 3 asdfasdf asdfasdfasd fasf asdf asdfasdfasdfasd fasdfasdfasfasdf"},
      {ejemplo: "Ejemplo numero 4 asdfasdf asdfasdfasd fasf asdf asdfasdfasdfasd fasdfasdfasfasdf"},
      {ejemplo: "Ejemplo numero 5 asdfasdf asdfasdfasd fasf asdf asdfasdfasdfasd fasdfasdfasfasdf"},
      {ejemplo: "Ejemplo numero 6 asdfasdf asdfasdfasd fasf asdf asdfasdfasdfasd fasdfasdfasfasdf"},
      {ejemplo: "Ejemplo numero 7 asdfasdf asdfasdfasd fasf asdf asdfasdfasdfasd fasdfasdfasfasdf"},
      {ejemplo: "Ejemplo numero 8 asdfasdf asdfasdfasd fasf asdf asdfasdfasdfasd fasdfasdfasfasdf"},
    ],
    listaPalabrasPorLetra:[
      {palabra: "Palabra A"}

    ],
    letra: "A"
  },
  mutations: {//Sirve para actualizar/cambiar informacion de las variables declaradas arriba(state)

    setLetraParaPalabras(state, letra){//Para obtener todas las palabras relacionadas con la letra que se ha seleccionada

      if(letra.toLowerCase() != state.letra.toLowerCase()) {//Solo va a realizar busqueda cuando se digite una letra diferente
      
        state.listaPalabrasPorLetra = [] //Limpio la lista, para cada letra que se presione
      
        //Acá debe ir la conexion al servidor para llenar la lista de palabras que se han elegido por letras.

        state.listaPalabrasPorLetra.push(
          {
            palabra: "Palabra 2"
          }
        )
      }
    },
    setPalabra(state, palabra){
      if(palabra.toLowerCase() != state.palabra.toLowerCase())
        state.palabra = palabra
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
