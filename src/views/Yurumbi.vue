<template>
  <v-container fluid style='background-color: var(--yellow-background); padding-top: 2em;'>
    <v-row justify='space-around' align="center" style="min-height: 100vh">
      <v-col
        xs='12' sm='12' md='4' lg='3' xl='2'
        v-for='(book, index) in books'
        :key='index'
      >
        <BookLibrary :book='book'></BookLibrary>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import books from '../controller/library.js'
import BookLibrary from '../components/BookLibrary.vue'

export default {

  name: 'Yurumbi',
  data: () => ({
    books: []
  }),
  mounted () {
    this.books = books
  },
  methods: {},
  components: {
    BookLibrary
  }
}
</script>
