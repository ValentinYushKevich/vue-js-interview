<template>
  <v-col cols="12" md="4">
    <v-card max-width="450" class="mx-auto">
      <div v-if="userStore.loading" class="loader__wrapper">
        <v-progress-circular :rotate="360" :size="100" :width="15" :model-value="userStore.loadingProgres" color="teal">
          {{ userStore.loadingProgres }}
        </v-progress-circular>
      </div>
      <v-slide-y-transition class="py-0" group tag="v-list">
        <v-list v-if="userStore.filteredUsers && userStore.noUsersFind" :items="userStore.filteredUsers" item-props
          lines="three">
          <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle"></div>
          </template>
        </v-list>
      </v-slide-y-transition>
      <div v-if="!userStore.noUsersFind && !userStore.loading"> Users no find</div>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/store/users'
import { onMounted } from 'vue'
const userStore = useUsersStore()
const { getAllUsers } = userStore
onMounted((): void => {
  getAllUsers()
})
</script>

<style lang="scss">
.loader__wrapper {
  display: flex;
  justify-content: center;
}
</style>
