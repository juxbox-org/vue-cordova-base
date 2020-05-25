import Vue, { VueConstructor } from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {
  mount as _mount,
  shallowMount as _shallowMount,
  createLocalVue,
} from '@vue/test-utils';

/*
 * Don't use localVue here, as vuetify plugin has to be installed on
 * global Vue object to allow use of typescript via Vue.extend:
 * - https://github.com/vuetifyjs/vuetify/issues/4068#issuecomment-586829171
 */
Vue.use(Vuetify);

const defaultStore = {
  modules: {
    user: {
      namespaced: true,
      state: {},
    },
  },
};

let localVue: VueConstructor<Vue>;

function initVue() {
  if (localVue) {
    throw Error('ERROR: Vue has already been initialized');
  }

  localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  return localVue;
}

function mount(component: object, config: { store: object } = { store: null }) {
  if (!localVue) {
    throw Error('ERROR: Vue has not been initialized');
  }

  return _mount(component, {
    vuetify: new Vuetify(),
    router: new VueRouter(),
    store: new Vuex.Store(config.store || defaultStore),
    localVue,
  });
}

function shallowMount(component: object, config: { store: object } = { store: null }) {
  if (!localVue) {
    throw Error('ERROR: Vue has not been initialized');
  }

  return _shallowMount(component, {
    vuetify: new Vuetify(),
    router: new VueRouter(),
    store: new Vuex.Store(config.store || defaultStore),
    localVue,
  });
}

function cleanupVue() {
  localVue = null;
}

function getDefaultStore() {
  // Deep clone default store
  return JSON.parse(JSON.stringify(defaultStore));
}

export {
  initVue,
  cleanupVue,
  mount,
  shallowMount,
  getDefaultStore,
};
