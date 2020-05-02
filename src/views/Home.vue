<template>
  <v-container fluid style="background-color: #6E2E1E">

    <!-- Patreon Botton -->
    <v-tooltip top>
      <template v-slot:activator='{ on }'>
        <v-btn
          v-on='on'
          data-aos="zoom-in"
          color="yellow darken-2"
          class="btn mr-4 mb-4"
          dark fixed fab bottom right>
          <v-icon large>mdi-currency-usd</v-icon>
        </v-btn>
      </template>
      <v-card width="16em" min-height="16em">
        <v-card-title>
          <span class="mx-auto" style="color: #6E2E1E">Donaciones</span>
        </v-card-title>
        <v-card-text>
          Si quieres ver crecer aun más esta plataforma, tenemos la hermosa opción
          de poder recibir donaciones de tu parte y así poder regalarte la mejor experiencia posible.
        </v-card-text>
      </v-card>
    </v-tooltip>

    <v-row>
      <CarrouselNews :news="news"></CarrouselNews>
    </v-row>
    <v-row>
      <KribiDescription></KribiDescription>
    </v-row>

    <v-row id="wordsSearcher" justify="center" style="height: 100%">
      <v-col cols="8">
        <v-img :src="require('@/assets/fondo-menu.png')">
          <v-row justify="center" style="height: 10%; margin-top: 20%">
            <label data-aos="fade-down" style="color: #fff6de; font-weight: bold; font-size: 4vh">¡CONOCE, APRENDE Y DIVIERTETE!</label>
          </v-row>
          <v-row justify="space-around" class="mt-10" style="height: 75%">
            <v-col cols="7" xs="4" sm="4" md="6" lg="3" v-for="(option, index) in menuOptions" :key="index">
              <v-card
                :color="option.color"
                elevation="4"
                style="border-radius: 16px; text-decoration-line: none"
                :to="option.to"
                data-aos="fade-left"
              >
                <v-card-title>
                  <v-img class="mx-auto" contain aspect-ratio="1.3" :src="option.icono"></v-img>
                </v-card-title>
                <label class="mx-auto text-uppercase" style="font-weight: bold; color: white">{{option.title}}</label>
              </v-card>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import CarrouselNews from '@/components/CarrouselNews'
import KribiDescription from '@/components/KribiDescription'

export default {
  name: 'Home',
  data: () => ({
    news: [
      {
        // photo: 'https://res.cloudinary.com/kribi/image/upload/v1580701399/dictionary/introductory_dictionary_img.jpg',
        photo: require('@/assets/portada.png'),
        title: 'Palenque',
        description: 'Niños en palenque',
        link: '/',
        cover: true
      }
    ],
    menuOptions: [
      { title: 'Diccionario', color: '#D58F18', to: '/diccionario', icono: require('@/assets/icono-diccionario.png') },
      { title: 'Noticias', color: '#AC3122', to: '/chakero', icono: require('@/assets/icono-noticias.png') },
      { title: 'Actividades', color: '#9D522B', to: '/actividades', icono: require('@/assets/icono-actividades.png') },
      { title: 'Tienda', color: '#C87624', to: '/bentorriyo', icono: require('@/assets/icono-tienda.png') }
    ]
  }),
  mounted () {
    setTimeout(() => {
      this.getArticles.forEach(el => this.news.push(el))
    }, 1000)
  },
  computed: {
    ...mapGetters([
      'getArticles'
    ])
  },
  components: {
    CarrouselNews,
    KribiDescription
  }
}
</script>
