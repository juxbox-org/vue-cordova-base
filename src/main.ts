import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
// Use es6 promises; polyfill if necessary
import 'es6-promise/auto';
// Import global styles file (perhaps there's a better way to do this?)
import '@/assets/css/default-styles.styl';
// Add cordova plugins wrapper
import '@/plugins/cordova';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
