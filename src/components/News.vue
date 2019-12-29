<template>
  <v-dialog min-width="80vw" max-width="85vw">
    <template v-slot:activator="{ on }">
      <v-card v-on="on" style="border-radius: 16px">
        <v-img 
          :src="photo"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.8)"
        >
          <v-card-title>
            <label
              style="text-align: start; font-weight: 800; color: lightgrey; font-size: .9em"
            >
              {{title}}
            </label>
          </v-card-title> 
          <div style="text-align: start; 
                      margin-left: 1em;
                      margin-top: -2vh; 
                      margin-bottom: 2vh; 
                      color: lightgrey; 
                      font-size: .9em"
          >
            {{author}}
          </div>
        </v-img>
      </v-card>
    </template>
    <v-card height="88vh" style="border-radius: 16px">
      <iframe 
        :src="data" 
        class="frame"
      ></iframe>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {

    name: "News",
    props:[
      "photo",
      "title",
      "data",
      "author"
    ],
  } 
</script>

<style>
.justify-center {
  margin-left: auto; 
  margin-right: auto;
}

.frame {
  height:88vh; 
  width: 85vw;
  border-style: none;
}
</style>
