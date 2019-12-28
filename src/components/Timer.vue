<template>
<v-row 
  justify="center"
  style="margin-bottom: 5vh; margin-top: 5vh"
>
  <div class="timer" :style="backgroundColor">
    <v-slider
      v-model='time'
      thumb-label="always"
      :thumb-color="warning"
      :thumb-size="64"
      :color="warning"
      style="margin-top: 2vh"
      readonly
    >
    </v-slider>
      <v-btn
        @click="start"
        color="blue darken-4"
        class="btn"
        dark
        rounded
      >
      start
      </v-btn>
  </div>     
</v-row>
</template>

<script>
  
  export default {

    name: "Timer",
    data: () => ({
      realTimer: 0,
      interval: 0,
      warnings: [ 'green darken-2', 'yellow darken-3', 'orange darken-3', 'deep-orange darken-3', 'red darken-4' ],
      warning: '',
    }),
    props:[
      'minutes',
      'seconds',
      'reset',
      'color'
    ],
    mounted(){
      this.realTimer = 100
    },
    computed:{
      time() {

        if(this.realTimer <= 100) this.warning = this.warnings[0]
        if(this.realTimer <= 75) this.warning = this.warnings[1]
        if(this.realTimer <= 50) this.warning = this.warnings[2]
        if(this.realTimer <= 25) this.warning = this.warnings[3]
        if(this.realTimer <= 10) this.warning = this.warnings[4]

        return this.realTimer
      },
      backgroundColor(){
        return 'background-color: '+this.color+';'
      }
    },
    watch:{
      reset(){
        clearInterval(this.interval)
      }
    },
    methods:{
      start(){
        
        var duration = (this.minutes*60 + this.seconds)*1000/100
        console.log(duration)

        this.realTimer = 100
        this.interval = setInterval(()=>{
          if(this.realTimer-- == 0) this.realTimer = 100
        }, duration)
      }
    },
    components:{
    }  
  } 
</script>

<style>
.timer{
  margin-top: auto; 
  margin-bottom: auto;
  width: calc(100vw - 50%); 
  border-radius: 10px;
  height: calc(100vh - 80%);
  padding: 1vh;
} 
</style>
