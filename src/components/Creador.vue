<template>
  <v-card
    style="border-radius: 16px; margin: auto;"
    color="#E09518"
    max-width="80%"
    dark
  >
    <v-img :src="img" height="16em"></v-img>
    <v-card-text style="color: #562011;">
      <v-row justify="start">
        <span style="font-weight: bold; font-size: 1.2em">{{name}}</span>
      </v-row>
      <v-row>
        <span style="font-size: .9em; font-weight: 600" class="text--left">{{role}}</span>
      </v-row>
      <v-row>
        <span v-if="showInfo" style="font-size: .9em;">{{description}}</span>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row justify="center" align="center">
        <v-btn
          class="btn"
          @click="showInfo = !showInfo"
          color="#562011"
          fab
          small
          bottom
          absolute
         >
          <v-icon>
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {

  name: 'Creador',
  props: [
    'name',
    'role',
    'description',
    'img'
  ],
  data: () => ({
    showInfo: false
  }),
  computed: {
    icon () {
      return this.showInfo ? 'expand_less' : 'expand_more'
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped>
.text--left {
  text-align: left
}
.text--around {
  text-align: justify
}

span {
  margin-bottom: .4em;
  margin-left: .8em;
  margin-right: .8em;
}
</style>
