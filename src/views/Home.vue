<template lang="pug">
 div#begin
  div#imagenInicio
    img(src="https://i.ibb.co/FzDP6PW/Sin-t-tulo-2.png" alt="logo kribi") 
  div.container
    div#separacion 
  div#contenido
    div#contenedor.container
      div#texto
        label#informacion(v-html="getInformacion") 
    v-container(fluid)#tipoDeInformacion
      v-layout(row justify-center)
        v-flex(xs-2 sm-2 v-for="(type, index) in informationTypeName" :key="type")
          label#info(@click='informationType = index') {{type}} 
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: () => ({
    information: [
      "Kribí es un diccionario palenque- español creado por el Grupo Estudiantil Afro Makeda Kahina, de la universidad del Norte en Barranquilla. El grupo es un espacio creado para fortalecer la integración de los estudiantes universitarios provenientes de diferentes orígenes, y a su vez, ser el espacio de representación de los estudiantes que se auto - reconocen como afrodescendientes a través de actividades que resaltan los logros y retos de los diversos grupos que forman la diáspora de las diferentes regiones de África en aspectos históricos, políticos, económicos y culturales que han sido invisibilizados en diferentes sectores de la sociedad. De este modo, se buscará generar consciencia y una mejor convivencia entre las personas estimulando el pensamiento crítico y el desarrollo de propuestas que respondan a problemáticas aún presentes en la actualidad como la discriminación y auto - discriminación, la estigmatización y el abandono estatal. Por esto, celebrando nuestras raíces, compartimos este conocimiento con ustedes.",
      "En el sur Continente Americano tenemos “un pedacito de África”. El Caribe colombiano fue escenario de lucha y resistencia de hombres y mujeres de origen africano que tras el Comercio triangular eran privados de su libertad y puestos en calidad de esclavos. Los palenques fueron una de las formas que adoptaron; estos lugares ubicados estrategicamente en medio de la selva, al cual rodeaban con trincheras estacas y zanjas les permitia esconderse y protegerse del enemigo colonizador.</br> En la actualidad se concerva uno de esos maravillosos lugares historicos de libertad llamado San Basilio de Palenque tras el acuerdo de paz firmado en 1713, es un corregimiento del Munición de Mahates en Bolívar que cuenta con al menos tres mil quinientos (3500) habitantes que hablan la Lengua palenquera.</br> Esta lengua ha sido objeto de estudio en innumerables ocasiones, por iniciativa de Cristina De la Hoz Marquez se recopila un corpus de textos y audios que contiene la mayor cantidad de palabras en Palenquero y su significado en Español que brindaron las bases para la creación de un espacio web. El diccionario digital de la lengua Palenquera – Kribi es el resultado; y nace de la cooperación del Grupo Estudiantil Afro Makeda Kahina donde se destacaron aporte de cada uno de sus miembros en especial Esteban Torregrosa, finalmente es desarrollado por Angie Zuñiga Figueroa y Nino Mercado quienes aportan desde se conocimiento de ingeniería de sistema y Aldair Soto desde el diseño todos ellos pilares fundamentales de la herramienta web que responde a la necesidad y practicidad que demandan los interesados en la Lengua Palenquera que hacen parte de la era de la globalización y la inmersión tecnológica. Así bien, es KRIBÍ la guía práctica para búsqueda de palabras, la construcción de oraciones y textos en la Lengua Palenquera que hoy es considerada un intangible invaluable de todos los individuos.",
      "",
    ],
    informationType: 0,
    informationTypeName: [
      "Descripción",
      "Origen",
      "Antecedentes"
    ]
  }),
  computed: {
    getInformacion(){
      console.log(this.informationType)
      return this.information[this.informationType]
    } 
  }
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

  label#informacion{
    font-size: calc(0.60em + 0.5vw);
  }

  #info{
    font-weight: bold;
    color: #dba238;
    font-size: calc(.7vh + .7vw);
    cursor: pointer;
  }

  #tipoDeInformacion{
    width: 50%
  }

  @media screen and (max-width: 600px) {
    #info {
      font-size: calc(1vh + 1vw)
    }
  }
</style>
