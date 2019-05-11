<template lang="pug">
  v-dialog(max-width="60vw")
    slot(slot="activator")
    v-card
      v-card-title.titulo
        div#titulo
          label {{getPalabra}}
      v-card-text
        v-container(grid-list-md)
          div#definicion
            label {{getDefinicion}}
          div#ejemplos
            div#ejemplo(v-for="i,index in getEjemplos" :key="index")
              label {{i.ejemplo}} 
</template>

<script>
import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex' 

export default{
  name: "Modal",
  methods:{
  },
  computed: {
    ...mapGetters(['getPalabra', 'getDefinicion', 'getEjemplos'])
  }
}

</script>

<style>

.titulo{
  background:#8c3420; 
  color: white;
  text-align: center;
  height: 60%;
  font-size: 2vw;
} 

div#definicion{
  background: #d99b29;  
  height: 10vw;
  color: white;
  border: 2px solid;
  border-radius: 1vw;
  font-size: calc(0.60em + 0.5vw);
  width: 100%;
  height: 100%;
}

div#ejemplo{
  background: #bfbeaa;
  margin-top: 2vw;
  height: 100%;
  border-radius: 10px;
  font-size: calc(0.60em + 0.5vw);
  color: white;
}

</style>
