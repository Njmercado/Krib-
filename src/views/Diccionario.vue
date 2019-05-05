<template lang="pug">
 div#begin
  div.container#buscar    
    div.row.justify-content-center
      input#inputText(placeholder="Palabra a ser Buscada") 
      span
        button#buscarPalabra Buscar
  div#principal.container
    div.row.justify-content-center
      div#alfabeto.col-sm-9.col-xs-12
        div.row(v-for="i in 4").justify-content-center
          label(v-for="j in 6" :key="j" :id="letras[j+i*4-4]") {{letras[j+i*5-5]}}
      div#resultado.col-sm-auto.col-xs-12
        div.row(v-for="i in 100").justify-content-center
          label hola
</template>

<script>

export default{
  data(){
    return {
      letras:["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "Z"]
    } 
  }
}

</script>

<style>

input#inputText{
  border: 2px solid #8b8b8b;
  background: #dbdbdb;
  width: 15em;
  height: 3em;
  border-radius: 10px;
  text-align: center;
}

button#buscarPalabra{
  background: #8c3420;
  color: white;
  height: 3em;
  width: 5em;
  border-radius: 10px;
}

div#buscar{
  margin-top: 20px;
}

div#resultado{
  border-radius: 10px;
  border: 2px solid gray;
  height: 40vw;
  width: 20vw;
  text-align: center;
  overflow-y: scroll;
}

div#principal{
  margin-top: 10px;
}

#alfabeto>div>label{
    margin-left: 05vw;
    font-size: 6vw;
    color:#dba238;
    cursor:pointer; 
  }
</style>
