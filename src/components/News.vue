<template>
  <v-card style="border-radius: 12px" @click="openNews(title)">
    <v-img
      style="min-height: 20em"
      :src="photo"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.5)"
    >
      <v-card-title> {{title}} </v-card-title>
      <v-card-text style="text-align: start; color: lightgrey; font-weight: bold"> {{author}} </v-card-text>
    </v-img>
  </v-card>
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
