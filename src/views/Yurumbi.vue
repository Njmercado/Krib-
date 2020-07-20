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
          rounded
          solo
          clearable
        ></v-text-field>
      </v-col>

      <!-- List of books found by user or given by us -->
      <v-row align="center">
        <v-col xs="12" sm="6" md="4" lg="3" xl="2" v-for="(book, index) in books" :key="index">
          <BookLibrary :book="book"></BookLibrary>
        </v-col>
      </v-row>

      <!-- Dialog close-open handler -->
      <v-btn
        color="#53220C"
        style="position: fixed; bottom: 2em; right: 2em"
        class="btn"
        @click="openCloseModal = !openCloseModal"
        rounded
        fab
      >
        <v-icon style="color: #DEA44A">mdi-filter</v-icon>
      </v-btn>
    </v-container>

    <!-- Dialog to choose books based on specific type -->
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
import books from "../controller/library.js";
import BookLibrary from "../components/BookLibrary.vue";
import TypeOfBookChooserModal from "../components/DialogOfChoices.vue";

export default {
  name: "Yurumbi",
  data: () => ({
    books: [],
    bookSearcherVariable: "",
    openCloseModal: false,
    typesOfBooks: ['Cultura', 'Arte', 'Ciencia']
  }),
  watch: {
    bookSearcherVariable (e) {
      if (e === null || e.length === 0) this.books = books
    }
  },
  methods: {
    handleBookTextFieldSearcher (e) {
      let searchAsRegex = new RegExp(e, 'i')
      this.books = books.filter(el => {
        if (el.name.search(searchAsRegex) >= 0) return el
      })
    },
    chosenTypes (e) {
      if (e.length > 0) {
        this.books = books.filter(el => {
          let index = e.indexOf(el.type)
          if (index >= 0) return el
        })
      } else {
        this.books = books
      }
    }
  },
  mounted () {
    this.books = books;
  },
  components: {
    BookLibrary,
    TypeOfBookChooserModal
  }
};
</script>
