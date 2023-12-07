<script setup>
import { onMounted } from 'vue';
import { useAppStore } from '@/store/app'
const appStore = useAppStore()

onMounted(() => {
  appStore.getProducts()
})
</script>

<template>
  <div class="pa-5">
    <v-container fluid>
      <v-row>
        <v-col>
          <v-btn color="primary">ボタン</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols=3 v-for="product in appStore.products" :key="product.uuid">
          <v-card class="pa-3">
            {{ product.name }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
