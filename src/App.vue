<template lang="pug">
  v-app
    v-content
      v-container
        router-view
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>
