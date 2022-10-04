<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <FiltersBlock :items="items" />
      <UsersList :users="users" />

    </v-row>
  </v-container>
</template>

<script>
import FiltersBlock from './FiltersBlock.vue';
import UsersList from './UsersList.vue';
export default {
  name: "ContentBlock",
  data: () => ({
    items: [
      "russia",
      "usa",
      "> 20",
      "< 10",
    ],
    users: [
      { type: 'subheader', title: 'List' },
      {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { type: 'divider', inset: true },
      {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Summer BBQ <span class=\"grey--text text--lighten-1\">4</span>",
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { type: 'divider', inset: true },
      {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle: "<span class=\"text--primary\">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
      },
      { type: 'divider', inset: true },
      {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle: "<span class=\"text--primary\">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
      },
      { type: 'divider', inset: true },
      {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle: "<span class=\"text--primary\">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
      },
    ],
  }),
  components: { FiltersBlock, UsersList }
}
</script>
