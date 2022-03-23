<template>
  <v-card
    :loading="isLoading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-if="!isLoading">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>{{ item.title }}</v-card-title>

      <v-card-text>
        <div>{{ item.description }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Attributes</v-card-title>

      <v-card-text>
        <v-chip-group
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip
            v-for="(attribute, index) in item.attributes"
            :key="index"
          >{{ attribute }}</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="buy(item.id)"
        >
          <v-icon size="32" color="teal lighten-2">mdi-cart</v-icon>
        </v-btn>
      </v-card-actions>
    </template>
    <template v-else>
      <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular> </template>
  </v-card>
</template>
<script>
export default {
  name: 'VItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    buy(id) {
      console.log(`You bought the product ${id}`);
    },
  },
};
</script>
