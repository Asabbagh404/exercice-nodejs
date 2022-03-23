<template>
  <div>
    <v-container>
      <v-row>
        <v-col lg="3" sm="6">
          <v-text-field label="Find"
                        prepend-icon="mdi-magnify"
                        v-model="nameFilter" >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item, index) in itemsList" :key="index" lg="4" sm="6">
          <item :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'ItemsList',
  async mounted() {
    this.$store.dispatch('getItems');
    this.itemsList = this.$store.state.itemsList;
    this.$socket.on('filtered_name', (data) => {
      this.itemsList = data;
    });
  },
  components: {
    Item,
  },
  watch: {
    nameFilter(val) {
      this.$socket.emit('filtername_change', val);
    },
  },
  data() {
    return {
      itemsList: [],
      nameFilter: '',
    };
  },
};
</script>
