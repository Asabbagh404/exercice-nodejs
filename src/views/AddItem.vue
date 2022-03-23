<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field label="Title" v-model="title"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="Description" v-model="description"></v-text-field>
      </v-col>
    </v-row>
    <v-btn color="primary" x-large class="mx-auto d-block mt-5" @click="sendData">Send</v-btn>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    sendData() {
      axios.post('https://6fa4-93-22-134-0.ngrok.io/v1/api/market/products', {
        title: this.title,
        description: this.description,
      });
    },
  },
};
</script>
