<template lang="pug">
  div
    v-btn(@click="onClick") Test Cordova
    div Platform: {{platformId}}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',

  data() {
    return {
      platformId: '' as string,
    };
  },

  methods: {
    onClick(): void {
      this.platformId = this.$cordova.platformId;
    },
  },
});
</script>
