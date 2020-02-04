<template>
    <v-card
      style="cursor: pointer; color: #562011; margin: .8em; border-radius: 16px"
      color="#E09518"
    >
      <v-card-title>
        <label class="center-x" :style="fontSize">{{word}}</label>
      </v-card-title>
    </v-card>
</template>

<script>

export default {

  name: 'Word',
  props: [
    'word',
    'size'
  ],
  data: () => ({
    fontSize: ''
  }),
  created: function () {
    this.fontSize = `font-size: ${this.size}px; font-weight: bold; cursor: pointer`
  }
}
</script>

<style >
.center-x {
  text-align: center;
  margin-left: auto;
  margin-right: auto
}
</style>
