<template lang="pug">
 div#begin
  div#imagenInicio
    img(src="https://i.ibb.co/FzDP6PW/Sin-t-tulo-2.png" alt="logo kribi") 
  div.container
    div#separacion 
  div#contenido    
    div#contenedor.container
      div#texto
        label#informacion(v-html="getInformacion" align="left") 
    v-container(fluid)#tipoDeInformacion
      v-layout(row justify-center)
        v-flex(xs-2 sm-2 v-for="(type, index) in informationTypeName" :key="type")
          v-btn#info(
            color="#dba238" 
            small 
            @click='informationType = index'
            class="text-capitalize"
          ) {{type}}
          div(v-if="informationType == index")
            v-icon(style="font-size: 8px" color="#8c3420") mdi-brightness-1
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: () => ({
    information: [
      "El Diccionario de la Lengua Palenquera, <span style='font-weight: bold'>Kribí</span>, es un diccionario que responde al momento historio donde las herramientas tecnológicas juegan un papel preponderante en el quehacer diario de las personas como medio para dinamizar procesos.  A través de esta herramienta web se le permite a sus usuarios la búsqueda y práctica en aras a creación de aprendizaje de forma rápida y precisa del léxico palenquero. Por lo tanto, este diccionario digitalizado permite apoyar activamente el avance de los interesados en el uso y desarrollo del intangible de la humanidad que llamamos Lengua Palenquera.",
      "En el sur Continente Americano tenemos “un pedacito de África”. El Caribe colombiano fue escenario de lucha y resistencia de hombres y mujeres de origen africano que tras el Comercio triangular eran privados de su libertad y puestos en calidad de esclavos. Los palenques fueron una de las formas que adoptaron; estos lugares ubicados estrategicamente en medio de la selva, al cual rodeaban con trincheras estacas y zanjas les permitia esconderse y protegerse del enemigo colonizador.</br> En la actualidad se concerva uno de esos maravillosos lugares historicos de libertad llamado San Basilio de Palenque tras el acuerdo de paz firmado en 1713, es un corregimiento del Munición de Mahates en Bolívar que cuenta con al menos tres mil quinientos (3500) habitantes que hablan la Lengua palenquera.</br> Esta lengua ha sido objeto de estudio en innumerables ocasiones, por iniciativa de Cristina De la Hoz Marquez se recopila un corpus de textos y audios que contiene la mayor cantidad de palabras en Palenquero y su significado en Español que brindaron las bases para la creación de un espacio web. El diccionario digital de la lengua Palenquera – Kribi es el resultado; y nace de la cooperación del Grupo Estudiantil Afro Makeda Kahina donde se destacaron aporte de cada uno de sus miembros en especial Esteban Torregrosa, finalmente es desarrollado por Angie Zuñiga Figueroa y Nino Mercado quienes aportan desde se conocimiento de ingeniería de sistema y Aldair Soto desde el diseño todos ellos pilares fundamentales de la herramienta web que responde a la necesidad y practicidad que demandan los interesados en la Lengua Palenquera que hacen parte de la era de la globalización y la inmersión tecnológica. Así bien, es KRIBÍ la guía práctica para búsqueda de palabras, la construcción de oraciones y textos en la Lengua Palenquera que hoy es considerada un intangible invaluable de todos los individuos.",
      "San Basilio de Palenque fue proclamado por la UNESCO Patrimonio Oral e Inmaterial de la Humanidad gracias a la Lengua Palenquera que manejan sus habitantes, propia de este espacio cultural. Esta lengua criolla tiene su origen en la época colonial cuando hombres y mujeres de orígenes africano que se encontraban en calidad de esclavos en lo que hoy conocemos como Caribe Colombiano lograban encontrar en los montes de María, a cincuenta (50) kilómetros de Cartagena. ese lugar donde podían ser libres y practicar sus tradiciones.</br> Si bien, el periodo de Colonización Española en América estuvo enmarcada entre los años 1550 y 1810 para el caso particular de Colombia; indagar la época de formación de la Lengua Palenquera es un dato que ha inquietado a varios autores entre ellos Marianne Dieck, que en el artículo La época de formación de la lengua de Palenque: datos históricos y lingüísticos. Basado en antecedentes escritos argumenta la hipótesis del siglo XVII (1600 - 1699) como periodo surgimiento del criollo palenquero. En ese sentido, se define lengua criolla a todas aquellas que tiene su origen luego de situaciones sociodemográficas abruptas donde hablantes de varias leguas entran en contacto adoptando un sistema lingüístico propio de la unión de diversos componentes que les permita la comunicación entre sí.</br> Aun cuando en 1713 se le concede a San Basilio de Palenque la calidad de pueblo libre, es hasta 1772 que se tiene pruebas escritas de la existencia de una lengua distinta al español a través de la Noticia historial de la provincia de Cartagena de Yindias, año de 1772, escrito por el obispo cartagenero Diego de Paredo. Cabe resaltar que encontrar registros históricos en relación exacto al génesis de la Lengua Palenquera es tan difícil como hallarlos para la creación del pueblo mismo, debido al poco prestigio y valor que les daba en épocas pasadas.</br> Debido a los la escasez de archivos históricos que permitan identificar la época exacta del legua criolla palenquera, Dieck mediante la hipótesis de Bickerton que dicta como fase inicial para la adopción de lo que conocemos como lengua criolla ese momento intrincado donde una lengua dominante es superada en número de hablante por una o varias lenguas diferentes. Para el caso particular de la lengua palenquera, cuando el número de no – europeos supera exponencialmente a los colonizadores.</br> En relación a los datos demográficos que apuntan 1621 como el año de aumento drástico de habitantes negros en el continente americano luego de que en 1605 solo aparecen referenciados 3.000 y año 1619 con 12.000 pobladores afrodescendientes, podemos vislumbrar que coinciden con el padre Alonso Sandoval quien afirma en su obra De instauranda Aethiopum Salute (1627) que para la época se hablaban más de 70 lenguas africanas en Cartagena ubicada geográficamente a tan solo 50 kilómetros de San Basilio de Palenque.</br> En conclusión análoga a la hipótesis de Bickerton, se propone coherente la dilución del Español para la creación de la lengua criolla palenquera como consecuencia del aumento elevado de no hispano hablante a finales del siglo XVI o comienzos del siglo XVII.</br> Ahora bien, ésta propuesta nació como respuesta al momento histórico donde los medios electrónicos, el Internet, y las Tecnologías de la Información y Comunicación (TIC) juegan un papel preponderante en el quehacer diario. En ese mismo sentido, “La omnipresencia de las TICs es al mismo tiempo una oportunidad y un desafío, y nos impone la tarea urgente de encontrar para ellas un sentido y uso que permita desarrollar sociedades más democráticas e inclusivas, que fortalezca la colaboración, la creatividad y la distribución más justa del conocimiento científico y que contribuya a una educación más equitativa y de calidad para todos.” (Oficina Regional de Educación para América Latina y el Caribe (OREALC/UNESCO Santiago), 2013).",
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
    color: #8c3420;
    font-size: calc(.7vh + .7vw);
    cursor: pointer;
  }

  #tipoDeInformacion{
    width: 60%
  }

  @media screen and (max-width: 600px) {
    #info {
      font-size: calc(1vh + 1vw)
    }
  }
</style>
