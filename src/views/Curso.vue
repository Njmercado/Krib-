<template lang="pug">
  v-app
    v-container(fill-height)
      v-layout(justify-center align-center row )
        v-flex(xs11 sm10 lg6 xl6)
          v-card(color="#8c3420")
            v-card-text.color(@click="descargarCurso") Curso introductorio al Palenque, para quienes quieren adentrarse en la cultura palenquera. Haz clic encima de esta información y el curso será descargado en breve. 

</template>

<script>
import Server from '../serverConfigurations'

export default {
  name:"Curso",
  methods:{
    descargarCurso: () => {
    
      Server.descargarCurso()
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
