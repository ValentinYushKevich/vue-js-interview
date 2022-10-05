<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <FiltersBlock :countryItems="countryItems" :scoresItems="scoresItems" />
      <UsersList />

    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import FiltersBlock from './FiltersBlock.vue';
import UsersList from './UsersList.vue';

const countryItems = [
  "Russia",
  "Usa",
  "Belarusian",
  "Canada",
  "Albania",
]
const scoresItems = [
  "< 10",
  "> 20",
]
</script>
