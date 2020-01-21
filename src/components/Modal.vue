<template>
  <v-dialog max-width='60em'>
    <template v-slot:activator='{ on }'>
      <v-icon v-on='on' ref='activate'></v-icon>
    </template>
    <v-card>
     <div class="idioma">
        {{idioma}}
     </div>
      <v-card-title class='titulo'>
        <v-row justify='center'>
          <div id='titulo' class='white--text'>
            {{palabra}}
          </div>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-chip 
            class="ma-2"
            color="#d99b29"
            v-for="(def, index) in definicion" 
            :key="index"
            dark
          >
            {{def}}
          </v-chip>
          <v-row
            v-for='(ejemplo,index) in ejemplos'
            :key='index'
            class='white--text ejemplo'
            justify='center'
            align='center'
          >
            {{ejemplo}}
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
    'palabra',
    'idioma'
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
  height: 8vh;
  font-size: 2vw;
}

.idioma {
  background:#8c3420;
  color: white;
  text-align: left;
  padding: .5em .5em .5em .5em;
  border-style: hidden; 
}

.definicion{
  height: 5vh;
  border-radius: 1vw;
  font-size: 1em;
}

.ejemplo{
  background: darkgrey;
  margin-top: 2vw;
  height: 5vh;
  border-radius: 1vw;
  font-size: 1.2em;
}

</style>
