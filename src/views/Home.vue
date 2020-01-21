<template>
  <div id='begin'>
    <div id='imagenInicio'>
      <img
        src='../../public/img/Images/portada.jpg'
        alt='logo kribi' />
    </div>
    <div id='contenido'>
      <div id='contenedor'>
        <div id='texto'>
          <label class='tituloDescripcion'>DICCIONARIO PALENQUERO</label>
          <div>
            <label class='contenidoDescripcion'>
              El diccionario virtual de la Lengua Palenquera <span style='font-weight: bold'>'Kribí'</span>
              es una herramienta Web, la cual permite a sus usuarios la búsqueda y práctica para el aprendizaje
              de forma rapida y precisa del léxico Palenquero
            </label>
          </div>
        </div>
      </div>
        <!-- Letras del diccionario -->
        <v-row
          style='background-color: #562011; padding: .8em'
          justify="center"
        >
          <v-col
            v-for='(i, index) in letras'
            :key='index'
          >
            <v-btn
            style='font-size: 1em;
                  cursor: pointer;
                  font-weight: bold;'
              class='btn'
              color='brown darken-2'
              @click.stop='letra = i'
              fab
              dark
              small
            >
              {{i}}
            </v-btn>
          </v-col>
        </v-row>
        <v-container
          id='diccionario'
          fluid
          grid-list-md
          grid-list-lg
        >
          <v-row
            justify='center'
          >
            <v-col
              align='center'
              cols='6' xs='6' sm='6' md='2' lg='2'
            >
              <v-card
                color='#562011'
                dark
                style='font-weight: bold; font-size: calc(3vh + 3vw)'
                width='2em'
              >
                {{letra}}
              </v-card>
            </v-col>
          </v-row>
          <v-row
            justify='center'
          >
            <v-col
              cols='8'
              xs='4'
              md='4'
            >
              <v-text-field
                label='consultar'
                placeholder='consultar'
                color='#562011'
                v-on:keyup='setAutoCompletado(valueTextField)'
                v-model='valueTextField'
                append-icon='mdi-send-circle'
                solo
                rounded
                dense
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row
            justify='center'
          >
            <v-col
              :key='index'
              v-for='(palabra, index) in getPalabrasPorLetra'
              xs='6'
              sm='6'
              md='2'
              lg='2'
              xl='2'
            >
              <v-btn
                color='#E09518'
                class='btn'
                style='color:#562011; font-weight: bold'
                @click='mostrarModal(palabra)'
              >
                {{palabra}}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
    </div>
    <Modal
      :open='openModal'
      :palabra='getPalabra'
      :ejemplos='getEjemplos'
      :definicion='getDefinicion'
      :idioma='getIdioma'
    >
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapMutations, mapGetters } from 'vuex'
import Modal from '@/components/Modal'

export default {
  name: 'Home',
  data: () => ({
    letras: ['A', 'B', 'CH', 'D', 'E', 'F', 'G', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ',
      'O', 'P', 'R', 'S', 'T', 'U'],
    openModal: false,
    letra: 'A',
    valueTextField: ''
  }),
  computed: {
    ...mapGetters([
      'getPalabrasPorLetra',
      'getAutoCompletado',
      'getPalabra',
      'getDefinicion',
      'getEjemplos',
      'getIdioma',
    ])
  },
  watch: {
    letra (val) {
      this.setLetraParaPalabras(val)
    }
  },
  methods: {
    ...mapMutations(['setLetraParaPalabras', 'setPalabra', 'setAutoCompletado']),
    async mostrarModal (value) {
      await this.setPalabra(value) // Envio la palabra que va a ser buscada
      this.openModal = await !this.openModal
    }
  },
  components: {
    Modal
  }
}
</script>

<style scope>

:root{
  --krbi-red:  #8c3420;
  --kribi-yellow: #E09518;
  --kribi-brown: #562011;
}

#imagenInicio{
  width: 100%;
}

#imagenInicio > img{
  width: 100%;
  height: 100%
}

#contenedor{
  background: var(--kribi-yellow);
  height: 100%;
}

#texto{
  text-align: center;
  color: var(--kribi-brown);
  vertical-align: middle;
  width: 70%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.tituloDescripcion{
  margin-top: 5vh;
  margin-bottom: 5vh;
  font-size: calc(1.5vh + 1.5vw);
  font-family:  'Comic Sans MS', cursive, sans-serif;
  font-weight: bolder
}

.contenidoDescripcion{

  font-size: calc(1vh + 1vw);
  font-weight: 500;
}

</style>
