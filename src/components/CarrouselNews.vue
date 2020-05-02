<template>
  <v-carousel height="auto" cycle :show-arrows='false'>
    <v-carousel-item v-for="(newsItem, index) in news" :key="index">
      <v-sheet>
        <v-row justify="center" align="center">
          <v-img
            @click="newsItem.cover ? null : openNews(newsItem.title)"
            class="subheading"
            style="cursor: pointer"
            contain aspect-ratio="2"
            :src="newsItem.photo">
            <!-- <v-row -->
              <!-- justify="end" -->
              <!-- align="center" -->
              <!-- style="margin: 4em 4em 0 0" -->
              <!-- v-if="!newsItem.cover" -->
            <!-- > -->
              <!-- <v-card color="grey darken-2" style="border-radius: 8px"> -->
                <!-- <v-card-title class="center" style="font-size: 1.2em">{{newsItem.title}}</v-card-title> -->
                <!-- <v-card-text -->
                  <!-- style="background-color: grey; text-align: start" -->
                <!-- >{{newsItem.description}}</v-card-text> -->
                <!-- <v-card-actions style="background-color: grey"> -->
                  <!-- <v-spacer></v-spacer> -->
                  <!-- <v-btn -->
                    <!-- class="btn text-lowercase" -->
                    <!-- color="green darken-2" -->
                    <!-- small -->
                  <!-- >leer</v-btn> -->
                <!-- </v-card-actions> -->
              <!-- </v-card> -->
            <!-- </v-row> -->
          </v-img>
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
