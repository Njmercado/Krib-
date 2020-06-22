<template>
  <v-row
    style="background-color: #E0E0E0;
           border-radius: 10px;
           margin-bottom: 5vh;
           padding: 1vh"
    >
      <v-chip
        v-for="(word, index) in finalWords"
        :key="index"
        class="m-1 text-uppercase"
        color="#e09518"
        dark
        small
      >
        {{word.palabra}}
      </v-chip>
    </v-row>
</template>

<script>

export default {

  name: 'WordList',
  props: [
    'words',
    'deleteWord'
  ],
  data: () => ({
    finalWords: []
  }),
  watch: {
    deleteWord (val) {
      this.finalWords = this.finalWords.filter(el => el.palabra !== val)
    },
    words (val) {
      this.finalWords = val
    },
    finalWords (val) {
      if (val.length === 0) {
        this.$emit('nextLevel', true)
      } else {
        this.$emit('nextLevel', false)
      }
    }
  }
}
</script>
