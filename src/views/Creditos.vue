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
      <v-col cols="10" md="8" lg="8" style="text-align: left">
        Preservar y promover la herencia cultural y lingüística de San Basilio de Palenque. Facilitar a la comunidad académica y público en general el acceso al saber de la Lengua Palenquera y transmitirlo a generaciones actuales y futuras a través del reconocimiento de valores, prácticas, tradiciones y expresiones culturales alrededor de la lengua ancestral en aras de salvaguardar la filosofía e idiosincrasia del pueblo palenquero.
      </v-col>
    </v-row>
    <!-- Visión -->
    <v-row justify="center" class="mt-10" style="font-weight: bold; font-size: 2em; color:  #5f3323">Visión</v-row>
    <v-row justify="center">
      <v-col cols="10" md="8" lg="8" style="text-align: left">
        Ser el primer sistema tecnológico en línea que promueve la lengua palenquera al crear escenarios virtuales innovadores, multilingües y pluriculturales que facilitan la búsqueda y práctica del conocimiento y léxico palenquero. Ofrecer a un clic acercamiento con San Basilio de Palenque.
        <span
          style="font-weight: bold"
          >Ofrecer a un clic acercamiento con la San Basilio de Palenque.</span>
      </v-col>
    </v-row>

    <!-- Filosofia -->
    <v-row justify="center" class="mt-10" style="font-weight: bold; font-size: 2em; color:  #5f3323">filosofía</v-row>
    <v-row justify="center">
      <v-col cols="10" md="8" lg="8" style="text-align: left">
        <span
          style="font-weight: bold"
          >creemos que la educación es el mejor instrumento para transformar</span>la sociedad
        Creemos que la educación es el mejor instrumento para transformar la sociedad basado en el reconocimiento y respeto a la diferencia. Una comunidad educada construye paz. Promover San Basilio de Palenque a través de la lengua es pieza clave para mantener la idiosincrasia del pueblo, su historia, saberes, prácticas, valores culturales, cosmovisión y entender su relación con otros pueblos y lenguas.
      </v-col>
    </v-row>
    <!-- Valores -->
    <v-row justify="center" class="mt-10" style="font-weight: bold; font-size: 2em; color:  #5f3323">Valores</v-row>
    <v-row justify="center">
      <v-chip class="mx-2">Conexión</v-chip>
      <v-chip class="mx-2">Pasión</v-chip>
      <v-chip class="mx-2">Innovación</v-chip>
    </v-row>
    <v-row justify="center">
      <v-col cols="10" md="8" lg="8" style="text-align: left">
        Es el conocimiento la llave para abrir las puertas a la libertad. Al empoderar y conectar culturas podemos entender la paz desde el respeto y la diversidad. Por eso, la pasión es la razón que nos motiva a innovar en cibersitios de aprendizaje e interacción cultural.
      </v-col>
    </v-row>

    <!-- Ventajas -->
    <v-row justify="center" class="mt-10" style="font-weight: bold; font-size: 2em; color:  #5f3323">Ventajas</v-row>
    <v-row justify="center">
      <v-col cols="10" md="8" lg="8" style="text-align: left">
        Kribí como herramienta digital es una solución interactiva y divertida; permite llegar a diferentes lugares que cuenten con acceso a internet, evitando que los usuarios tengan que trasladarse. También reduce valores negativos ambientales que se dan para acceder a escenarios de aprendizajes tradicionales. La plataforma, por ende, funciona como complemento y responde positivamente a la integración de las tecnologías de información y la comunicación en las dinámicas sociales y de formación.
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-10" style="font-weight: bold; font-size: 2em; color:  #5f3323">Reconocimiento y agradecimiento</v-row>
    <v-row justify="center">
      <v-col cols="10" md="8" lg="8" style="text-align: left">
        Somos los que hicieron, los que se fueron en cuerpo pero su legado permanece entre nosotros y cada una de las acciones de los que nos rodean. Kribí es el resultado de los sueños del pueblo en responder a la necesidad de adaptarse a nuevos escenarios y reconocer que hay que dar pasos acelerados en el uso de tecnologías  como mediador para la interacción y la comunicación entre las personas. <br/><br/>

        El proceso de creación de este mundo que llamamos Kribí se construye a partir de la capacidad de unir diferentes sueños, procesos e imaginar un espacio virtual que sea puente entre San Basilio de Palenque y su gente con cualquier parte del mundo través de un clic.
        A lo largo de mi crecimiento personal, profesional y durante la creación este proyecto  he contado con el apoyo de individuos que desde sus diferentes saberes han aportado bloques para cimentar lo que hoy con dedicación  le ofrezco a la sociedad circundante. <br/> <br/>

        Gracias a los maestros y maestras de mi vida, a la Mag.  Edith Márquez (Magisterio),por su apoyo incondicional al ser madre y guía; al Lic. Luis Felipe Salgado y  al Dr. Hiram Smith (Bucknell University), mis profesores de Lengua Palenquera; uno desde su saber ancestral y el otro desde la indagación académica, La mujeres investigadoras de Palenque: Mag. Juana ‘Pavi‘ Pérez (QEPD) quien nos ha dejado sus aportes alrededor de la lengua, Lic. Solmery Cásseres por obsequiar a la comunidad palenquera y al ámbito académico el primer diccionario físico de la Lengua Palenquera; agradezco igualmente a Dra. Rafaela Vos (Universidad del Atlántico) Lic. Basilia Pérez y Lic. Ereilis Navarro escritoras y docentes que son modelos a seguir; a mis abuelas palenqueras Maria ‘Coco‘ Reyes, Florentina ‘Yayi‘ Salas, Gregoria ‘Ita‘ Hernandez, Maria ‘Mayito‘ Cassiani (QEPD) quienes desde el amor incondicional me transmiten saberes ancestrales. Mis agradecimiento también van al Dr.  Dolcey Romero (Universidad del Atlántico, Universidad Simón Bolívar), experto en historia afro, a quien rindo mi aprecio. Quiero dar un agradecimiento especial a los hermanos de proceso de mi madre junto a los que por su tenacidad, entrega y amor por la comunidad crecí admirando, ellos son: Dr. Francisco Asprilla, Lic. Manuel ‘Cho Mane‘ Hernandez, Lic Emel ‘Biko‘ Salas, Lic. Faustino ‘Cho Fao‘ Torres, Esp. Adán Torres; a los maestros que inspiran a través de la música Viviano Torres, Rafael Cassiani, José ‘Paito‘ Valdez, Tomás Teherán; a Uninorte por abrazar en mi recorrido por el alma mater mis ideas y con la guía de este plantel apoyarme en el trabajo del Diccionario A ten mbila. <br/> <br/>

        Gracias a la familia Márquez, a los amigos en especial Psic. Enrique Márquez, Lic. Danilo Reyes, Mag. Aiden Salgado, Esp. Juan Betancur (ACNUR), Dr. Alexander Steffanell (Lee University), Lic. Wilber Lareus, Lic. Carlos Ordoñez, Lic. Luis ‘Luisja‘ Hernandez. Cabe destacar a los jóvenes que han sido miembros de Makeda Kahina, y muy en especial agradecimiento a Angie Zuñiga por abanderar el proceso de creación cibernética del espacio Kribí; a Nino Mercado por su trabajo arduo y paciencia en desarrollo web, a Aldair Soto por dejarse contagiar desde el Festival Internacional de Cine Evaristo Márquez - FICEM‘ a crear acciones en pro a la comunidad palenquera y llevar a otro nivel la estética gráfica, a Lic. Esteban Torregrosa por su dedicación a la academia, y a cada uno de los miembros de Kribí que imprimen sus ideas, conocimientos, tiempo y pasión por entregar al mundo a través de este Palenque vivo y virtual la mejor experiencia para los usuarios.
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Suto from '../controller/suto.js'

export default {
  name: 'Creditos',
  data: () => ({
    information: [],
    chosenUserIndex: 2,
    chosenUserName: '',
    chosenUserRole: '',
    chosenUserInfo: ''
  }),
  mounted () {
    this.information = Suto
    let { name, role, info } = this.information[2]
    this.chosenUserName = name
    this.chosenUserRole = role
    this.chosenUserInfo = info
  },
  watch: {
    chosenUserIndex (val) {
      let { name, role, info } = this.information[val]
      this.chosenUserName = name
      this.chosenUserRole = role
      this.chosenUserInfo = info
    }
  },
  methods: {
    // Return link of user image
    getImages () {
      return this.information.map(el => el.img)
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
  transition-duration: .5s;
}

.avatar-transition:hover {
  width: calc(6.5vh + 6.5vw);
  height: calc(6.5vh + 6.5vw);
}
</style>
