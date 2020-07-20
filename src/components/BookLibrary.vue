<template>
  <v-card
    style="border-radius: 16px;"
    class="card-wraper"
  >
    <v-card-title>
      <v-img
        class="mx-auto"
        height="35vh"
        style="border-radius: 16px; cursor: pointer"
        :src="book.image"
        @click="openBook(book.url)"
      ></v-img>
    </v-card-title>
    <v-card-text class="book-title">{{book.name}}</v-card-text>
    <v-card-actions>
      <v-chip color="#DEA44A" style="font-weight: bold">{{book.type}}</v-chip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "BookLibrary",
  props: {
    book: { type: Object }
  },
  methods: {
    openBook (link) {
      window.open(link, '_blank')
    }
  }
};
</script>

<style scoped>

  .book-title {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .card-wraper {
    max-height: 60vh;
    max-width: auto;
    background-color: rgba(222, 164, 74, .7);
    transition-property: max-height;
    transition-duration: 1s;
  }

  .card-wraper:hover {
    max-height: 100vh;
  }

  .card-wraper:hover .book-title{
    display: block;
    white-space: normal;
  }
</style>
