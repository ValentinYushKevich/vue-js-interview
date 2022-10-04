<template>
  <v-col cols="12" md="4">
    <v-select v-model="countryVariant" :items="props.countryItems" clearable label="Filter by country"></v-select>

    <v-select v-model="scoreVariant" :items="props.scoresItems" clearable label="Filter by score"></v-select>
  </v-col>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
import { useFiltersStore } from '@/store/filters'

const countryVariant = ref('')
const scoreVariant = ref('')

const props = defineProps({
  countryItems: {
    required: true,
    type: Array
  },
  scoresItems: {
    required: true,
    type: Array
  }
})

const filtersStore = useFiltersStore()
const { changeCountry, changeScores } = filtersStore

watch(countryVariant,
  (count) => {
    changeCountry(count);
  }
)
watch(scoreVariant,
  (count) => {
    changeScores(count);
  }
)
</script>

<style lang="scss" scoped>

</style>