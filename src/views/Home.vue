<template>
	<div id="begin">
		<div id="imagenInicio">
			<img 
				src="https://i.ibb.co/3rr2YrS/IMG-9953.jpg" 
				alt="logo kribi" />
		</div>
		<div id="contenido">
			<div id="contenedor">
				<div id="texto" style="margin-bottom: 5vh">
					<label class="tituloDescripcion">DICCIONARIO PALENQUERO</label>
          <div>
            <label class="contenidoDescripcion">
              El diccionario virtual de la Lengua Palenquera <span style="font-weight: bold">"Kribí"</span>
              es una herramienta Web, la cual permite a sus usuarios la búsqueda y práctica para el aprendizaje
              de forma rapida y precisa del léxico Palenquero
            </label> 
          </div>
				</div>
			</div>
			<!--<v-container fluid="fluid" id="tipoDeInformacion">
				<v-layout row="row" justify-center="justify-center">
					<v-flex xs-2="xs-2" sm-2="sm-2" v-for="(type, index) in informationTypeName" :key="type">
						<v-btn class="text-capitalize" id="info" color="#dba238" small="small" @click="informationType = index">{{type}}</v-btn>
						<div v-if="informationType == index">
							<v-icon style="font-size: 8px;" color="#8c3420">mdi-brightness-1</v-icon>
						</div>
					</v-flex>
				</v-layout>
			</v-container>-->
      <v-container 
        id="diccionario" 
        fluid
        grid-list-md
        grid-list-lg
        style="background-color: #562011" 
      >
        <v-layout 
          row 
          wrap 
          justify-content-center
        >
          <v-flex 
            v-for="(i, index) in letras" 
            :key="index"
          >
            <v-btn
              fab
              style="margin-top: 1vh; margin-bottom: 1vh"
              dark
              small
              color="brown darken-2"
            >
            <label style="font-size:calc(1vh + 1vw); cursor: pointer">{{i}}</label>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	data: () => ({
    letras: ["A", "B", "CH", "D", "E", "F", "G", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "R", "S", "T", "U", "V"]
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

:root{
	--krbi-red:  #8c3420;
	--kribi-yellow: #E09518;
	--kribi-brown: #562011;
}

#imagenInicio{
	width: 100%;
}

#imagenInicio > img{
	width: 100%;
	height: 70%
}

#contenedor{
	background: var(--kribi-yellow);
	height: 100%;
}

#texto{
	text-align: center;
	color: var(--kribi-brown);
	vertical-align: middle;
	width: 70%;
	height: 100%;
	margin-left: auto;
	margin-right: auto;
}

.tituloDescripcion{
  margin-top: 5vh;
  margin-bottom: 5vh;
  font-size: calc(1.5vh + 1.5vw);
  font-family:  "Comic Sans MS", cursive, sans-serif;
  font-weight: bolder
}

.contenidoDescripcion{

  font-size: calc(1vh + 1vw);
  font-weight: 500;
}

</style>
