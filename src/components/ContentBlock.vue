<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <FiltersBlock :countryItems="countryItems" :scoresItems="scoresItems"/>
      <UsersList/>

    </v-row>
  </v-container>
</template>

<script lang="ts">
import FiltersBlock from './FiltersBlock.vue';
import UsersList from './UsersList.vue';
export default {
  name: "ContentBlock",
  data: () => ({
    countryItems: [
      "Russia",
      "Usa",
      "Belarusian",
      "Canada",
      "Albania",
    ],
    scoresItems: [
      "< 10",
      "> 20",
    ],
  }),
  components: { FiltersBlock, UsersList }
}
</script>
