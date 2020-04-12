<template>
  <v-footer height="auto" color="#562011" dark>
    <v-container grid-list-lg grid-list-md>
      <v-row>
        <v-col>
          <v-btn
            v-for="(info, index) in socialmedias"
            :key="index"
            :href="info.link"
            target="_blank"
            class="btn"
            text
            icon
          >
            <v-icon color="#dba238">{{info.icon}}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col align="center">
          <v-img
            style="border-radius: 8px;"
            src="https://i.ibb.co/StnCxkv/image1.jpg"
            max-width="16em"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "",
  data: () => ({
    socialmedias: [
      {
        link: "https://www.instagram.com/kribicultura/",
        icon: "mdi-instagram"
      },
      { link: "", icon: "mdi-facebook" },
      { link: "", icon: "mdi-twitter" }
    ]
  }),
  props: [],
  watch: {},
  methods: {},
  components: {}
};
</script>
