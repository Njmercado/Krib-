<template>
  <v-dialog max-width="60vw">
    <template v-slot:activator="{ on }">
      <v-icon v-on="on" ref="activate"></v-icon>
    </template>
    <!--<slot slot="activator"> </slot>-->
    <v-card>
      <v-card-title class="titulo">
        <v-col justify="center">
          <div id="titulo" class="white--text">
            {{getPalabra}}
          </div>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row 
            class="white--text definicion"
            justify="center"
            align="center"
            wrap
          >
            {{getDefinicion}}
          </v-row>
          <v-row
            v-for="(i,index) in getEjemplos" 
            :key="index"
            class="white--text ejemplo"
            justify="center"
            align="center"
          >
            {{i.ejemplo}}
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex' 

export default{
  name: "Modal",
  props:[
    "open"
  ],
  watch:{
    //Hago esto, porque por alguna razon no funcionó la version anterior a este componente.
    //Esto activa el modal, haciendo un "clic" en el componente llamado "activate",
    //el cual está dentro del llamado al slot en el template de la linea 3 
    open: function(val){
      this.$refs.activate.$el.click()//Activo el elemento que abrirá el modal
    }
  },
  computed: {
    ...mapGetters(['getPalabra', 'getDefinicion', 'getEjemplos'])
  }
}

</script>

<style>

.titulo{
  background:#8c3420; 
  height: 15vh;
  font-size: 2vw;
} 

.definicion{
  background: #d99b29;  
  height: 5vh;
  border-radius: 1vw;
  font-size: calc(0.7em + 0.5vw);
}

.ejemplo{
  background: #bfbeaa;
  margin-top: 2vw;
  height: 5vh;
  border-radius: 1vw;
  font-size: calc(0.60em + 0.5vw);
}

</style>
