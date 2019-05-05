<template lang="pug">
div#app
  nav.navbar.navbar-expand-lg.navbar-light#nav
   a.navbar-brand(href='#' style="color:  #8c3420") Kribí
   button.navbar-toggler(type='button' data-toggle="collapse" data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
    span.navbar-toggler-icon
   div.collapse.navbar-collapse#navbarNav
    div.navbar-nav
     router-link.nav-item.nav-link#router(tag='inicio' to='/') Inicio
     router-link.nav-item.nav-link#router2(tag='diccionario' to='/diccionario') Diccionario
     router-link.nav-item.nav-link#router3(tag='curso' to='/curso') Curso
  router-view
  div#informacion.row
    div#universidad.col-sm
      div#logoUniversidad
        img(src="https://i.ibb.co/HdbCKKp/Uninorte.png" width="50px" height="60px")
      div
       label Universidad del Norte
      div
       label Barranquilla-Colombia
    div#grupoEstudiantil.col-sm
      div
        label Creador
      div
        label Grupo Estudiantil Makeda Kahina
    div#desarrollador.col-sm
      div
        label Desarrollador
      div
        label Nino Jesús Mercado Consuegra
      div
        label njesusmercado@gmail.com
      div
        label +57 3157567254
</template>

<script>
export default {
  methods:{
    showSomething: (res)=> {
      alert(res)
    }
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

#app > #informacion{
  background: #3b3b3b;
}

#universidad, #grupoEstudiantil, #desarrollador{
  text-align: center;
}

#informacion label{
  font-size: 10px;
  color: white;
}

#router, #router2, #router3{
  color: white;
  cursor: pointer;
}
</style>
