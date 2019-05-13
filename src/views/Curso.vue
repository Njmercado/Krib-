<template lang="pug">
  v-app
    v-container(fill-height)
      v-layout(justify-center align-center row )
        v-flex(xs11 sm10 lg6 xl6)
          v-card(color="#8c3420")
            v-card-text.color(@click="descargarCurso") Gracias a la colaboracion del grupo estudiantil 'Makeda Kahina' junto con el apoyo de la Universidad del Norte, nos complace brindarles este curso introductorio de nuestra lengua caribe 'Palenque'. Para poder acceder a el, solo es necesario que hagas click sobre este mensaje y automaticamente se descargará el curso. Mucha suerte!!!

</template>

<script>
import axios from 'axios'
import download from 'downloadjs'

export default {
  name:"Curso",
  methods:{
    descargarCurso: () => {
      axios.get("http://localhost:5000/descargar-curso", 
        {
          responseType: 'blob'
        }
      ).then(response=>{
        
        const content = response.headers['content-type']
        download(response.data, "Curso Lengua Palenque.pdf", content)
      })
    }
  }
}

</script>


<style>
  
.color{
  color: #d99b29;
  cursor: pointer;
}

</style>
