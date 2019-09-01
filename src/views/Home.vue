<template lang="pug">
 div#begin
  div#imagenInicio
    img(src="https://i.ibb.co/FzDP6PW/Sin-t-tulo-2.png" alt="logo kribi") 
  div.container
    div#separacion 
  div#contenido
    div#contenedor.container
      div#texto
        label#descripcion Kribí es un diccionario palenque- español creado por el Grupo Estudiantil Afro Makeda Kahina, de la universidad del Norte en Barranquilla. El grupo es un espacio creado para fortalecer la integración de los estudiantes universitarios provenientes de diferentes orígenes, y a su vez, ser el espacio de representación de los estudiantes que se auto - reconocen como afrodescendientes a través de actividades que resaltan los logros y retos de los diversos grupos que forman la diáspora de las diferentes regiones de África en aspectos históricos, políticos, económicos y culturales que han sido invisibilizados en diferentes sectores de la sociedad. De este modo, se buscará generar consciencia y una mejor convivencia entre las personas estimulando el pensamiento crítico y el desarrollo de propuestas que respondan a problemáticas aún presentes en la actualidad como la discriminación y auto - discriminación, la estigmatización y el abandono estatal. Por esto, celebrando nuestras raíces, compartimos este conocimiento con ustedes. 

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
}
</script>

<style>
  #imagenInicio{
    height: 100%;
    width: 100%;
    padding-top: 10vh;
    padding-bottom: 10vh;
    margin-bottom: 10vh;
    margin-top: 10vh;
  }

  #imagenInicio > img{
    width: 70%;
  }

  #separacion{
    margin-top: 5px;
    background: #8c3420;
    height: 1px;
  }

  #contenedor{
    margin-top: 10px;
    margin-bottom: 10px;
    background: #8c3420;
    border-radius:15px;
    height: 100%;
    width: 90%
  }

  #texto{
    text-align: center;
    color: #dba238;
    margin-top: 5px;
    vertical-align: middle;
  }

  label#descripcion{
    font-size: calc(0.60em + 0.5vw);
  }
</style>
