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
        :thumb-size="50"
        :color="warning"
        style="margin-top: 2vh"
        readonly
      >
      </v-slider>
        <v-btn
          v-if="!startGame"
          @click="start"
          color="blue darken-4"
          class="btn text-lowercase"
          small
          dark
          rounded
          >
            iniciar
        </v-btn>
    </div>
  </v-row>
</template>

<script>

export default {

  name: 'Timer',
  data: () => ({
    realTimer: 0,
    interval: 0,
    warnings: [ 'green darken-2', 'yellow darken-3', 'orange darken-3', 'deep-orange darken-3', 'red darken-4' ],
    warning: '',
    startGame: false
  }),
  props: [
    'minutes',
    'seconds',
    'reset',
    'color'
  ],
  mounted () {
    this.realTimer = 100
  },
  computed: {
    time () {
      if (this.realTimer <= 10) this.warning = this.warnings[4]
      if (this.realTimer === 0) {
        clearInterval(this.interval)
        this.startGame = false;
        this.$emit('start', this.startGame)
      } else {
        const index = Math.floor((100 - parseInt(this.realTimer)) / 25)
        this.warning = this.warnings[index]
      }

      return this.realTimer
    },
    backgroundColor () {
      return `background-color: ${this.color}`
    }
  },
  watch: {
    reset () {
      clearInterval(this.interval)
      this.startGame = false
    }
  },
  methods: {
    start () {
      if (!this.startGame) {
        var duration = (this.minutes * 60 + this.seconds) * 10
        this.startGame = true
        this.$emit('start', this.startGame)

        this.realTimer = 100
        this.interval = setInterval(() => {
          if (this.realTimer-- === 0) this.realTimer = 100
        }, duration)
      }
    }
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
