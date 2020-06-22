<template>
  <v-dialog
    min-width="50vw"
    persistent
    max-width="60vw"
    :fullscreen="isMobile()"
    v-model="closeWordGameModal"
  >

    <template v-slot:activator="{ on }">
      <v-icon v-on="on" ref="activate"></v-icon>
    </template>

    <v-card style="background-color: var(--yellow-background)">
      <v-card-text>
        <v-container fluid grid-list-md grid-list-lg>

            <v-row justify="center" align="center">

              <Soup
                :words = 'randomWords'
                @selectedWord="selectedWordHandler"
                @wordsFound="foundWordsHandler"
                :disabled="startGame"
              >
              </Soup>

              <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
                <label class="mb-10" style="color: brown; font-weight: bold; font-size: 2em">
                  {{foundWords}}
                </label>

                <Timer
                  :minutes="5"
                  :seconds="0"
                  :reset="resetTimer"
                  color="#E0E0E0"
                  @start="startHandler"
                  >
                </Timer>

                <WordList
                  :words="randomWords"
                  :deleteWord="selectedWord"
                  @nextLevel="nextLevelHandler"
                ></WordList>

                <v-btn
                  class="btn text-center text-lowercase"
                  @click="closeWordGameModal = false"
                  color="#b11100"
                  rounded dark small
                >
                  Cerrar
                </v-btn>
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
import { mapGetters, mapMutations } from 'vuex'

export default {

  name: 'WordGame',
  props: [
    'open'
  ],
  data: () => ({
    selectedWord: '',
    foundWords: 10,
    closeWordGameModal: false,
    startGame: false
  }),
  watch: {
    open: function (val) {
      this.$refs.activate.$el.click() // Activo el elemento que abrirá el modal

      // Cada vez que se abra este modal se generará una nueva sopa de letras
      // Por ende es necesario llamar esta funcion desde acá
      this.setRandomWords(8)
    },
    closeWordGameModal () {
      this.selectedWord = ''
      this.foundWords = 0
    }
  },
  computed: {
    ...mapGetters(['getRandomWords']),
    resetTimer () {
      return this.closeWordGameModal
    },
    randomWords () {
      return this.getRandomWords
    }
  },
  methods: {
    ...mapMutations(['setRandomWords']),
    foundWordsHandler (val) {
      this.foundWords = val
    },
    selectedWordHandler (val) {
      this.selectedWord = val
    },
    isMobile () {
      return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)
    },
    nextLevelHandler (val) {
      if (val) {
        this.setRandomWords(10)
      }
    },
    startHandler (val) {
      this.startGame = val
    }
  },
  components: {
    Timer,
    WordList,
    Soup
  }
}
</script>
