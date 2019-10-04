<template lang="pug">
div#app
  nav.navbar.navbar-expand-lg.navbar-light#nav
   a.navbar-brand(href='#' style="color:  #8c3420") Kribí
   button.navbar-toggler(
     type='button' 
     data-toggle="collapse" 
     data-target='#navbarNav' 
     aria-controls='navbarNav' 
     aria-expanded='false' 
     aria-label='Toggle navigation'
    )
    span.navbar-toggler-icon
   div.collapse.navbar-collapse#navbarNav
    div.navbar-nav
      router-link.nav-item.nav-link#router(
        v-for="(info, index) in links" 
        :to="info.to" 
        :title="info.title"
      ) {{info.name}} 
  router-view
  v-footer(
    height="auto"
    color="grey darken-4"
    dark
  )
    v-container(
      grid-list-lg
      grid-list-md
    )
      v-layout(row wrap)
        v-flex
          v-btn(
            class="btn"
            text
            icon
            v-for="(info, index) in socialmedias"
            :href="info.link"
            target="_blank"
            :key="index"
          )
            v-icon(color="#dba238") {{info.icon}} 
      v-layout(wrap row justify-content-center)
        v-flex(xs12 sm4)
          v-img(
            src="https://i.ibb.co/KmGG4H8/Logo-Uninorte-Bquilla.jpg"
            max-width="50%"
            max-height="100%"
            style="border-radius: calc(.5vw + .5vh); margin: auto"
          )
        v-flex(xs12 sm4 style="margin-top:25px")
          v-img(
            src="https://i.ibb.co/StnCxkv/image1.jpg"
            max-width="80%"
            max-height="100%"
            style="border-radius: calc(.5vw + .5vh); margin: auto"
          )
</template>

<script>
export default {
  name:"App",
  data: () => ({
    socialmedias:[
      { link: "https://www.instagram.com/kribicultura/", icon: "mdi-instagram" },
      { link:"", icon: "mdi-facebook" },
      { link:"", icon: "mdi-twitter" },
    ],
    links: [
      { to: "/", name: "Inicio", title:"" },
      { to: "/diccionario", name: "Diccionario", title:"" },
      { to: "/curso", name: "Curso", title:"" },
      { to: "/chakero", name: "Chakero", title:"Noticias"},
      { to: "/bentorriyo", name: "Bentorriyo", title:"Tienda / Store"},
      { to: "/creditos", name: "Creditos" },
    ]
  })
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
