<template>
  <div id="navbarContent">
    <v-app-bar extension-height="2.2em" color="#53220C" dark app absolute height="80px">
      <v-app-bar-nav-icon @click.stop="openCloseSideBar = !openCloseSideBar" class="hidden-md-and-up btn">
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-img
          @click="goToHome()"
          style="cursor: pointer"
          data-aos="zoom-in"
          src="https://i.ibb.co/3FNTmL4/LOGO-KRIB-Mesa-de-trabajo-1.png"
          width="calc(9vh + 9vw)"></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="mx-2 btn" small icon dark style="background-color: white;">
        <v-icon color="#53220C">mdi-facebook</v-icon>
      </v-btn>
      <v-btn class="mx-2 btn" small icon dark style="background-color: white">
        <v-icon color="#53220C">mdi-instagram</v-icon>
      </v-btn>
      <v-btn class="mx-2 btn" small icon dark style="background-color: white">
        <v-icon color="#53220C">mdi-twitter</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs background-color="#DEA44A">
          <v-row justify="end">
            <v-tab
              v-for="(route, index) in routes" :key="index"
              style="text-decoration-line: none; font-weight: bold; color: #53220C"
              :to="route.to"
              :title="route.title"
            >
              {{route.name}}
            </v-tab>
          </v-row>
        </v-tabs>
      </template>
    </v-app-bar>

    <SideBar :routes="routes" :open="openCloseSideBar"></SideBar>
  </div>
</template>

<script>
import SideBar from './SideBar.vue'

export default {

  name: 'NavBar',
  props: [
    'routes'
  ],
  data: () => ({
    openCloseSideBar: false
  }),
  mounted () {
    // Identifica si la página se ha abierto en un pc o un
    // Dispositivo móvil
    const isMobile = (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)
    const navbarContent = document.querySelector('#navbarContent')
    const div = document.querySelector('div.v-toolbar__extension')

    // Es eliminada del Dom cuando es abierta en un celular
    if (isMobile) div.remove()

    // Es usada ya que cuando se elimina lo de arriba, el espacio de las rutas,
    // Queda un espacio en blanco, por lo que hay que redefinir el margen de las cosas,
    navbarContent.style.marginBottom = isMobile ? '4.6em' : '6.4em'
  },
  computed: {
    scrollTags: function () {
      return this.routes.filter((i, index) => index < this.routes.length - 2)
    },
    buttons: function () {
      return this.routes.filter((i, index) => index > this.routes.length)
    }
  },
  methods: {
    goToHome () {
      this.$router.push('/')
    }
  },
  components: {
    SideBar
  }
}
</script>
