<template >
  <div>
    <v-app-bar 
      src="https://i.ibb.co/zQGmWnT/Captura-de-pantalla-de-2019-10-04-23-44-25.png"
      dark 
      app 
      hide-on-scroll
    >
      <v-app-bar-nav-icon 
        @click="openCloseSideBar = !openCloseSideBar" 
        class="hidden-md-and-up btn"
      >
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-toolbar-title>
        <v-img 
          src="https://i.ibb.co/FzDP6PW/Sin-t-tulo-2.png" 
          width="8em"></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template
        v-slot:extension
      >
        
        <v-tabs
          background-color="transparent"
        > 
          <v-row
            justify="center"
          >
            <v-col
              v-for="(route, index) in routes"
            >
              <v-btn
                :key="index"
                :to="route.to"
                :title="route.title"
                text
                style="text-decoration: none; font-weight: bold"
              >
                {{route.name}}
              </v-btn>
            </v-col>
          </v-row>
        </v-tabs>
      </template>
    </v-app-bar>    

    <SideBar 
      v-if="openCloseSideBar"
      :routes="routes" 
      v-bind:openCloseSideBar.sync="openCloseSideBar"
    >
    </SideBar>
  </div>
</template>

<script>
import SideBar from './SideBar.vue'

export default {

  name: "NavBar",
  props:[
    "routes"
  ],
  data(){
    return{
      openCloseSideBar: false,
    }
  },
  mounted(){

    //Identifica si la página se ha abierto en un pc o un 
    //Dispositivo móvil
    var isMobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);

    if(isMobile){
      //Este div es el que permite agregar los link en el navbar.
      //Busco este div porque debo quitarlo para cuanto se ingrese
      //A la página desde un dispositivo movil, ya que este se mantenia
      //Pero no se usaba. Ademas de que quedaba espacio vacio que hacia
      //Ver el NavBar más alto pero vacio.
      var div = document.querySelector('div.v-toolbar__extension')
      div.style.height = '0px'
    }
  },
  computed:{
    scrollTags: function(){
      return this.routes.filter((i, index) => index < this.routes.length-2)
    },
    buttons: function(){
      return this.routes.filter((i, index) => index > this.routes.length)
    }
  },
  components:{
    SideBar
  }  
} 
</script>
