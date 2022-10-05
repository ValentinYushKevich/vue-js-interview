<template>
  <v-card
      flat
      tile
      width="100%"
      class="red lighten-1 text-center"
  >
    <v-divider></v-divider>

    <v-card-text class="white--text">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  name: 'FooterBlock',
}
</script>

<style lang="scss" scoped>
  .red {
    background-color: #EF5350 !important;
    border-color: #EF5350 !important;
    color: aliceblue;
  }
</style>