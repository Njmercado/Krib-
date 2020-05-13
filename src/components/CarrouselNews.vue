<template>
  <v-carousel height="auto" cycle hide-delimiters>
    <v-carousel-item v-for="(newsItem, index) in news" :key="index">
      <v-sheet>
        <v-row justify="center" align="center">
          <v-img
            @click="newsItem.cover ? null : openNews(newsItem.title)"
            aspect-ratio="2.6"
            :src="newsItem.photo"
          ></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'CarrouselNews',
  data: () => ({
    openNew: false,
    data: ''
  }),
  props: ['news'],
  watch: {},
  methods: {
    openNews (data) {
      data = data
        .toLowerCase()
        .split(' ')
        .join('-')
      this.$router.push(`/chakero/${data}`)
    }
  },
  components: {}
}
</script>

<style scope>
.title {
  margin: 16em 0 0 4em;
}

.frame {
  height: 88vh;
  width: 80vw;
  border-style: none;
}
</style>
