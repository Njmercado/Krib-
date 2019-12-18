<template>
  <v-dialog 
    min-width="50vw" 
    persistent 
    fullscreen 
    v-model="closeWordGameModal">

    <template v-slot:activator="{ on }">
      <v-icon v-on="on" ref="activate"></v-icon>
    </template>

    <v-card>
      <v-card-text>
        <v-container
          fluid
          grid-list-md
          grid-list-lg
        >
          <WordRecord :actualWord="actualWord" :foundWords="foundWords" ></WordRecord>

          <v-row
            justify="center"
            align="center"
          >
            <Soup @selectedWord="actualWord" @wordsFound="foundWords"></Soup>

            <v-col 
              cols="12" 
              xs="12" 
              sm="12"
              md="3"
              lg="3"
              xl="3"
              
            >
              <Timer 
                :minutes="0" 
                :seconds="10" 
                :stop="closeWordGameModal"
                color="#E0E0E0">
              </Timer>

              <WordList :words="words"></WordList>

              <v-row justify="center">
                <v-btn 
                  class="btn"
                  @click="closeWordGameModal = false"
                  color="#b11100"
                  rounded
                  dark
                >
                  Cerrar
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

  import Timer from '../Timer.vue'
  import Soup from './Soup.vue'
  import WordList from './WordList.vue'
  import WordRecord from './WordRecord.vue'
  
  export default {

    name: "WordGame",
    props:[
      'open'
    ],
    data: () => ({
      actualWord: '',
      foundWords: 10,
      words: ['hola', 'como', 'estas', 'espero', 'que', 'encuentres', 'mañana', 'malparida', 'televisor', 'computador'],
      closeWordGameModal: false,
    }),
    watch: {
      open: function(val){
        this.$refs.activate.$el.click()//Activo el elemento que abrirá el modal
      },
      closeWordGameModal(){
        this.actualWord = ''
        this.foundWords = 0
      },
    },
    components:{
      Timer,
      WordRecord,
      WordList,
      Soup,
    }  
  } 
</script>

<style scoped>

</style>

