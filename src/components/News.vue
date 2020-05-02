<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      style="border-radius: 12px"
      @click="openNews(title)"
      :elevation="hover ? 10 : 2"
      :class="{ 'on-hover': hover }"
    >
      <v-img
        style="min-height: 20em"
        :src="photo"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.5)"
      >
        <v-card-title
          v-if="hover"
          :class="{ 'show-btns': hover }">{{title}}</v-card-title>
        <v-card-text
          v-if="hover"
          :class="{ 'show-btns': hover }"
          style="text-align: start; color: lightgrey; font-weight: bold">{{author}}</v-card-text>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "News",
  props: ["photo", "title", "data", "author"],
  methods: {
    openNews(news) {
      news = news
        .toLowerCase()
        .split(" ")
        .join("-");
      this.$router.push(`/chakero/${news}`);
    }
  }
};
</script>

<style>
.justify-center {
  margin-left: auto;
  margin-right: auto;
}

.frame {
  height: 88vh;
  width: 85vw;
  border-style: none;
}

.title {
  font-weight: 800;
  color: lightgrey;
  font-size: 1em;
}

.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.85;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
