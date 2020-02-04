<template>
  <v-container fluid>
    <v-row style="margin-top: -8vh">
      <CarrouselNews :news="news"></CarrouselNews>
    </v-row>
    <v-row>
      <v-row justify="center" class='description'>
        <v-col cols="11">
          <label class='tituloDescripcion'>DICCIONARIO PALENQUERO</label> <br>
          <label class='contenidoDescripcion'>
            El diccionario virtual de la Lengua Palenquera, <kbd style="background-color: #c1000c">Kribí</kbd>,
            es una herramienta Web la cual permite a sus usuarios la búsqueda y práctica para el aprendizaje
            de forma rapida y precisa del léxico Palenquero.
          </label>
        </v-col>
      </v-row>

      <!-- Letras del diccionario -->
      <v-row style='background-color: var(--kribi-brown); padding: 0 .8em 0 .8em' justify="center">
        <v-col v-for='(i, index) in letras' :key='index'>
          <v-btn
            class='btn letter'
            color='brown darken-2'
            @click.stop='letra = i'
            fab dark small
          >
            {{i}}
          </v-btn>
        </v-col>
      </v-row>
      <v-container fluid grid-list-md grid-list-lg>
        <v-row justify='center'>
          <v-col align='center' cols='6' xs='6' sm='6' md='2' lg='2'>
            <v-card
              color='#562011'
              style='font-weight: bold; font-size: calc(3vh + 3vw)'
              width='2em'
              dark
            >
              {{letra}}
            </v-card>
          </v-col>
        </v-row>
        <v-row justify='center'>
          <v-col cols='8' xs='4' md='4'>
            <v-text-field
              label='consultar'
              placeholder='consultar'
              color='#562011'
              v-on:keyup='setAutoCompletado(valueTextField)'
              v-model='valueTextField'
              append-icon='mdi-send-circle'
              solo rounded dense
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row justify="center" align="center">
          <v-col
            cols="12" xs="12" sm="12" md="auto" lg="auto" xl="auto"
            v-for="(palabra, index) in getPalabrasPorLetra"
            :key="index"
            @click='mostrarModal(palabra)'
          >
            <Word :word='palabra' size="16"></Word>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <Modal
      :open='openModal'
      :palabra='getPalabra'
      :ejemplos='getEjemplos'
      :definicion='getDefinicion'
      :idioma='getIdioma'
    >
    </Modal>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapMutations, mapGetters } from 'vuex'
import Modal from '@/components/Modal'
import Word from '@/components/Word'
import CarrouselNews from '@/components/CarrouselNews'

export default {
  name: 'Home',
  data: () => ({
    letras: ['A', 'B', 'CH', 'D', 'E', 'F', 'G', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ',
      'O', 'P', 'R', 'S', 'T', 'U'],
    openModal: false,
    letra: 'A',
    valueTextField: '',
    news: [
      {
        photo: 'https://res.cloudinary.com/kribi/image/upload/v1580701399/dictionary/introductory_dictionary_img.jpg',
        title: 'Palenque',
        description: 'Niños en palenque',
        link: '/',
        cover: true
      }
    ]
  }),
  mounted () {
    setTimeout(() => {
      this.getArticles.forEach(el => this.news.push(el))
    }, 400)
  },
  computed: {
    ...mapGetters([
      'getPalabrasPorLetra',
      'getAutoCompletado',
      'getPalabra',
      'getDefinicion',
      'getEjemplos',
      'getIdioma',
      'getArticles'
    ])
  },
  watch: {
    letra (val) {
      this.setLetraParaPalabras(val)
    }
  },
  methods: {
    ...mapMutations(['setLetraParaPalabras', 'setPalabra', 'setAutoCompletado', 'setArticles']),
    async mostrarModal (value) {
      await this.setPalabra(value) // Envio la palabra que va a ser buscada
      this.openModal = await !this.openModal
    }
  },
  components: {
    Modal,
    Word,
    CarrouselNews
  }
}
</script>

<style scope>

:root{
  --krbi-red:  #8c3420;
  --kribi-yellow: #E09518;
  --kribi-brown: #562011;
}

.description{
  background: var(--kribi-yellow);
  color: var(--kribi-brown);
}

.letter {
  font-size: 1em;
  cursor: pointer;
  color: var(--kribi-yellow);
}

.tituloDescripcion{
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: calc(1.5vh + 1.5vw);
  font-family:  'Comic Sans MS', cursive, sans-serif;
  font-weight: bolder
}

.contenidoDescripcion{
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 1em;
}

</style>
