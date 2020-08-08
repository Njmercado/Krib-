<template>
  <div style="background-color: var(--yellow-background); padding: 2em;">
    <v-container fluid>
      <!-- Book searcher input -->
      <v-col cols="12" sm="8" md="4" lg="4" xl="3" class="mx-auto">
        <v-text-field
          v-model="bookSearcherVariable"
          @keydown.enter="handleBookTextFieldSearcher(bookSearcherVariable)"
          label="buscar"
          append-outer-icon="mdi-magnify"
          @click:append-outer="handleBookTextFieldSearcher(bookSearcherVariable)"
          color="brown"
          rounded solo clearable
        ></v-text-field>

        <!-- Button to redirect to videos section -->
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-on="on" color="#53220C" class="btn" @click="openVideosPage()" rounded>
              <v-icon style="color: #DEA44A">mdi-movie</v-icon>
            </v-btn>
          </template>
          <span>Videos</span>
        </v-tooltip>
      </v-col>

      <!-- List of avaliable books -->
      <v-row align="center">
        <v-col xs="12" sm="6" md="4" lg="3" xl="2" v-for="(book, index) in books" :key="index">
          <BookLibrary :book="book"></BookLibrary>
        </v-col>
      </v-row>

      <!-- Pagination -->
      <v-row justify="center">
        <v-pagination
          v-model="page"
          :length="totalOfPages"
          :total-visible="booksPerPage/2+2"
          color="#53220C"
          class="mt-5"
          style="margin-bottom: -32px"
          circle
        ></v-pagination>
      </v-row>

      <!-- Categories filter Dialog open-close button handler -->
      <v-tooltip top left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-on="on"
            color="#53220C"
            style="position: fixed; bottom: 2em; right: 2em"
            class="btn"
            @click="openCloseModal = !openCloseModal"
            data-aos="shake"
            rounded
            fab
          >
            <v-icon style="color: #DEA44A">mdi-filter</v-icon>
          </v-btn>
        </template>
        <span>Filtrar por categoria</span>
      </v-tooltip>
    </v-container>

    <!-- Dialog to choose books based on specific categories -->
    <TypeOfBookChooserModal
      :open="openCloseModal"
      :items="typesOfBooks"
      color="#DEA44A"
      title="Tipos"
      @chosen="chosenTypes"
    ></TypeOfBookChooserModal>
  </div>
</template>

<script>
import books from '../data/library.js'
import categories from '../data/libraryBooksCategories.js'
import BookLibrary from '../components/BookLibrary.vue'
import TypeOfBookChooserModal from '../components/DialogOfChoices.vue'

export default {
  name: 'Yurumbi',
  data: () => ({
    books: [],
    bookSearcherVariable: '',
    openCloseModal: false,
    typesOfBooks: [],
    totalOfPages: 0,
    page: 1,
    booksPerPage: 8
  }),
  watch: {
    bookSearcherVariable (e) {
      if (e === null || e.length === 0) this.books = books
    },
    page (e) {
      const currentPosition = (e - 1) * this.booksPerPage
      this.books = books.slice(currentPosition, currentPosition + this.booksPerPage)
    }
  },
  methods: {
    handleBookTextFieldSearcher (e) {
      let searchAsRegex = new RegExp(e, 'i')
      this.books = books.filter((el) => {
        if (el.name.search(searchAsRegex) >= 0) return el
      })
    },
    chosenTypes (e) {
      if (e.length > 0) {
        this.books = books.filter((el) => {
          let index = e.indexOf(el.type)
          if (index >= 0) return el
        })
      } else {
        this.books = books
      }
    },
    openVideosPage () {
      this.$router.push('/yurumbí/videos')
    }
  },
  mounted () {
    this.books = books.slice(0, this.booksPerPage)
    this.typesOfBooks = categories
    this.totalOfPages = Math.ceil(books.length / this.booksPerPage)
  },
  components: {
    BookLibrary,
    TypeOfBookChooserModal
  }
}
</script>

<style scoped>
@keyframes shake {
  0% {
    width: 40px;
    height: 40px;
  }
  100% {
    width: 50px;
    height: 50px;
  }
}
.shake {
  animation: shake 1s infinite forwards;
}
</style>
