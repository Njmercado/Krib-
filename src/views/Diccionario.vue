<template lang="pug">
v-app
  div#begin
    div.container#buscar    
      div.row.justify-content-center
        div
          input#inputText(placeholder="Palabra a ser Buscada" ref="busqueda") 
        div
          button#buscarPalabra(@click="mostrarModal") Buscar
    div#principal.container
      div.row.justify-content-center
        div#alfabeto.col-sm-9.col-xs-12
          div.row(v-for="i in 4").justify-content-center
            label(v-for="j in 6" :key="j" :id="letras[j-1 + (i-1)*6]" @click="setLetraParaPalabras(letras[j-1 + (i-1)*6])") {{letras[j-1 + (i-1)*6]}}
        div#resultado.col-sm-3.col-xs-12
          div.row(v-for="i in getPalabrasPorLetra").justify-content-center
            label(@click="mostrarModal") {{i.palabra}}
    Modal
      v-card(ref="modal") 
</template>

<script>
//importaciones, componentes
import {mapMutations} from "vuex"
import {mapGetters} from "vuex"
import Modal from "@/components/Modal"

export default{
  data(){
    return {
      letras:["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "Z"],
    } 
  },
  computed:{
    ...mapGetters(['getPalabrasPorLetra']),
  },
  methods:{
    ...mapMutations(['setLetraParaPalabras', 'setPalabra']),
    mostrarModal(){

      var value = this.$refs.busqueda.value
      this.setPalabra(value)//Envio la palabra que va a ser buscada

      this.$refs.modal.$el.click()//Activo el elemento que abrirá el modal
    },
  },
  components:{
    Modal
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
  border-radius: 25px;
  border: 2px solid gray;
  height: 40vw;
  width: 30vw;
  text-align: center;
  overflow-y: scroll;
}

div#principal{
  margin-top: 10px;
}

#resultado>div>label{
  cursor:pointer;
  font-size: 2vw;
  color: #8c3420;
}

  #alfabeto>div>label{
    margin-left: 5vw;
    font-size: 6vw;
    color:#dba238;
    cursor:pointer; 
  }
</style>
