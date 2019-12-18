<template>
  <v-col 
    cols="12" 
    xs='12' 
    sm='12'
    md="5"
    lg="5"
    xl="5"
  >
    <v-container
      style="background-color: #E0E0E0;
             border-radius: 10px;"
      >
      <v-row v-for="(row, i) in wordMatrix" :key="i" justify="center">
        <v-btn
          v-for="(val, j) in row" 
          :key="j+15*i" 
          @click="proof(val)" 
          class="btn"
          style="margin: .2vw; 
                 cursor: pointer;
                 width: calc(1vh + 1vw + .7em); 
                 height: calc(1vh + 1vw + .7em); 
                 padding: auto;
                 font-weight: bold"
          color="#e09518"
          small 
          fab
          text
        >
          {{ val }}
        </v-btn>
      </v-row>
    </v-container>
  </v-col>
</template>

<script>

export default {

  name: "Soup",
  data: () => ({
    wordMatrix: [
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",],
    ],

  }),
  methods:{
    proof(){
      console.log("casi casi")
    },
  },
  components:{
  }  
} 
</script>

<style>
</style>

