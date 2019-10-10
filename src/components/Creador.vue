<template>
  <v-card 
    color="#E09518"
    :outlined="true"
    max-width="80%"
    dark
    style="border-radius: 20px; margin: auto;"
  >
    <v-img :src="img"></v-img>
    <v-card-text 
      style="text-align: left; color: #562011"
    >
      <span style="font-weight: bold">{{name}}</span></br>
      <span style="font-size: calc(.6vh + .7vw)">{{role}}</span></br></br>
      <span v-if="showInfo">{{description}}</span>
    </v-card-text>
    <v-btn
      @click="showInfo = !showInfo"
      color="#562011"
      fab
      small
      bottom
      absolute
      class="btn"
    >
      <v-icon>
        mdi-unfold-more-horizontal
      </v-icon>
    </v-btn>
  </v-card>
</template>

<script>

export default {

  name: "",
  props:[
    'name',
    'role',
    'description',
    'img'
  ],
  data: () => ({
    showInfo: false
  }),
  methods:{

  },
  components:{

  }  
} 
</script>

<style scoped>

</style>

