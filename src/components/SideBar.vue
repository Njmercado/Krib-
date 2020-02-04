<template>
   <v-navigation-drawer v-model="openClose" absolute temporary>
      <v-list nav dense rounded>
        <v-list-item-group
          v-model="items"
          active-class="brown--text text--accent-4"
          class="adjust-font"
        >
          <v-img
            src="https://i.ibb.co/Bg3xkB0/icono.png"
            max-width="64"
            max-height="64"
            style="margin: 30px auto 30px auto;"
          >
          </v-img>

          <v-list-item
            v-for="route in routes"
            :key="route.name"
            :to="route.to"
          >
            <v-list-item-icon>
              <v-icon>
                {{route.icon}}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-capitalize">
                {{route.name}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {

  name: 'SideBar',
  props: [
    'open',
    'routes'
  ],
  data: () => ({
    items: null,
    openClose: false
  }),
  watch: {
    open (val) {
      this.openClose = val ? val : true
    }
  }
}
</script>
