<template>
  <v-app >
    <NavBar
      :routes="links"  
    ></NavBar>
    <router-view 
      style="margin-top: 6em"
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
        <v-row>
          <v-col>
            <v-btn 
              class="btn" 
              text 
              icon 
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
          </v-col>
        </v-row>
        <v-row 
          justify="center"
        >
          <v-col 
            cols="12"
            align="center"
            md="3"
            sm="8"
            lg="4"
          >
            <v-img 
              src="https://i.ibb.co/KmGG4H8/Logo-Uninorte-Bquilla.jpg" 
              max-width="50%" 
              max-height="100%" 
              style="border-radius: calc(.5vw + .5vh);;"
            >
            </v-img>
          </v-col>
          <v-col 
            cols="12"
            align="center"
            md="3"
            sm="8"
            lg="4"
            style="margin-top:25px;"
          >
            <v-img 
              src="https://i.ibb.co/StnCxkv/image1.jpg" 
              max-width="80%" 
              max-height="100%" 
              style="border-radius: calc(.5vw + .5vh);;"
            >
            </v-img>
          </v-col>
        </v-row>
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
      {name: "Inicio", to: "/", icon: "mdi-home", title:""},
      {name: "Curso", to: "/curso", icon: "mdi-teach", title:""},
      {name: "Bentorriyo", to: "/bentorriyo", icon: "mdi-cart", title:"Tienda / Store"},
      { to: "/chakero", name: "Chakero", title:"Noticias", icon: "mdi-newspaper"},
      { to: "/creditos", name: "Creditos", title:"", icon: "mdi-account-group"},
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
