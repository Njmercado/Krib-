<template>
  <v-card
    style="border-radius: 20px; margin: auto;"
  >
    <v-img 
      :src="img" 
    ></v-img>

    <v-card-title>
      {{title}}
    </v-card-title>

    <v-card-text>
      <label style="text-align: left">
      {{desc}}
      </label>
    </v-card-text>

    <v-card-actions>
      <v-col>

        <div v-if="!wordGame">
          <v-btn
            :href="link"
            target="_blank" 
            color="green"
            class="text-lowercase"
            small
            dark
            rounded
          >
            <v-icon 
              left
            >mdi-check</v-icon> ir
          </v-btn>
        </div>

        <div v-if="wordGame">
           <v-btn
            color="green"
            class="text-lowercase"
            @click="openCloseModal"
            small
            dark
            rounded
          >
            <v-icon 
              left
            >mdi-check</v-icon> jugar 
          </v-btn>
        </div>

      </v-col>
    </v-card-actions>

    <WordGame v-if="wordGame" :open="openModal"></WordGame>
  </v-card>
</template>

<script>
import WordGame from './WordGame/WordGame.vue'

export default {

  name: "Game",
  props:[
    'img',
    'link',
    'desc',
    'title',
    'wordGame',
  ],
  data: () => ({
    'openModal': false
  }),
  methods:{
    
    openCloseModal(){
      this.openModal = !this.openModal
    }
  },
  components:{
    WordGame
  }  
} 
</script>

<style>

</style>

