<template>
  <v-col cols="12" md="4">
    <v-select v-model="variant" :items="items" clearable label="Filter by country"></v-select>

    <v-select v-model="variant" :items="items" clearable label="Filter by score"></v-select>
  </v-col>
</template>

<script>
export default {
  props:{
    items:{
      required: true,
      type: Array
    }
  },  
  data() {
    return {
      variant: 'default'
    }
  },
}
</script>

<style lang="scss" scoped>

</style>