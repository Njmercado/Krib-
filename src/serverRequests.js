import axios from 'axios'

const KEY = '5cf2e66408166968da3b30b4'
// const serverName = 'https://dicapi.kribi.com.co/'
const serverName = 'http://localhost:5000/'

const oneWeek = 60 * 60 * 24 * 7

const headers = {
  'x-authorization-server': `Basic ${KEY}`,
  'Cache-Control': `max-age=${oneWeek}`
}

class Server {
  static async getPalabrasPorLetra (letra, page) {
    const result = await axios
      .get(`${serverName}words/list/${letra}/9/${page}`, {
        headers
      })
    return result.data.response
  }

  static async buscarPalabra (palabra) {
    let data = await axios
      .get(`${serverName}words/byWord/${palabra}/true`, {
        headers
      })

    return data.data.response[0]
  }

  static async autoCompletado (value) {
    const result = await axios
      .get(`${serverName}words/byWord/${value}/false`, {
        headers
      })
    return result.data.response
  }

  static async palabrasRandom (cantidad) {
    const result = await axios
      .get(`${serverName}words/random/${cantidad}/10`, {
        headers
      })
    return result.data.response
  }

  static async getArticles () {
    try {
      const result = await axios.get(`${serverName}articles`, {
        headers
      })
      return result.data.data
    } catch (err) {
      throw err.response
    }
  }
}

export default Server
