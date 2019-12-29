<template>
  <v-col>
    <v-container
      style="background-color: #E0E0E0;
             border-radius: 10px;"
    >
      <v-row 
        v-for="(row, i) in gridSoup" 
        :key="i" 
        justify="center"
      >
        <label
          v-for="(val, j) in row" 
          :key="j" 
          @mouseover = "mouseOver(val, i, j)"
          @mousedown="mouseDown(val, i, j)"
          @mouseup="mouseUp()"
          class="btn letter"
          color="#e09518"
          :id="getId(i,j)"
        >
          {{ val }}
        </label>
      </v-row>
    </v-container>
  </v-col>
</template>

<script>
import {mapGetters} from 'vuex'
import WordGame from './GenerateSoup.js'

export default {

  name: "Soup",
  props:[
    'words',
    "disabled"
  ],
  data: () => ({
    gridSoup: [],
    selectedWord: '',
    foundWords: 0,
    hasClickOnLetter: false,
    xAxis: [],
    yAxis: [],
    colors: ["#FFE082", "#EF9A9A", "#90CAF9", "#A5D6A7", "#BCAAA4"],
    randomColor: ""
  }),
  methods:{
    isValidCoordinate(i, j){
      if(this.xAxis.length > 1){
        if(this.xAxis[0] == this.xAxis[1] || this.yAxis[0] == this.yAxis[1]){ //vertical u horizontal
          if(this.xAxis[0] == i || this.yAxis[0] == j) return true
        }else if(this.xAxis[0]>this.xAxis[1] && this.yAxis[0]>this.yAxis[1]){//diagonal abajo
          if(this.xAxis[0]>i && this.yAxis[0]>j) return true
        }
        return false
      }else{
        return true
      }
    },
    mouseOver(val, i, j){
      if(this.hasClickOnLetter && this.isValidCoordinate(i,j)){

        this.xAxis.push(i)
        this.yAxis.push(j)
        
        this.selectedWord += val
        const label = document.querySelector("#"+this.getId(i, j))
        label.style.backgroundColor=this.randomColor
      }
    },
    mouseDown(val, i, j){
      if(this.disabled){

        this.hasClickOnLetter = true
        this.selectedWord = val 

        this.randomColor = this.getRandomColor()
     
        const button = document.querySelector("#"+this.getId(i, j))
        button.style.backgroundColor=this.randomColor

        this.xAxis.push(i) 
        this.yAxis.push(j)
      }
    },
    mouseUp(){
      this.hasClickOnLetter = false

      const index = this.words.map(el => el.definicion).indexOf(this.selectedWord)
      if(index != -1){

        const result = this.words[index].palabra
        this.foundWords += 1 
        this.$emit('wordsFound', this.foundWords)
        this.$emit('selectedWord', result)
      }else{
        this.cleanGridFromBadWord()
      }

      this.xAxis = []
      this.yAxis = []
    },
    getId(i, j){
      return `b${i*15+j}`
    },
    getRandomColor(){
      const colorsLength = this.colors.length 
      const random = Math.floor(Math.random()*colorsLength)
      return this.colors[random]
    },
    cleanGridFromBadWord(){
      var xAuxAxis = 0, yAuxAxis = 0
      for(var i=0; i<this.xAxis.length;i++){
        xAuxAxis = this.xAxis[i]
        yAuxAxis = this.yAxis[i]
        const label = document.querySelector("#"+this.getId(xAuxAxis, yAuxAxis))
        label.style.backgroundColor="#E0E0E0"
      }
    }
  },
  computed:{
    ...mapGetters(['getRandomWords'])
  },
  watch:{

    words(val){

      this.xAxis = []
      this.yAxis = []

      const wordMatrix = new WordGame(val.map(val => val.definicion), 15)
      wordMatrix.generator()
      this.gridSoup = []
      this.gridSoup = wordMatrix.getGrid()
    }
  },
} 
</script>

<style>
.letter{
  margin: .1vw; 
  cursor: pointer;
  width: calc(1vh + 1vw + .6em); 
  height: calc(1vh + 1vw + .6em); 
  padding: auto;
  font-weight: bold;
  color: #d69d20;
}
</style>
