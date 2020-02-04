<template>
  <v-footer
    height='auto'
    color='#562011'
    dark
  >
    <v-container grid-list-lg grid-list-md>
      <v-row>
        <v-col>
          <v-btn
            v-for='(info, index) in socialmedias'
            :key='index'
            :href='info.link'
            target='_blank'
            class='btn'
            text icon
          >
            <v-icon color='#dba238'>
              {{info.icon}}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify='center' align='center'>
        <v-col align='center' cols='12' md='3' sm='8' lg='4'>
          <v-img
            style='border-radius: 8px;'
            src='https://i.ibb.co/KmGG4H8/Logo-Uninorte-Bquilla.jpg'
            max-width='50%'
            max-height='100%'
            >
          </v-img>
        </v-col>
        <v-col align='center' cols='12' md='3' sm='8' lg='4'>
          <v-img
            style='border-radius: 8px;'
            src='https://i.ibb.co/StnCxkv/image1.jpg'
            max-width='80%'
            max-height='100%'
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: '',
  data: () => ({
    socialmedias: [
      { link: 'https://www.instagram.com/kribicultura/', icon: 'mdi-instagram' },
      { link: '', icon: 'mdi-facebook' },
      { link: '', icon: 'mdi-twitter' }
    ]
  }),
  props: [
  ],
  watch: {

  },
  methods: {
  },
  components: {
  }
}
</script>
