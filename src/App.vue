<template>
  <v-app>
    <v-main>
      <ContentBlock />
    </v-main>

    <v-footer app v-bind="localAttrs">
      <FooterBlock />
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ContentBlock from './components/ContentBlock';
import FooterBlock from './components/FooterBlock';

const localAttrs = computed(() => {
  const attrs = { absolute: false, fixed: false }

  attrs.absolute = true
  attrs.fixed = false

  return attrs
});
</script>
