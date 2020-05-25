import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { lightTheme, darkTheme } from '../assets/themes';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: darkTheme,
      light: lightTheme,
    },
  },
});
