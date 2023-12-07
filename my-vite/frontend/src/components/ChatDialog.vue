<script setup>
import { ref } from 'vue';

let id = 0
const inputText = ref('')

const messages = ref([
  { id: id++, text: 'こんにちは', userId: 'b' },
  { id: id++, text: 'こんにちは!', userId: 'a' },
  { id: id++, text: '勤怠の入力すると失敗します', userId: 'b' },
  { id: id++, text: '〇〇のところですね？', userId: 'a' },
  { id: id++, text: '〇〇のところですね？', userId: 'a' },
  { id: id++, text: '〇〇のところですね？', userId: 'a' },
  { id: id++, text: '〇〇のところですね？', userId: 'a' },
  { id: id++, text: '〇〇のところですね？', userId: 'a' },
  { id: id++, text: '〇〇のところですね？', userId: 'a' },
  { id: id++, text: '〇〇のところですね？', userId: 'a' },
])

function sendMessage() {
  messages.value.push({ id: id++, text: inputText.value, userId: 'b' })
  inputText.value = ''
}

</script>

<template>
  <v-sheet class="px-5 pt-10 pb-5" width="400px" height="500px" color="grey-lighten-4" rounded>
    <v-container fluid>

      <v-row class="mb-5" style="overflow-y: auto; height: 360px;">
        <v-col>
          <v-row v-for="msg in messages" :key="msg.id" :justify="msg.userId === 'a' ? 'start' : 'end'"
            class="align-center py-2">
            <v-avatar color="indigo" v-if="msg.userId === 'a'">
              <v-icon dark>
                mdi-account-circle
              </v-icon>
            </v-avatar>
            <v-sheet :color="msg.userId === 'a' ? 'grey-lighten-2' : 'blue'" rounded class="mx-2 px-2 py-1">
              {{ msg.text }}
            </v-sheet>
          </v-row>
        </v-col>
      </v-row>

      <v-row dense align-content="end" style="height: 60px;">
        <v-col cols="10">
          <v-text-field v-model="inputText" density="compact" variant="solo" label="メッセージ" single-line hide-details
            flat></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn @click="sendMessage" icon="mdi-send" elevation="0"></v-btn>
        </v-col>
      </v-row>

    </v-container>
  </v-sheet>
</template>

