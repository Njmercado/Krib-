import axios from 'axios'
import download from 'downloadjs'

const serverName = 'http://localhost:5000/'

class Server {
  
  static async getPalabrasPorLetra(letra) {
      
    const result = await axios.get(`${serverName}buscar/lista_palabras?letra=${letra}`)
    return result.data.response.map(res => ({palabra:res}))
  }

  static async buscarPalabra(palabra){

    const result = await axios.get(`${serverName}buscar/palabra?palabra=${palabra}`)
    return {
      definicion: result.data.definicion,
      ejemplos: result.data.ejemplos,
      palabra: result.data.palabra
    }
  }

  static async descargarCurso(){
  
    axios.get(`${serverName}download/curso`, 
      {
        responseType: 'blob'
      }
    ).then(response=>{
        
        const content = response.headers['content-type']
        download(response.data, "Curso Lengua Palenque.pdf", content)
    })
  }
}

export default Server
