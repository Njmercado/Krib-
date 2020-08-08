<template>
  <div>
    <v-container fluid class="main-container">
      <v-row justify="center" align="center" style="min-height: 100vh">
        <v-col
          cols="12" md="3" lg="3" xl="3"
          v-for="(video, index) in videos" :key="index"
          class="mt-10"
        >
          <v-card elevation="4" @click="openVideo(video.videoid)">
            <v-img :src="getVideoImage(video.videoid)"></v-img>
            <div class="card-content">
              <h5> {{video.title}} </h5>
              <v-card-subtitle> {{video.description}} </v-card-subtitle>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-pagination
          v-model="page"
          :length="totalOfPages"
          :total-visible="videosPerPage/2+2"
          color="#53220C"
          class="mb-5"
          circle
        ></v-pagination>
      </v-row>
    </v-container>

    <!-- Dialog to visualize chosen video -->
    <v-dialog v-model="openVideoModal" max-width="50em">
      <Video width="100%" height="500" :videoid="videoid"></Video>
    </v-dialog>
  </div>
</template>

<script>
import Video from '../components/Video.vue'
import Videos from '../data/libraryVideos.js'
export default {
  name: 'YurumbíVideos',
  data: () => ({
    openVideoModal: false,
    videoid: '',
    page: 1,
    totalOfPages: 0,
    videosPerPage: 4,
    videos: []
  }),
  watch: {
    page (e) {
      const currentPosition = (e - 1) * this.videosPerPage
      this.videos = Videos.slice(currentPosition, currentPosition + this.videosPerPage)
    }
  },
  methods: {
    openVideo (videoid) {
      this.videoid = videoid
      this.openVideoModal = true
    },
    getVideoImage (videoid) {
      return 'https://img.youtube.com/vi/' + videoid + '/0.jpg'
    }
  },
  mounted () {
    this.videos = Videos.slice(0, this.videosPerPage)
    this.totalOfPages = Math.ceil(Videos.length / this.videosPerPage)
  },
  components: { Video }
}
</script>

<style scoped>
  .main-container {
    min-height: 100vh;
    background-color: var(--yellow-background)
  }
  .video {
    border-radius: 0px;
  }
  .card-content {
    background-color: rgba(222, 164, 74);
    padding-top: 16px;
  }
</style>
