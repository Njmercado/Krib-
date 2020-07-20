<template>
  <v-container fluid grid-list-md grid-list-lg style="background-color: var(--yellow-background)">
    <v-row wrap justify='space-around' align="center" style="min-height:100vh">
      <v-col
        cols='10'
        md='4'
        sm='6'
        xs='10'
        lg='3'
        d-flex
        v-for='(game, index) in games'
        :key='index'
      >
        <Game
          :img='game.img'
          :desc='game.desc'
          :link='game.link'
          :title='game.title'
          :wordGame='game.wordGame'
        ></Game>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Game from '../components/Game.vue'

export default {
  name: 'Curso',
  data: () => ({
    games: [
      // {
      //   link:
      //     'https://quizlet.com/co/448615742/luenga-ri-palenge-flash-cards/?x=1jqt',
      //   img: 'https://i.ibb.co/Sy1hFrc/quizlet.jpg',
      //   title: 'Quizlet',
      //   desc: 'Práctica y juega mientras aprendes lengua palenquera'
      // },
      {
        link: null,
        img: 'https://i.ibb.co/b3bFz6z/words-Game.png',
        title: 'Sopa de letras',
        desc: 'Encuentra la mayor cantidad de palabras en el menor tiempo posible!!!',
        wordGame: 'true'
      }
    ]
  }),
  methods: {},
  components: {
    Game
  }
}
</script>

<style>
#background {
  background-image: url('https://i.ibb.co/K6KTnGx/curso.jpg');
}
</style>
