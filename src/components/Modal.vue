<template>
  <v-dialog max-width='50em' v-model="realModalOpener">
    <v-card color="var(--yellow-background)">
      <v-card-title class='titulo'>
        <v-row justify='center'>
          <div id='titulo' class='white--text' style="font-size: 1.2em">
            {{palabra}}
          </div>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-chip
            class="ma-2"
            color="#DEA44A"
            v-for="(def, index) in definicion"
            :key="index"
            dark
          >
            {{def}}
          </v-chip>
          <v-divider v-if="definicion.lenght>0 && ejemplos.length>0"></v-divider>
          <v-row
            v-for='(ejemplo,index) in ejemplos'
            :key='index'
            class='text-white ejemplo'
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
    'palabra'
  ],
  data: () => ({
    realModalOpener: false
  }),
  watch: {
    open (val) {
      this.realModalOpener = this.realModalOpener ? this.realModalOpener : true
    }
  }
}

</script>

<style scope>

.titulo{
  background: #53220C;
  height: 8vh;
  font-size: 2vw;
}

.idioma {
  background: #53220C;
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
  background: #BDBDBD;
  margin-top: 2vw;
  height: 5vh;
  border-radius: 1vw;
  font-size: 1.2em;
}

</style>
