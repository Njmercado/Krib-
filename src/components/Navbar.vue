<template >
  <div>
    <v-app-bar 
      dark 
      app 
      src="https://i.ibb.co/zQGmWnT/Captura-de-pantalla-de-2019-10-04-23-44-25.png"
    >
      <v-app-bar-nav-icon 
        @click="openCloseSideBar = !openCloseSideBar" 
        class="hidden-md-and-up btn"
      >
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-toolbar-title>
        <v-img src="https://i.ibb.co/FzDP6PW/Sin-t-tulo-2.png" width="15vw"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-slot:extension
      >
        <v-tabs
          background-color="transparent"
        :v-if="openCloseSideBar"
        >
          <v-tab 
            v-for="(route, index) in routes"
            :key="index"
            :to="route.to"
            class="text-capitalize hidden-sm-and-down"
            :title="route.title"
          >
            {{route.name}}
          </v-tab>
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
