<template>
  <v-container fluid grid-list-md grid-list-lg style="background-color: var(--yellow-background)">

    <!-- General news -->
    <v-row wrap justify='space-around' align="center" style="min-height: 100vh">
      <v-col
        align="center"
        cols="12" xs="12" sm="12" md="6" lg="4" xl="4"
        v-for="(news, index) in getArticles.slice(0, 3)"
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

    <!-- APU news -->
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header style="background-color: #DEA44A">
          <div class="text-center" style="font-weight: bold"> Apu </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content style="background-color: var(--yellow-background)">
          <v-row wrap justify='space-around' align="center">
            <v-col
              align="center"
              cols="12" xs="12" sm="12" md="6" lg="4" xl="4"
              data-aos="zoom-in"
            >
              <News
                :photo="getArticles[3].photo"
                :title="getArticles[3].title"
                :author="getArticles[3].author"
              ></News>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
