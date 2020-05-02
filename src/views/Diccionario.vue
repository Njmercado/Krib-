<template>
  <div style="min-height: 100%; background-color: var(--yellow-background)">

    <!-- Searcher -->
    <v-container fluid style="background-color: #6E2E1E; min-height: 20em; padding-top: 9%; padding-bottom: 9%">
      <v-img data-aos="zoom-in" :src="require('@/assets/icono-diccionario.png')" contain aspect-ratio="10"></v-img>
      <v-col cols='8' xs='7' sm="7" md='4' class="mx-auto">
        <v-text-field
          placeholder='Buscar'
          color='#562011'
          v-on:keyup='setAutoCompletado(valueTextField); someLetterButtonHasBeenPressed = false'
          v-model='valueTextField'
          solo
        ></v-text-field>
      </v-col>
      <v-btn class="btn" small color="#dea44a" style="color: 53220c" @click="openDictionaryInfoModal()" data-aos="zoom-in">más info</v-btn>
    </v-container>

    <!-- Letras del diccionario -->
    <v-row style="background-color: #DEA44A; padding-left: 2em; padding-right: 2em" justify="center">
      <Word
        style="margin-left: calc(.1vw - .1vh); margin-right: calc(.1vw - .1vh)"
        v-for='(i, index) in letras' :key='index'
        :word="i"
        :color=" letra === i ? '#6E2E1E' : '#DEA44A'"
        :text-color=" letra === i ? '#DEA44A' : '#6E2E1E'"
        size="4vh"
        :elevation="false"
        @click.native='letra = i; someLetterButtonHasBeenPressed = true'
        data-aos="zoom-in"
      ></Word>
    </v-row>
    <!-- <v-row style="margin-top: 2em; margin-bottom: 2em" justify='center'>
      <Word
        data-aos="zoom-in"
        color='#DEA44A'
        text-color='#6E2E1E'
        :word="letra"
        :size="64"
        style="width: 6em;"
      ></Word>
    </v-row> -->

    <v-container style="min-height: 55vh">
      <v-row justify='space-around' align="center" style="min-height: 50vh">
        <v-col
          cols='12'
          xs='12'
          sm='12'
          md='auto'
          lg='auto'
          xl='auto'
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
    letra: '',
    valueTextField: '',
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
  watch: {
    letra (val) {
      this.setLetraParaPalabras({ letra: val, page: 0 })
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
