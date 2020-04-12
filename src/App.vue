<template>
  <v-app >
    <NavBar :routes='links'></NavBar>
    <transition
      name="component-fade"
      mode="out-in"
    >
      <router-view style='margin: calc(8vh + 3vw) auto; height: 100%; '></router-view>
    </transition>
    <Footer></Footer>
  </v-app>
</template>

<script>

import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    links: [
      { name: 'Inicio', to: '/', icon: 'mdi-home', title: '' },
      { name: 'Juegos', to: '/juegos', icon: 'mdi-teach', title: '' },
      { name: 'Bentorriyo', to: '/bentorriyo', icon: 'mdi-cart', title: 'Tienda / Store' },
      { to: '/chakero', name: 'Chakero', title: 'Noticias', icon: 'mdi-newspaper' },
      { to: '/creditos', name: 'Creditos', title: '', icon: 'mdi-account-group' }
    ],
    news: []
  }),
  // beforeMount () {
  //   request.getArticles()
  //     .then(async result => {
  //       await this.setArticles(result)
  //     })
  //     .catch(err => {
  //       alert(err.msg)
  //     })
  // },
  computed: {
    ...mapGetters(['getArticles'])
  },
  methods: {
    ...mapMutations(['setArticles'])
  },
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

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
