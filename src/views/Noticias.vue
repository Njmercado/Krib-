<template>
  <v-container fluid grid-list-md grid-list-lg style="background-color: var(--yellow-background)">
    <v-row wrap justify='space-around' align="center" style="min-height: 100vh">
      <v-col
        align="center"
        cols="12" xs="12" sm="12" md="6" lg="4" xl="4"
        v-for="(news, index) in getArticles"
        :key="index"
        data-aos="zoom-in"
      >
        <News
          :photo="news.photo"
          :data="news.link"
          :title="news.title"
          :author="news.author"
        ></News>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import News from '../components/News.vue'
import { mapGetters } from 'vuex'
export default {

  name: 'Noticias',
  data: () => ({
  }),
  computed: {
    ...mapGetters(['getArticles'])
  },
  methods: {
  },
  components: {
    News
  }
}
</script>
