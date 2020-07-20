<template>
  <v-dialog v-model="realOpener" max-width="20em">
    <v-card>
      <v-card-title>{{title}}</v-card-title>
      <v-divider></v-divider>
      <div style="overflow-y: scroll; max-height: 20em; text-align: left">
        <v-list>
          <v-list-item-group multiple v-model="chosenItemsIndexes">
            <v-list-item v-for="(item, index) in items" :key="index" @click="chooseItem(item)">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox v-model="active" :color="color"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{item}}</v-list-item-title>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          small
          rounded
          class="btn text-capitalize text-white"
          style="font-weight: bold"
          color="red"
          @click="cleanFilter"
        >limpiar filtro</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          small
          rounded
          class="btn text-capitalize text-white"
          style="font-weight: bold"
          :color="color"
          @click="emmitChosenItems"
        >aceptar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogOfChoices",
  data: () => ({
    realOpener: false,
    chosenItems: [],
    chosenItemsIndexes: [],
    test: []
  }),
  props: {
    items: { type: Array },
    open: { type: Boolean },
    title: { type: String },
    color: { type: String }
  },
  watch: {
    open(e) {
      this.realOpener = e || true;
    }
  },
  mounted () {
    for(let i=0; i < this.items.length; i++) {
      this.test.push(false)
    }
  },
  methods: {
    emmitChosenItems() {
      this.$emit("chosen", this.chosenItems);
      this.realOpener = false
    },
    chooseItem(e) {
      let index = this.chosenItems.indexOf(e);
      if (index >= 0) {
        this.chosenItems.splice(index, 1);
      } else {
        this.chosenItems.push(e);
      }
    },
    cleanFilter () {
      this.chosenItemsIndexes = []
      this.chosenItems = []
    }
  }
};
</script>
