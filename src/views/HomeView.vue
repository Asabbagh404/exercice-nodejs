<template>
  <div>
    <items-list />
  </div>
</template>

<script>
import ItemsList from '../components/ItemsList.vue';

export default {
  name: 'HomeView',
  components: {
    ItemsList,
  },
};
</script>
