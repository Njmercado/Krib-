<template>
    <v-card
      :color="color"
      :elevation="elevation ? 1 : 0"
      style="border-radius:  0px"
    >
      <v-card-title :style="textStyle">
        <label class="mx-auto" :style="styles">{{word}}</label>
      </v-card-title>
      <v-chip class="m-1" v-for="(def, index) in definitions" :key="index">
        {{ def }}
      </v-chip>
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
    elevation: { type: Boolean, default: true },
    definitions: { type: Array }
  },
  computed: {
    textStyle () { return ` color: ${this.textColor}` }
  },
  created: function () {
    this.styles = `font-size: ${this.size}; font-weight: bold; cursor: pointer; margin-bottom: -8px`
  }
}
</script>
