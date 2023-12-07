<script setup>
import { ref } from 'vue';

const products = ref([
  {
    uuid: 'ede2b0a09f474df5e704',
    name: 'チャーハン',
  },
  {
    uuid: '1a75daaa93657b0b56d7',
    name: '麻婆豆腐',
  },
  {
    uuid: '5941ed7b7edf5dc41a54',
    name: '回鍋肉',
  },
  {
    uuid: 'b3f5bee8ea73df025cb1',
    name: '酢豚',
  },
  {
    uuid: '5bbd3e5e79ec4a989b09',
    name: '青椒肉絲',
  },
])
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
        <v-col cols=3 v-for="product in products" :key="product.uuid">
          <v-card class="pa-3">
            {{ product.name }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
