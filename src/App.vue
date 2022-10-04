<template>
  <v-app>
    <v-main>
      <ContentBlock/>
    </v-main>

    <v-footer app v-bind="localAttrs">
      <FooterBlock />
    </v-footer>
  </v-app>
</template>

<script>
import ContentBlock from './components/ContentBlock';
import FooterBlock from './components/FooterBlock';

export default {
  name: 'App',

  components: {
    ContentBlock,
    FooterBlock
  },

  computed: {
    localAttrs () {
      const attrs = {}

      attrs.absolute = true
      attrs.fixed = false

      return attrs
    },
  },

  data: () => ({
    //
  }),
};
</script>
