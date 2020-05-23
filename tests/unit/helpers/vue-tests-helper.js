import Vue from 'vue';
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

let localVue = null;

function initVue() {
  localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  return localVue;
}

function mount(component, { store = null } = {}) {
  if (!localVue) {
    throw Error('ERROR: Vue has not been initialized');
  }

  return _mount(component, {
    vuetify: new Vuetify(),
    router: new VueRouter(),
    store: new Vuex.Store(store || defaultStore),
    localVue,
  });
}

function shallowMount(component, { store = null } = {}) {
  if (!localVue) {
    throw Error('ERROR: Vue has not been initialized');
  }

  return _shallowMount(component, {
    vuetify: new Vuetify(),
    router: new VueRouter(),
    store: new Vuex.Store(store || defaultStore),
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
