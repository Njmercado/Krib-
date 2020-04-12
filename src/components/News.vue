<template>
  <!-- <v-dialog min-width="80vw" max-width="85vw">
    <template v-slot:activator="{ on }"> -->
      <!-- <v-card v-on="on" style="border-radius: 16px" onclick="openNews"> -->
      <v-card style="border-radius: 16px" @click="openNews(title)">
        <v-img
          :src="photo"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.8)"
        >
          <v-card-title>
            {{title}}
          </v-card-title>
          <v-card-text style="text-align: start; color: lightgrey;">
            {{author}}
          </v-card-text>
        </v-img>
      </v-card>
    <!-- </template>
    <v-card height="88vh" style="border-radius: 16px">
      <iframe :src="data" class="frame"></iframe>
    </v-card>
  </v-dialog> -->
</template>

<script>
export default {

  name: 'News',
  props: [
    'photo',
    'title',
    'data',
    'author'
  ],
  methods: {
    openNews (news) {
      news = news.toLowerCase().split(' ').join('-')
      this.$router.push(`/chakero/${news}`)
    }
  }
}
</script>

<style>
.justify-center {
  margin-left: auto;
  margin-right: auto;
}

.frame {
  height:88vh;
  width: 85vw;
  border-style: none;
}

.title {
  font-weight: 800;
  color: lightgrey;
  font-size: 1em
}
</style>
