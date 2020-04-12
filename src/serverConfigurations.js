import axios from 'axios'

const KEY = '5cf2e66408166968da3b30b4'
const serverName = 'https://dicapi.kribi.com.co/'
// const serverName = 'http://localhost:5000/'

class Server {
  static async getPalabrasPorLetra (letra) {
    const result = await axios
      .get(
        `${serverName}buscar/lista_palabras?letra=${letra}`,
        {
          headers: {
            'x-authorization-server': `Basic ${KEY}`
          }
        }
      )
    return result.data.response
  }

  static async buscarPalabra (palabra) {
    const result = await axios
      .get(
        `${serverName}buscar/palabra?palabra=${palabra}`,
        {
          headers: {
            'x-authorization-server': `Basic ${KEY}`
          }
        }
      )
    return {
      definicion: result.data.definicion.split('/'),
      ejemplos: result.data.ejemplos,
      palabra: result.data.palabra,
      idioma: result.data.idioma
    }
  }

  static async autoCompletado (value) {
    const result = await axios
      .get(
        `${serverName}buscar/palabra/autocompletado?palabra=${value}`,
        {
          headers: {
            'x-authorization-server': `Basic ${KEY}`
          }
        }
      )
    return result.data.response
  }

  static async palabrasRandom (cantidad) {
    const result = await axios
      .get(
        `${serverName}buscar/random?cantidad=${cantidad}`,
        {
          headers: {
            'x-authorization-server': `Basic ${KEY}`
          }
        }
      )
    return result.data.response
  }

  static async getArticles () {
    try {
      const result = await axios.get(`${serverName}articles`, {
        headers: {
          'x-authorization-server': `Basic ${KEY}`
        }
      })
      return result.data.data
    } catch (err) {
      throw err.response
    }
  }
}

export default Server
