<template>
  <v-app >
    <NavBar
      :routes="links"  
    ></NavBar>
    <router-view 
      style="margin-top: 35vh"
    ></router-view>
    <v-footer 
      height="auto" 
      color="#562011" 
      dark
    >
      <v-container 
        grid-list-lg 
        grid-list-md
      >
        <v-layout 
          row 
          wrap
        >
          <v-flex>
            <v-btn 
              class="btn" 
              text="text" 
              icon="icon" 
              v-for="(info, index) in socialmedias" 
              :href="info.link" 
              target="_blank" 
              :key="index"
            >
              <v-icon 
                color="#dba238"
              >
                {{info.icon}} 
              </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout 
          wrap 
          row 
          justify-content-center
        >
          <v-flex 
            xs12 
            sm4
          >
            <v-img 
              src="https://i.ibb.co/KmGG4H8/Logo-Uninorte-Bquilla.jpg" 
              max-width="50%" 
              max-height="100%" 
              style="border-radius: calc(.5vw + .5vh); margin: auto;"
            >
            </v-img>
          </v-flex>
          <v-flex 
            xs12 
            sm4 
            style="margin-top:25px;"
          >
            <v-img 
              src="https://i.ibb.co/StnCxkv/image1.jpg" 
              max-width="80%" 
              max-height="100%" 
              style="border-radius: calc(.5vw + .5vh); margin: auto;"
            >
            </v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>

import NavBar from './components/Navbar.vue'

export default {
  name:"App",
  data: () => ({
    socialmedias:[
      { link: "https://www.instagram.com/kribicultura/", icon: "mdi-instagram" },
      { link:"", icon: "mdi-facebook" },
      { link:"", icon: "mdi-twitter" },
    ],
    links: [
      {name: "Inicio", to: "/", icon: "mdi-help-box", title:""},
      {name: "Curso", to: "/curso", icon: "mdi-gesture", title:""},
      {name: "Bentorriyo", to: "/bentorriyo", icon: "mdi-shape-plus", title:"Tienda / Store"},
      { to: "/chakero", name: "Chakero", title:"Noticias"},
      { to: "/creditos", name: "Creditos", title:""},
    ]
  }),
  components:{
    NavBar
  }
}
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
