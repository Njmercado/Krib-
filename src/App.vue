<template>
  <v-app >
    <NavBar :routes='links'></NavBar>
    <router-view style='margin-top: calc(10vh + 3vw)'></router-view>
    <Footer></Footer>
  </v-app>
</template>

<script>

import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data: () => ({
    links: [
      { name: 'Inicio', to: '/', icon: 'mdi-home', title: '' },
      { name: 'Curso', to: '/curso', icon: 'mdi-teach', title: '' },
      { name: 'Bentorriyo', to: '/bentorriyo', icon: 'mdi-cart', title: 'Tienda / Store' },
      { to: '/chakero', name: 'Chakero', title: 'Noticias', icon: 'mdi-newspaper' },
      { to: '/creditos', name: 'Creditos', title: '', icon: 'mdi-account-group' }
    ]
  }),
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hide;
}

#nav{
  font-weight: bold;
  color: #ffffff;
  background: #dba238;
}

#nav a.router-link-exact-active {
  color: #8c3420;
}

#router {
  color: white;
  cursor: pointer;
}
</style>
