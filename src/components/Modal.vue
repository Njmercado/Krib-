<template lang="pug">
  v-dialog(max-width="60vw")
    slot(slot="activator")
    v-card
      v-card-title.justify-center
        v-card-text {{palabra}}
</template>

<script>

export default{
  name: "Modal",
  data(){
    return{
      palabra:"Kribí"
    }
  },
  methods:{
    
  }
}

</script>
