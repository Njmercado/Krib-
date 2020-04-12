<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="7" lg="7" xs="11" sm="11">
        <v-card style="border-radius: 1em">
          <v-img :src="articleImage" aspect-ratio="3" height="20em"></v-img>
        </v-card>
      </v-col>
    </v-row>

    <!-- Content -->
    <v-row justify="center">
      <v-col cols="12" md="7" lg="7" xs="11" sm="11">
        <div style="text-align: start; font-size: 1.1em; padding: 0 8px" v-html='configMarked()'></div>
      </v-col>
    </v-row>
    <!-- Author -->
    <v-row justify="center">
      <v-col cols="12" md="7" lg="7" xl="7" xs="11" sm="11">
        <v-card style="border-radius: 1em">
          <div style="text-align: start; padding: 1em">
            <v-avatar
              size="96"
              color="#562011"
            >
              <img :src="authorImage">
            </v-avatar>
            <strong style="margin-left: 16px"> {{author}} </strong>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Server from '../serverConfigurations'
import { mapGetters, mapMutations } from 'vuex'
let marked = require('marked')

export default {
  data: () => ({
    data: '',
    author: '',
    authorImage: '',
    articleImage: '',
    timeToWaitAccordingToInternetSpeed: 3000
  }),
  props: ['id'],
  computed: {
    ...mapGetters(['getArticles'])
  },
  async created () {
    if (!this.hasArticlesGottenFromServer()) {
      await this.getArticlesFromServer()
      this.timeToWaitAccordingToInternetSpeed /= await navigator.connection.downlink
    }
  },
  mounted () {
    setTimeout(() => {
      let result = this.getArticleRoute()
      this.data = require(`../../public/markdown/${result.title.toLowerCase().split(' ').join('-')}.js`)
      this.author = result.author
      this.authorImage = result.authorImage
      this.articleImage = result.photo
    }, this.timeToWaitAccordingToInternetSpeed)
  },
  methods: {
    configMarked () {
      return marked(this.data)
    },
    getArticleRoute () {
      return this.getArticles.find(
        article => article.title.toLowerCase().split(' ').join('-') === this.id
      )
    },
    hasArticlesGottenFromServer () {
      return this.getArticles.lenght > 0
    },
    getArticlesFromServer () {
      Server.getArticles().then(articles => {
        this.setArticles(articles)
      })
    },
    ...mapMutations(['setArticles'])
  }
}
</script>
