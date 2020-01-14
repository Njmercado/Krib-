<template>
  <v-dialog max-width='60vw'>
    <template v-slot:activator='{ on }'>
      <v-icon v-on='on' ref='activate'></v-icon>
    </template>
    <v-card>
      <v-card-title class='titulo'>
        <v-col justify='center'>
          <div id='titulo' class='white--text'>
            {{palabra}}
          </div>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row
            class='white--text definicion'
            justify='center'
            align='center'
            wrap
          >
            {{definicion}}
          </v-row>
          <v-row
            v-for='(i,index) in ejemplos'
            :key='index'
            class='white--text ejemplo'
            justify='center'
            align='center'
          >
            {{i.ejemplo}}
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: [
    'open',
    'ejemplos',
    'definicion',
    'palabra'
  ],
  watch: {
    open (val) {
      this.$refs.activate.$el.click() // Activo el elemento que abrirá el modal
    }
  }
}

</script>

<style>

.titulo{
  background:#8c3420;
  height: 15vh;
  font-size: 2vw;
}

.definicion{
  background: #d99b29;
  height: 5vh;
  border-radius: 1vw;
  font-size: calc(0.7em + 0.5vw);
}

.ejemplo{
  background: #bfbeaa;
  margin-top: 2vw;
  height: 5vh;
  border-radius: 1vw;
  font-size: calc(0.60em + 0.5vw);
}

</style>
