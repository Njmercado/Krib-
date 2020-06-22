<template>
  <div>
    <v-card color="var(--yellow-background)" style="border-radius: 20px; margin: auto;">
      <v-img style="height: 16em" :src="img"></v-img>
      <v-card-title> {{title}} </v-card-title>
      <v-card-text>
        <label style="text-align: left"> {{desc}} </label>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
          <v-btn
            color="green"
            class="text-lowercase"
            @click="wordGame ? openCloseModal() : null"
            :href="wordGame ? null : link"
            :target="wordGame ? null : '_blank'"
            small
            dark
            rounded
          >
            <v-icon left>mdi-check</v-icon> abrir
          </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <WordGame v-if="wordGame" :open="openModal"></WordGame>
  </div>
</template>

<script>
import WordGame from './WordGame/WordGame.vue'

export default {

  name: 'Game',
  props: [
    'img',
    'link',
    'desc',
    'title',
    'wordGame'
  ],
  data: () => ({
    'openModal': false
  }),
  methods: {
    openCloseModal () {
      this.openModal = !this.openModal
    }
  },
  components: {
    WordGame
  }
}
</script>
