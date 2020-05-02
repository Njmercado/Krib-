<template>
    <v-card
      :color="color"
      :elevation="elevation ? 1 : 0"
    >
      <v-card-title :style="textStyle">
        <label class="center-x" :style="styles">{{word}}</label>
      </v-card-title>
    </v-card>
</template>

<script>

export default {

  name: 'Word',
  data: () => ({
    styles: ''
  }),
  props: {
    word: { type: String },
    size: { type: String },
    color: { type: String },
    textColor: { type: String, default: 'white' },
    elevation: { type: Boolean, default: true }
  },
  computed: {
    textStyle () { return ` color: ${this.textColor}` }
  },
  created: function () {
    this.styles = `font-size: ${this.size}; font-weight: bold; cursor: pointer;`
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
