<template>
  <v-card
    style='border-radius: 16px;'
    :href='book.url'
    target='_blank'
  >
    <v-card-title>
      <v-img class='mx-auto' :src='book.image'></v-img>
    </v-card-title>
    <v-card-text>
      {{book.name}}
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'BookLibrary',
  props: {
    book: { type: Array }
  }
}

</script>
