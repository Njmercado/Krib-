<template lang="pug">
div#app
  nav.navbar.navbar-expand-lg.navbar-light#nav
   a.navbar-brand(href='#' style="color:  #8c3420") Kribí
   button.navbar-toggler(type='button' data-toggle="collapse" data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
    span.navbar-toggler-icon
   div.collapse.navbar-collapse#navbarNav
    div.navbar-nav
     router-link.nav-item.nav-link#router(to='/') Inicio
     router-link.nav-item.nav-link#router2(to='/diccionario') Diccionario
     router-link.nav-item.nav-link#router3(to='/curso') Curso
  router-view
  div#informacion.row
    div#universidad.col-sm
      div#logoUniversidad
        img(src="https://i.ibb.co/HdbCKKp/Uninorte.png" style="height: 100%; width: 12%")
      div
       label Universidad del Norte
      div
       label Barranquilla - Colombia
    div#grupoEstudiantil.col-sm
      div
        img(src="https://i.ibb.co/StnCxkv/image1.jpg" style="height: 100%; width: 50%")
      div(style="margin-top: 10px")
        label Creador
</template>

<script>
export default {
  name:"App"
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

#app > #informacion{
  background: #3b3b3b;
  height: calc(30vh + 10vw);
}

#universidad, #grupoEstudiantil, #desarrollador{
  text-align: center;
  margin-bottom: auto;
  margin-top: auto;
}

#informacion label{
  font-size: calc(0.5em + 0.5vw);
  color: white;
}

#router, #router2, #router3{
  color: white;
  cursor: pointer;
}
</style>
