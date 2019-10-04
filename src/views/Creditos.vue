<template>
  <v-container 
    fluid 
    grid-list-md 
    grid-list-lg
    style="heigth: 100%;"
  >
    <v-layout 
      row 
      wrap 
      justify-content-center
      v-for="(info, index) in information" 
      :key="index"
    >
      <v-flex 
        xs12 
        sm12 
        md4 
				d-flex
        v-for="(data, jndex) in info.info" 
        :key="jndex"
      > 
        <v-card 
          color="#8c3420"
          :outlined="true"
          max-width="80%"
          dark
          style="border-radius: 20px; margin: auto; cursor: pointer"
          @click="cosa = !cosa"
        >
          <v-img :src="data.img"></v-img>
          <v-card-text style="text-align: left">
            <span>{{data.name}}</span></br>
            <span>{{data.role}}</span></br></br>
            <span v-if="cosa">{{data.info}}</span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {

  name: "Creditos",
  data(){
    return{
      information: [
        {
          info: [
            {
              img: "https://i.ibb.co/34c9z3j/Angie-Zu-iga.png",
              name: "Angie Zuñiga",
              role: "CIO (Directora de sistemas de información)",
              info: "Persona creativa e innovadora, que cree en la tecnología como esa amiga que la cultura necesita para su preservación y para un mayor alcance en las personas. Actual estudiante de ingeniería de Sistemas en la Universidad del Norte, apasionada por la riqueza que tenemos en Colombia en diversidad de lugares y gentes."
            },
            {
              img: "https://i.ibb.co/MS2ptVg/estebantohe.jpg",
              name: "Esteban Torregroza",
              role: "ACM (Director de contenido académico)",
              info: "Internacionalista con énfasis en estudios políticos y africanos. Se desempeñó como presidente del grupo estudiantil afro de la Universidad del Norte, Makeda Kahina, durante el año 2017. Se considera un ciudadano comprometido con la justicia social, la visibilización de los pueblos afrodescendientes y la educación como motor de los cambios sociales y la equidad."
            },
						{
              img: "https://i.ibb.co/2g3yCg5/Crisdelahozmar.jpg",
              name: "Cristina De la Hoz",
              role: "CEO (Presidente ejecutivo)",
              info: "Mujer sobresaliente y lideresa de la comunidad palenquera. Una de las autoras de KRIBÍ, fundadora del Grupo juvenil Afro Makeda Kahina y egresada del programa de Contaduría pública de la Universidad del Norte. Le gusta bailar y disfrutar del ocaso en la playa."
            },

          ]
        },
        {
          info: [
            {
              name: "Nino Mercado",
							role: "CTO (Director de tecnología)",
            },
						{
              name: "Aldair Soto",
							role: "CDO (Director de estrategia digital)",
            }

          ]
        }
      ],
      cosa: false
    }
  },
  methods:{

  },
  components:{

  }  
} 
</script>

<style scoped>

</style>

