<template>
  <v-container
    fluid
    grid-list-md
    grid-list-lg
  >
    <v-row
      wrap
      justify="center"
    >
      <v-col
        cols="12"
        md="4"
        sm="6"
        xs="12"
        lg="3"
        d-flex

        v-for="(game, index) in games"
        :key="index"
      >
        <Game 
          :img="game.img" 
          :desc="game.desc" 
          :link="game.link" 
          :title="game.title" 
          :wordGame="game.wordGame"
        >
        </Game>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Server from '../serverConfigurations'
import Game from '../components/Game.vue'

export default {
  name:"Curso",
  data: () => ({
    games: [
      {
        link: "https://tinycards.duolingo.com/", 
        img: "https://i.ibb.co/NTLMGQL/Dhdy-f-Jr-400x400.jpg", 
        title: "Tiny Cards", 
        desc:"Juegos de cartas para poder vizualizar y escuchar todas las palabras que ahí se encuentran",
      },
      {
        link: null, 
        img: "https://i.ibb.co/b3bFz6z/words-Game.png", 
        title: "Sopa de letras", 
        desc:"Juego de sopa de letras, en el que podrás pasar niveles pero siempre con la expectativa de obtener el mayor puntaje en el menor tiempo posible",
        wordGame:"true"
      },
    ] 
  }),
  methods:{
    descargarCurso: () => {

      //TODO: modificar el servidor para evitar la descarga del curso
      Server.descargarCurso()
    }
  },
  components:{
    Game
  }
}

</script>


<style>

#background{

  background-image: url('https://i.ibb.co/K6KTnGx/curso.jpg')
}
</style>
