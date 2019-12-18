<template>
    <v-row
            justify="start"
          >
            <v-col cols="2">
              <label
                style="color: brown; font-weight: bold; font-size: 2em"
              >
                {{foundWords}}
              </label>
            </v-col>
            <v-col cols="5">
              <label
                readonly
                style="font-weight: bold; 
                       font-size: 2em;
                       color: brown"
              >
                {{actualWord}}
              </label>
            </v-col>
            
          </v-row>

</template>

<script>
  
  export default {

    name: "WordRecord",
    props:[
      'actualWord',
      'foundWords'
    ],
    methods:{

    },
    components:{

    }  
  } 
</script>

<style scoped>

</style>

