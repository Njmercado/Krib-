<template>
  <div class="description">
    <v-row justify="center" align="center" style="height: 90vh">
      <v-col cols="10" xs="10" sm="10" md="8" lg="8">
        <v-row justify="center" class="tituloDescripcion">DICCIONARIO PALENQUERO</v-row>
        <v-row justify="center" class="contenidoDescripcion">
          El diccionario virtual de la Lengua Palenquera,
          <kbd
            style="background-color: #DEA44A; border-radius: 8px"
            data-aos="zoom-in"
          >Kribí</kbd>,
          es una herramienta Web la cual permite a sus usuarios la búsqueda y práctica para el aprendizaje
          de forma rapida y precisa del léxico Palenquero.
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" style="height: 10vh">
      <v-btn
        class="btn"
        data-aos="fade-down"
        icon
        large
        dark
        v-scroll-to="{
          element: '#wordsSearcher',
          duration: 800
        }">
        <v-icon style="color: #DEA44A">arrow_downward</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'KribiDescription',
  methods: {
    scroll () {
      window.scrollBy(0, 100 * 100)
    }
  },
  components: {
  }
}
</script>

<style>
.description {
  background: #6E2E1E;
  color: #fff6de;
}

.tituloDescripcion {
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 2em;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-weight: bolder;
}

.contenidoDescripcion {
  font-size: 1.6em;
  font-weight: 500;
}
</style>
