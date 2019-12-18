<template>
  <div id="begin">
    <div id="imagenInicio">
      <img 
         src="../../public/img/Images/portada.jpg" 
         alt="logo kribi" />
    </div>
    <div id="contenido">
      <div id="contenedor">
        <div id="texto" style="margin-bottom: 5vh">
          <label class="tituloDescripcion">DICCIONARIO PALENQUERO</label>
          <div>
            <label class="contenidoDescripcion">
              El diccionario virtual de la Lengua Palenquera <span style="font-weight: bold">"Kribí"</span>
              es una herramienta Web, la cual permite a sus usuarios la búsqueda y práctica para el aprendizaje
              de forma rapida y precisa del léxico Palenquero
            </label> 
          </div>
        </div>
      </div>
        <!-- Letras del diccionario -->
        <v-row
          style="background-color: #562011; 
                 padding: 2vh;" 
        >
          <v-col
            v-for="(i, index) in letras"
            :key="index"
          >
            <v-btn
              fab
              class="btn"
              style="font-size:calc(1vh + 1vw); 
                     cursor: pointer; 
                     font-weight: bold"
              dark
              small
              color="brown darken-2"
              @click="letraSeleccionada = i"
            >
              {{i}}
            </v-btn>
          </v-col>
        </v-row>
        <v-container 
          id="diccionario" 
          fluid
          grid-list-md
          grid-list-lg
        >
          <v-row 
            justify="center"
          >
            <v-col
              align="center"
              cols="6"
              sm="6"
              xs="6"
              md="2"
              lg="2"
            >
              <v-card
                color="#562011"
                dark
                style="font-weight: bold; font-size: calc(3vh + 3vw)"
                width="12vw"
              >
                <div>
                  {{letraSeleccionada}}
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row
            justify="center"
          >
            <v-col
              cols="8"
              xs="4"
              md="4"
            >
              <v-text-field 
                label="consultar" 
                solo 
                rounded
                dense
                append-icon="mdi-send-circle"
                placeholder="consultar"
                color="#562011"
                v-on:keyup="setAutoCompletado(valueTextField)" 
                v-model="valueTextField"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row
            justify="center"
          >
            <v-col
              md="3"
              xs="6"
              sm="4"
              v-for="(palabras, index) in getPalabrasPorLetra"
              :key="index"
            >
              <v-btn 
                color="#E09518"
                class="btn"
                style="color:#562011; font-weight: bold"
                @click="mostrarModal(palabras.palabra)"
              >
                {{palabras.palabra}}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
    </div>
    <Modal :open="openModal">
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {mapMutations} from "vuex"
import {mapGetters} from "vuex"
import Modal from "@/components/Modal"

export default {
  name: 'Home',
  data: () => ({
    letras: ["A", "B", "CH", "D", "E", "F", "G", "I", "J", "K", "L", "M", "N", "Ñ", 
             "O", "P", "R", "S", "T", "U"],
    openModal: false, 
    letra: "A",
    valueTextField: ""
  }),
  computed: {
    getInformacion(){
      console.log(this.informationType)
      return this.information[this.informationType]
    },
    letraSeleccionada:{
      get() {
        return this.letra
      },
      set(val){
        this.letra = val
        this.setLetraParaPalabras(val)
      }
    },
    ...mapGetters(['getPalabrasPorLetra', 'getAutoCompletado']),
  },
  methods:{
    ...mapMutations(['setLetraParaPalabras', 'setPalabra', 'setAutoCompletado']),
    mostrarModal(value){

      this.setPalabra(value)//Envio la palabra que va a ser buscada

      //this.$refs.modal.$el.click()//Activo el elemento que abrirá el modal
      this.openModal = !this.openModal 
    },
  },
  components:{
    Modal,
  }
}
</script>

<style>

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
  font-family:  "Comic Sans MS", cursive, sans-serif;
  font-weight: bolder
}

.contenidoDescripcion{

  font-size: calc(1vh + 1vw);
  font-weight: 500;
}

</style>
