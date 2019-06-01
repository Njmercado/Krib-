import axios from 'axios'
import download from 'downloadjs'

const KEY = "5cf2e66408166968da3b30b4"
const serverName = 'http://kribi-server.herokuapp.com/'

class Server {
  
  static async getPalabrasPorLetra(letra) {
      
    const result = await axios.get(`${serverName}buscar/lista_palabras?letra=${letra}&key=${KEY}`)
    return result.data.response.map(res => ({palabra:res}))
  }

  static async buscarPalabra(palabra){

    const result = await axios.get(`${serverName}buscar/palabra?palabra=${palabra}&key=${KEY}`)
    return {
      definicion: result.data.definicion,
      ejemplos: result.data.ejemplos,
      palabra: result.data.palabra
    }
  }

  static async descargarCurso(){
  
    axios.get(`${serverName}download/curso?key=${KEY}`, 
      {
        responseType: 'blob'
      }
    ).then(response=>{
        
        const content = response.headers['content-type']
        download(response.data, "Curso Lengua Palenque.pdf", content)
    })
  }

  static async autoCompletado(value){
    
    const result = await axios.get(`${serverName}buscar/palabra/autocompletado?palabra=${value}&key=${KEY}`)

    return result.data.response.map(res => ({palabra: res}))
  }

}

export default Server
