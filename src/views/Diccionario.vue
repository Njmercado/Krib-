<template>
  <div style="min-height: 100%; background-color: var(--yellow-background)">

    <!-- Searcher -->
    <v-container fluid style="background-color: #6E2E1E; min-height: 20em; padding-top: calc(3vh + 3vw);">
      <img data-aos="zoom-in" :src="require('@/assets/icono-diccionario.png')" style="max-width: calc(9vh + 9vw)"/>
      <v-col cols='11' xs='7' sm="7" md='4' lg="6" class="mx-auto my-auto">
        <v-text-field
          placeholder='Buscar'
          color='#562011'
          v-on:keyup='setAutoCompletado(valueTextField); someLetterButtonHasBeenPressed = false'
          v-model='valueTextField'
          solo
        ></v-text-field>
      </v-col>
      <v-btn class="btn text-capitalize" small color="#dea44a" style="color: 53220c" @click="openDictionaryInfoModal()" data-aos="zoom-in">más info</v-btn>
    </v-container>

    <!-- Letras del diccionario -->
    <v-row style="background-color: #DEA44A; padding-left: 2em; padding-right: 2em" justify="center">
      <Word
        v-for='(i, index) in letras' :key='index'
        :word="i"
        :color=" letra === i ? '#6E2E1E' : '#DEA44A'"
        :text-color=" letra === i ? '#DEA44A' : '#6E2E1E'"
        size="4vh"
        :elevation='letra === i'
        @click.native='buscarPalabrasPorLetra(i); letra = i; someLetterButtonHasBeenPressed = true'
      ></Word>
    </v-row>

    <!-- Resultadao de las busquedas -->
    <v-container style="min-height: 55vh">
      <v-row align="center" style="min-height: 50vh">
        <v-col
          cols='6'
          xs='6'
          sm='6'
          md='3'
          lg='3'
          xl='3'
          v-for='(palabra, index) in getPalabrasPorLetra'
          :key='index'
          @click='mostrarModal(palabra.palabra)'
        >
          <Word color="transparent" text-color="#6E2E1E" :elevation="false" :word='palabra.palabra' size='20px'></Word>
        </v-col>
      </v-row>
      <v-row
        v-if='someLetterButtonHasBeenPressed'
        justify='center'
      >
        <v-btn color='#DEA44A' class="btn" small style='margin-right: 8px' @click='changePageOnWordsList(-1)'>
          <v-icon dark>arrow_left</v-icon>
        </v-btn>
        <v-chip>{{listWordsPage}}</v-chip>
        <v-btn color='#DEA44A' small style='margin-left: 8px' class="btn" @click='changePageOnWordsList(+1)' :disabled='isThereMoreWords'>
          <v-icon dark>arrow_right</v-icon>
        </v-btn>
      </v-row>
    </v-container>

    <Modal
      :open='openModal'
      :palabra='getPalabra'
      :ejemplos='getEjemplos'
      :definicion='getDefinicion'
      :idioma='getIdioma'
    ></Modal>

    <DictionaryInfoModal :open='dictionaryInfoModalOpener'></DictionaryInfoModal>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Modal from '@/components/Modal'
import Word from '@/components/Word'
import DictionaryInfoModal from '@/components/DictionaryInfoModal.vue'

export default {
  name: 'Diccionario',
  data: () => ({
    letras: [
      'A',
      'B',
      'CH',
      'D',
      'E',
      'F',
      'G',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'Ñ',
      'O',
      'P',
      'R',
      'S',
      'T',
      'U',
      'Y'
    ],
    openModal: false,
    valueTextField: '',
    letra: '',
    listWordsPage: 0,
    someLetterButtonHasBeenPressed: false,
    dictionaryInfoModalOpener: false
  }),
  computed: {
    ...mapGetters([
      'getPalabrasPorLetra',
      'getAutoCompletado',
      'getPalabra',
      'getDefinicion',
      'getEjemplos',
      'getIdioma'
    ]),
    isThereMoreWords () {
      return !this.getPalabrasPorLetra.length > 0
    }
  },
  methods: {
    ...mapMutations([
      'setLetraParaPalabras',
      'setPalabra',
      'setAutoCompletado',
      'setArticles'
    ]),
    async mostrarModal (value) {
      await this.setPalabra(value) // Envio la palabra que va a ser buscada
      this.openModal = await !this.openModal
    },
    changePageOnWordsList (val) {
      this.listWordsPage =
        this.listWordsPage + val < 0 ? 0 : this.listWordsPage + val
      this.setLetraParaPalabras({
        letra: this.letra,
        page: this.listWordsPage
      })
    },
    openDictionaryInfoModal () {
      this.dictionaryInfoModalOpener = !this.dictionaryInfoModalOpener
    },
    buscarPalabrasPorLetra (letra) {
      this.setLetraParaPalabras({ letra: letra, page: 0 })
    }
  },
  components: {
    Modal,
    Word,
    DictionaryInfoModal
  }
}
</script>

<style>
  .letter {
    font-weight: bold;
  }
</style>
