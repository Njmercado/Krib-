<template>
  <v-container fluid style="background-color: var(--yellow-background)">
    <v-row justify="center" align="center" style="min-height: 30vh">
      <v-col
        v-for="(user, index) in getImages().splice(0, 3)"
        :key="index"
        cols="4"
        xs="4"
        sm="4"
        md="2"
        lg="2"
      >
        <img class="animated zoomIn avatar-transition" :src="user" @click="chosenUserIndex = index"/>
      </v-col>
    </v-row>

    <v-col cols="11" md="8" lg="5" class="mx-auto">
      <v-row
        justify="center"
        style="font-weight: bold; font-size: 2em; color:  #5f3323"
      >{{chosenUserName}}</v-row>
      <v-row
        justify="center"
        style="font-weight: bold; font-size: 1.4em; color:  #5f3323"
      >{{chosenUserRole}}</v-row>
      <v-row justify="center" style="font-size: 1em; color: gray">{{chosenUserInfo}}</v-row>
    </v-col>

    <v-row justify="center" align="center" style="min-height: 30vh">
      <v-col
        v-for="(user, index) in getImages().splice(3)"
        :key="index"
        cols="4"
        xs="4"
        sm="4"
        md="2"
        lg="2"
      >
        <img class="animated zoomIn avatar-transition" :src="user" @click="chosenUserIndex = index+3"/>
      </v-col>
    </v-row>

    <!-- Mision -->
    <v-row justify="center" class="mt-10"
      style="font-weight: bold; font-size: 2em; color:  #5f3323"
    >Misión</v-row>
    <v-row justify="center">
      <v-col cols="10" md="8" lg="8">
        Preservar y promover la herencia cultural y lingûistica de San Basilio de Palenque.
        Facilitar a la comunidad académica y público en general el acceso al saber de la
        Lengua Palenquera y transmitirlo a generaciones actuales y futuras a través del
        reconocimiento de valores, prácticas, tradiciones y expresiones culturales alrededor
        de la lengua ancestral en aras de salvaguardar la filosofía e idiosincrasia del pueblo
        palenquero.
      </v-col>
    </v-row>
    <!-- Visión -->
    <v-row justify="center" class="mt-10" style="font-weight: bold; font-size: 2em; color:  #5f3323">Visión</v-row>
    <v-row justify="center">
      <v-col cols="10" md="8" lg="8">
        Ser el primer sistema tecnológico en línea que promueve la lengua palenquera al
        crear escenarios virtuales innovadores, multilingües y pluriculturales que facilitan la
        búsqueda y práctica del conocimiento y léxico palenquero.
        <span
          style="font-weight: bold"
        >Ofrecer a un clic acercamiento con la San Basilio de Palenque.</span>
      </v-col>
    </v-row>

    <!-- Filosofia -->
    <v-row justify="center" class="mt-10" style="font-weight: bold; font-size: 2em; color:  #5f3323">filosofía</v-row>
    <v-row justify="center">
      <v-col cols="10" md="8" lg="8">
        <span
          style="font-weight: bold"
        >creemos que la educación es el mejor instrumento para transformar</span>la sociedad
        basado en el reconocimiento y respeto a la diferencia. una comunidad educada
        construye paz. promover san basilio de palenque a través de la lengua es pieza clave
        para mantener la idiosincrasia del pueblo, su historia, saberes, prácticas, valores
        culturales, cosmovisión y entender su relación con otros pueblos y lenguas.
        ofrecer a un clic acercamiento con la san basilio de palenque.
      </v-col>
    </v-row>
    <!-- Valores -->
    <v-row justify="center" class="mt-10" style="font-weight: bold; font-size: 2em; color:  #5f3323">Valores</v-row>
    <v-row justify="center">
      <v-chip class="mx-2">Conectar</v-chip>
      <v-chip class="mx-2">Pasión</v-chip>
      <v-chip class="mx-2">Innovación</v-chip>
    </v-row>
    <v-row justify="center">
      <v-col cols="10" md="8" lg="8">
        Es el conocimiento la llave para abrir las puertas a la libertad. Al empoderar y conectar
        culturas podemos entender la paz desde el respeto y la diversidad. Por eso, la pasión es la
        razón que nos motiva a innovar en cibersitios de aprendizaje e interacción cultural.
      </v-col>
    </v-row>

    <!-- Ventajas -->
    <v-row justify="center" class="mt-10" style="font-weight: bold; font-size: 2em; color:  #5f3323">Ventajas</v-row>
    <v-row justify="center">
      <v-col cols="10" md="8" lg="8">
        Kribí como herramienta digital es una solución interactiva y divertida; permite llegar a
        diferentes lugares que cuenten con acceso a internet, evitando que los usuarios
        tengan que trasladarse. También reduce valores negativos ambientales que se dan
        para acceder a escenarios de aprendizajes tradicionales. La plataforma, por ende,
        funciona como complemento y responde positivamente a la integración de las tecnologías
        de información y la comunicación en las dinámicas sociales y de formación.
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Creditos",
  data: () => ({
    information: [
      {
        img: "https://i.ibb.co/34c9z3j/Angie-Zu-iga.png",
        name: "Angie Zuñiga",
        role: "CIO (Directora de sistemas de información)",
        info:
          "Persona creativa e innovadora, que cree en la tecnología como esa amiga que la cultura necesita para su preservación y para un mayor alcance en las personas. Actual estudiante de ingeniería de Sistemas en la Universidad del Norte, apasionada por la riqueza que tenemos en Colombia en diversidad de lugares y gentes."
      },
      {
        img: "https://i.ibb.co/MS2ptVg/estebantohe.jpg",
        name: "Esteban Torregroza",
        role: 'ACM (Director de contenido académico)',
        info:
          "Internacionalista con énfasis en estudios políticos y africanos. Se desempeñó como presidente del grupo estudiantil afro de la Universidad del Norte, Makeda Kahina, durante el año 2017. Se considera un ciudadano comprometido con la justicia social, la visibilización de los pueblos afrodescendientes y la educación como motor de los cambios sociales y la equidad."
      },
      {
        img: "https://i.ibb.co/2g3yCg5/Crisdelahozmar.jpg",
        name: "Cristina De la Hoz",
        role: "CEO (Presidente ejecutivo)",
        info:
          "Mujer sobresaliente y lideresa de la comunidad palenquera. Una de las autoras de KRIBÍ, fundadora del Grupo juvenil Afro Makeda Kahina y egresada del programa de Contaduría pública de la Universidad del Norte. Le gusta bailar y disfrutar del ocaso en la playa."
      },
      {
        img: "https://i.ibb.co/pytGNbf/Screenshot-20190922-190842-1.jpg",
        name: "Nino Mercado",
        role: "CTO (Director de tecnología)",
        info:
          "Amante de la tecnología. Cada dia trato de sobresalir para dejar presente mis capacidades y demostrarme que soy capaz de crecer. Actualmente soy estudiante de la hermosa carrera de Ing.Sistemas y Computación, de la Universidad del Norte, en donde he desarrollado todo el amor que siento hacia el desarrollo y las techs"
      },
      {
        img:
          "https://i.ibb.co/gSCVDT5/LRM-EXPORT-8639413058818-20190930-000137383.jpg",
        name: "Aldair Soto",
        role: "CDO (Director de estrategia digital)",
        info:
          "Persona emprendedora y creativa capaz de crear ideas adaptándose a los cambios culturales de la sociedad, proponiendo conceptos nuevos y trabajando en una imagen para representar la cultura palanquera al mundo entero a través de la fotografía y el diseño gráfico."
      }
    ],
    chosenUserIndex: 2,
    chosenUserName: "",
    chosenUserRole: "",
    chosenUserInfo: ""
  }),
  mounted () {
    let { name, role, info } = this.information[2]
    this.chosenUserName = name
    this.chosenUserRole = role
    this.chosenUserInfo = info
  },
  watch: {
    chosenUserIndex(val) {
      let { name, role, info } = this.information[val];
      this.chosenUserName = name;
      this.chosenUserRole = role;
      this.chosenUserInfo = info;
    }
  },
  methods: {
    // Return link of user image
    getImages () {
      return this.information.map(el => el.img);
    }
  },
  components: {
    // Creator
  }
}
</script>

<style scoped>
  .avatar-transition {
    width: calc(4.5vh + 4.5vw);
    height: calc(4.5vh + 4.5vw);
    border-radius: 100%;
    cursor: pointer;
    transition-property: width height;
    transition-duration: 1s;
  }

  .avatar-transition:hover {
    width: calc(6.5vh + 6.5vw);
    height: calc(6.5vh + 6.5vw);
  }
</style>
