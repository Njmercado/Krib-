<template>
  <v-dialog max-width="40em" v-model='realModelOpener' scrollable>
    <v-card color="#6E2E1E" style="color: #fff6de">
      <v-card-title>
        <label class="mx-auto" style="font-size: calc(1.7vh + 1.7vw)">Como usar el diccionario, yay!!! 😁</label>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text style="padding: 3em">
        <div style="background-color: #dea44a; color: #fff6de; padding: 8px; border-radius: 8px; font-size: 1.5em">
          Buscar palabras
        </div>
        <div style="color: #fff6de; margin-top: 3em">
          Si deseas <kbd style="background-color: gray">buscar una palabra</kbd>,
          es tan simple como solo escribirla en el campo de texto de acá arriba!!!! WOW!!
        </div>
        <div style="color: #fff6de; margin-top: 1em; margin-bottom: 3em">
          Por el contrario, si <kbd style="background-color: gray">deseas buscar varias palabras</kbd>
          solo tendrias que separarlas por una coma. ¡¡¡¡Wow, de verdad es tan simple??!!!
        </div>
        <v-divider></v-divider>
        <div style="background-color: #dea44a; color: #fff6de; padding: 8px; border-radius: 8px; font-size: 1.5em">
          Buscar palabras por letras
        </div>
        <div style="color: #fff6de; margin-top: 3em; margin-bottom: 3em">
          Ahora, si de verdad eres curioso(a), te habras dado cuenta que si presionas sobre una
          de las <kbd style="background-color: gray">letras de abajo</kbd> estas desplegarán una
          lista de palabras relacionadas a la letra presionada. Si quieres ver más palabras solo
          presiona en los botones de abajo. <kbd style="background-color: gray">Botones de abajo??????</kbd> si, botones de abajo!!!
        </div>
        <v-divider></v-divider>
        <div style="background-color: #dea44a; color: #fff6de; padding: 8px; border-radius: 8px; font-size: 1.5em">
          Resultados
        </div>
        <div style="color: #fff6de; margin-top: 3em; margin-bottom: 3em">
          Ahora, si quieres conocer la definicion de alguna palabra buscada, ¡¡Solo hace falta que presiones sobre ella!!!!.
          espera, Que?!!!! si, tan solo debes presionar sobre ella. Intentalo y mira la magia!!
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn small dark class="btn text-lowercase" color="red darken-3" @click="realModelOpener = false">cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DistionaryInfoModal',
  data: () => ({
    realModelOpener: false
  }),
  props: [
    'open'
  ],
  watch: {
    open () {
      this.realModelOpener = this.open ? this.open : true
    }
  },
  methods: {},
  components: {}
}
</script>
