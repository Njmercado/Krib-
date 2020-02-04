<template>
    <v-carousel height="600" cycle hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for='(newsItem, index) in news' :key='index'>
        <v-sheet>
          <v-row justify="center" align="center">
            <v-img
              class="subheading"
              :src="newsItem.photo"
              height="100vh"
            >
              <v-row justify="end" align="center" style="height: 100vh; margin: 4em 4em 0 0" v-if="!newsItem.cover">
                <v-card width="16em" color="grey darken-2" style="border-radius: 8px">
                  <v-card-title class="center" style="font-size: 1.2em">
                    {{newsItem.title}}
                  </v-card-title>
                  <v-card-text style="background-color: grey; text-align: start">
                    {{newsItem.description}}
                  </v-card-text>
                  <v-card-actions style="background-color: grey">

                    <v-dialog width="80vw" v-model="openNew">
                      <template v-slot:activator=" {on} ">
                        <v-spacer></v-spacer>
                        <v-btn class="btn text-lowercase" color="green darken-2" @click="openNews(newsItem.link)" v-on="{on}" small>
                          leer
                        </v-btn>
                      </template>
                      <v-card height="88vh" style="border-radius: 16px">
                        <iframe :src="data" class="frame"></iframe>
                      </v-card>
                    </v-dialog>

                  </v-card-actions>
                </v-card>
              </v-row>
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
  props: [
    'news'
  ],
  watch: {
  },
  methods: {
    openNews (data) {
      this.openNew = true
      this.data = data
    }
  },
  components: {
  }
}
</script>

<style scope>

.title{
  margin: 16em 0 0 4em
}

.frame {
  height:88vh;
  width: 80vw;
  border-style: none;
}
</style>
