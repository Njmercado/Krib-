import axios from 'axios'

const KEY = '5cf2e66408166968da3b30b4'
const serverName = 'https://dicapi.kribi.com.co/'
// const serverName = 'http://localhost:5000/'

class Server {
  static async getPalabrasPorLetra (letra, page) {
    const result = await axios
      .get(
        `${serverName}words/list/${letra}/${page}`,
        {
          headers: {
            'x-authorization-server': `Basic ${KEY}`
          }
        }
      )
    return result.data.response
  }

  static async buscarPalabra (palabra) {
    let data = await axios
      .get(
        `${serverName}words/info/${palabra}`,
        {
          headers: {
            'x-authorization-server': `Basic ${KEY}`
          }
        }
      )

    data = data.data[0]
    return {
      definicion: data.definicion.split('/'),
      ejemplos: data.ejemplos,
      palabra: data.palabra,
      idioma: data.idioma
    }
  }

  static async autoCompletado (value) {
    const result = await axios
      .get(
        `${serverName}words/byWord/${value}`,
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
