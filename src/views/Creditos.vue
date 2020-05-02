<template>
  <v-container
    fluid
    grid-list-md
    grid-list-lg
    style="background-color: var(--yellow-background)"
  >
    <!-- <v-row -->
    <!--   justify='center' -->
    <!-- > -->
    <!--   <v-col -->
    <!--     v-for='(data, index) in information' -->
    <!--     :key='index' -->
    <!--     cols='12' -->
    <!--     xs='12' -->
    <!--     sm='6' -->
    <!--     md='4' -->
    <!--     lg='4' -->
    <!--     xl='4' -->
    <!--     d-flex -->
    <!--   > -->
    <!--     <Creator :name='data.name' :role='data.role' :description='data.info' :img='data.img'></Creator> -->
    <!--   </v-col> -->
    <!-- </v-row> -->

    <v-timeline class="my-10">
      <v-timeline-item
        v-for="(user, index) in information"
        :key="index"
        large
      >
        <template v-slot:icon>
          <v-avatar size="70">
            <img :src="user.img">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span style="font-size: 1.4em">{{user.name}}</span>
        </template>
        <v-card elevation="3">
          <v-card-title class="brown lighten-1"> <label style="color: white"> {{user.role}} </label></v-card-title>
          <v-card-text>{{user.info}}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
// import Creator from '../components/Creador.vue'

export default {

  name: 'Creditos',
  data: () => ({
    information: [
      {
        img: 'https://i.ibb.co/34c9z3j/Angie-Zu-iga.png',
        name: 'Angie Zuñiga',
        role: 'CIO (Directora de sistemas de información)',
        info: 'Persona creativa e innovadora, que cree en la tecnología como esa amiga que la cultura necesita para su preservación y para un mayor alcance en las personas. Actual estudiante de ingeniería de Sistemas en la Universidad del Norte, apasionada por la riqueza que tenemos en Colombia en diversidad de lugares y gentes.'
      },
      {
        img: 'https://i.ibb.co/MS2ptVg/estebantohe.jpg',
        name: 'Esteban Torregroza',
        role: 'ACM (Director de contenido académico)',
        info: 'Internacionalista con énfasis en estudios políticos y africanos. Se desempeñó como presidente del grupo estudiantil afro de la Universidad del Norte, Makeda Kahina, durante el año 2017. Se considera un ciudadano comprometido con la justicia social, la visibilización de los pueblos afrodescendientes y la educación como motor de los cambios sociales y la equidad.'
      },
      {
        img: 'https://i.ibb.co/2g3yCg5/Crisdelahozmar.jpg',
        name: 'Cristina De la Hoz',
        role: 'CEO (Presidente ejecutivo)',
        info: 'Mujer sobresaliente y lideresa de la comunidad palenquera. Una de las autoras de KRIBÍ, fundadora del Grupo juvenil Afro Makeda Kahina y egresada del programa de Contaduría pública de la Universidad del Norte. Le gusta bailar y disfrutar del ocaso en la playa.'
      },
      {
        img: 'https://i.ibb.co/pytGNbf/Screenshot-20190922-190842-1.jpg',
        name: 'Nino Mercado',
        role: 'CTO (Director de tecnología)',
        info: 'Amante de la tecnología. Cada dia trato de sobresalir para dejar presente mis capacidades y demostrarme que soy capaz de crecer. Actualmente soy estudiante de la hermosa carrera de Ing.Sistemas y Computación, de la Universidad del Norte, en donde he desarrollado todo el amor que siento hacia el desarrollo y las techs'
      },
      {
        img: 'https://i.ibb.co/gSCVDT5/LRM-EXPORT-8639413058818-20190930-000137383.jpg',
        name: 'Aldair Soto',
        role: 'CDO (Director de estrategia digital)',
        info: 'Persona emprendedora y creativa capaz de crear ideas adaptándose a los cambios culturales de la sociedad, proponiendo conceptos nuevos y trabajando en una imagen para representar la cultura palanquera al mundo entero a través de la fotografía y el diseño gráfico.'
      }
    ],
    showInfo: false
  }),
  methods: {
  },
  components: {
    // Creator
  }
}
</script>
