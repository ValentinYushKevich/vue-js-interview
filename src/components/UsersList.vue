<template>
  <v-col cols="12" md="4">
    <v-card max-width="450" class="mx-auto">
      <v-list :items="users" item-props lines="three">
        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list>
    </v-card>

  </v-col>
</template>

<script>
export default {
  props: {
    users: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>

</style>