import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

const vuetifyOptions = {}

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueScrollTo)

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App),
  vuetify: new Vuetify(vuetifyOptions)
}).$mount('#app')
