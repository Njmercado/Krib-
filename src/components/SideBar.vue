<template>
   <v-navigation-drawer v-model="openClose" absolute temporary>
      <v-list nav dense rounded>
        <v-list-item-group
          v-model="items"
          color="#53220C"
          class="adjust-font"
        >
          <div style="margin: 25px; background-color: #53220C; padding: 16px; border-radius: 8px">
            <v-img src="https://i.ibb.co/3FNTmL4/LOGO-KRIB-Mesa-de-trabajo-1.png"></v-img>
          </div>

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
              <v-list-item-title class="text-capitalize" style="font-weight: bold">
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
      this.openClose = val || true
    }
  }
}
</script>
