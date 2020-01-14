import axios from 'axios'

const KEY = '5cf2e66408166968da3b30b4'
// const serverName = 'http://167.71.249.170:5000/'
const serverName = 'http://localhost:5000/'

class Server {
  static async getPalabrasPorLetra (letra) {
    const result = await axios.get(`${serverName}buscar/lista_palabras?letra=${letra}&key=${KEY}`)
    return result.data.response
  }

  static async buscarPalabra (palabra) {
    const result = await axios.get(`${serverName}buscar/palabra?palabra=${palabra}&key=${KEY}`)
    return {
      definicion: result.data.definicion,
      ejemplos: result.data.ejemplos,
      palabra: result.data.palabra
    }
  }

  static async autoCompletado (value) {
    const result = await axios.get(`${serverName}buscar/palabra/autocompletado?palabra=${value}&key=${KEY}`)
    return result.data.response
  }

  static async palabrasRandom (cantidad) {
    const result = await axios.get(`${serverName}buscar/random?cantidad=${cantidad}&key=${KEY}`)
    return result.data.response
  }
}

export default Server
