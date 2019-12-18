<template>
  <v-row
    style="background-color: #E0E0E0; 
           border-radius: 10px;
           height: auto;
           margin-bottom: 5vh;"
    >
      <v-btn 
        v-for="(word, index) in words" 
        :key="word"
        style="margin: 1vh"
        class="btn"
        color="#e09518"
        dark
        small
        rounded
      >
        {{word}}
      </v-btn>
    </v-row>
</template>

<script>

export default {

  name: "WordList",
  props:[
    "words",
  ],
  methods:{

  },
  components:{

  }  
} 
</script>

<style scoped>

</style>

