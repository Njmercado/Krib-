<template>
  <v-footer padless dark>
    <v-card tile width="100%" color="#5f3323">
      <v-card-text style="background-color: #3e241d">
        <v-btn
          v-for="(info, index) in socialmedias"
          :key="index"
          :href="info.link"
          target="_blank"
          class="btn mx-4"
          style="background-color: white"
          data-aos="zoom-in"
          text
          icon
          large
        >
          <v-icon color="#5f3323">{{info.icon}}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text style="background-color: #5f3323">
        <v-row justify="space-between">
          <v-col cols="12" xs="12" sm="12" md="5" lg="6">
            <v-btn style="font-weight: bold" text color="white" to="/contactos">Contactanos</v-btn>
            <v-btn style="font-weight: bold" text color="white">Terminos y condiciones</v-btn>
            <v-btn style="font-weight: bold" text color="white">Politica de privacidad</v-btn>
            <v-btn style="font-weight: bold" text color="white">@kribi 2020</v-btn>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" align="center">
            <v-img
              src="https://i.ibb.co/3FNTmL4/LOGO-KRIB-Mesa-de-trabajo-1.png"
              max-width="16em"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "",
  data: () => ({
    socialmedias: [
      { link: "", icon: "mdi-facebook" },
      {
        link: "https://www.instagram.com/kribicultura/",
        icon: "mdi-instagram"
      },
      { link: "", icon: "mdi-twitter" }
    ]
  }),
  props: [],
  watch: {},
  methods: {},
  components: {}
};
</script>
