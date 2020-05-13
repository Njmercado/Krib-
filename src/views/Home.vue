<template>
  <v-container fluid style='background-color: var(--yellow-background)'>
    <!-- Patreon Botton -->
    <!--
      <v-tooltip top>
      <template v-slot:activator='{ on }'>
        <v-btn
          v-on='on'
          data-aos='zoom-in'
          color='yellow darken-2'
          class='btn mr-4 mb-4'
          dark
          fixed
          fab
          bottom
          right
        >
          <v-icon large>mdi-currency-usd</v-icon>
        </v-btn>
      </template>
      <v-card width='16em' min-height='16em'>
        <v-card-title>
          <span class='mx-auto' style='color: #6E2E1E'>Donaciones</span>
        </v-card-title>
        <v-card-text>
          Si quieres ver crecer aun más esta plataforma, tenemos la hermosa opción
          de poder recibir donaciones de tu parte y así poder regalarte la mejor experiencia posible.
        </v-card-text>
      </v-card>
    </v-tooltip>
    -->

    <!-- Carrousel para mostrar las fotos -->
    <v-row>
      <CarrouselNews :news='news'></CarrouselNews>
    </v-row>

    <div class='wordsBackground'>

      <!-- Descripción del proyecto -->
      <v-row justify='center' class='yellowBackground title-description'>
        <div class='my-auto ml-5' style='color: #5f3323' data-aos='fade-down'>
          <label>PALENQUE A UN CLICK</label>
          <br />
          <br />
          <label>¡CONOCE, APRENDE Y DIVIÉRTETE!</label>
        </div>
      </v-row>

      <!-- Menu de navegación para ir a diversas partes de la página -->
      <div class='brownBackground' style="margin-left: calc(-.8vw + -.8vh); margin-right: calc(-.8vw + -.8vh)">
        <v-row style='margin-top: 8em; margin-bottom: 4em;'>
          <v-col
            cols="6"
            xs="6"
            sm="6"
            md="4"
            lg="4"
            v-for='(option, index) in menuOptions'
            :key='index'
            align="center"
          >
            <v-card
              :color='option.color'
              elevation='4'
              width='10em'
              height='10em'
              style='border-radius: 16px; text-decoration-line: none'
              :to='option.to'
              data-aos='fade-left'
            >
              <v-card-title>
                <v-img contain aspect-ratio='1.6' :src='option.icono'></v-img>
              </v-card-title>
              <label
                class='mx-auto text-uppercase'
                style='font-weight: bold; color: white'
              >{{option.title}}</label>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import CarrouselNews from '@/components/CarrouselNews'
// import KribiDescription from '@/components/KribiDescription'

export default {
  name: 'Home',
  data: () => ({
    news: [
      {
        photo: require('@/assets/1.png'),
        title: 'Palenque',
        description: 'Niños en palenque',
        link: '/',
        cover: true
      },
      {
        photo: require('@/assets/2.png'),
        title: 'Palenque',
        description: 'Niños en palenque',
        link: '/',
        cover: true
      },
      {
        photo: require('@/assets/3.png'),
        title: 'Palenque',
        description: 'Niños en palenque',
        link: '/',
        cover: true
      },
      {
        photo: require('@/assets/4.png'),
        title: 'Palenque',
        description: 'Niños en palenque',
        link: '/',
        cover: true
      }
    ],
    menuOptions: [
      {
        title: 'Diccionario',
        color: '#D58F18',
        to: '/kajangarí',
        icono: require('@/assets/icono-diccionario.png')
      },
      {
        title: 'Noticias',
        color: '#AC3122',
        to: '/chakero',
        icono: require('@/assets/icono-noticias.png')
      },
      {
        title: 'Actividades',
        color: '#9D522B',
        to: '/arrelike',
        icono: require('@/assets/icono-actividades.png')
      }
    /*  {
        title: 'Tienda',
        color: '#C87624',
        to: '/bentorriyo',
        icono: require('@/assets/icono-tienda.png')
      }
    */
    ]
  }),
  computed: {
    ...mapGetters(['getArticles'])
  },
  components: {
    CarrouselNews
    // KribiDescription
  }
}
</script>

<style>
.title-description {
  color: #fff6de;
  font-weight: bold;
  font-size: calc(2vw + 2vh);
}

.yellowBackground {
  min-height: calc(16vh + 16vw);
  background-color: #daa04a;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 80% 90%, 0% 100%);
}

.brownBackground {
  min-height: 64vh;
  margin-top: calc(2vh + 2vw);
  margin-bottom: -1.4vh;
  background-color: #5f3323;
  padding: 2em;
  clip-path: polygon(0% 20%, 20% 10%, 100% 20%, 100% 100%, 0% 100%);
}

.wordsBackground {
  background-image: url('../../public/img/Images/fondoLetras.png');
  background-size: 100%;
  background-repeat: round;
  margin-bottom: -3vh;
}
</style>
