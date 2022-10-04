<template>
  <v-col cols="12" md="4">
    <v-card max-width="450" class="mx-auto">
      <v-list three-line>
        <template v-for="(item, index) in users">
          <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

          <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
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