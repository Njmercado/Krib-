<template>
  <v-container 
    fluid
    grid-list-md
    grid-list-lg
    style="margin-top: auto; margin-bottom: auto"
  >
    <v-row justify="center">
      <v-col 
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="4"
        xl="4"
        v-for="(news, index) in news" 
        :key="index"
      >
        <News 
          :photo="news.photo" 
          :data="news.data" 
          :title="news.title"
          :author="news.author"
        ></News>
      </v-col>
    </v-row>
  </v-container>    
</template>

<script>
import News from "../components/News.vue"
  
  export default {

    name: "Noticias",
    data: () =>  ({
      news: [
        { photo: "https://i.ibb.co/2stKXZC/Las-alzan-sus-voces-21-de-diciembre-2019.jpg", title:"Jovenes con vision 2020", data: "http://drive.google.com/file/d/18CxrKsaSDUU-px7Cr7mwPPNFj3GDnfT_gHVEFU_fSqg/preview", author:"Cristina De la Hoz Marquez" },
      ]
    }),
    methods:{

    },
    components:{
      News
    }  
  } 
</script>
