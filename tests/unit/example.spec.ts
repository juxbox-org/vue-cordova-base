/* eslint-disable */
import { expect } from 'chai';
import App from '@/App.vue';
import { initVue, cleanupVue, mount } from './helpers/vue-tests-helper';

describe('App.vue', () => {
  before(() => {
    initVue();
  });

  after(() => {
    cleanupVue();
  });

  it('is a Vuetify app', () => {
    const wrapper = mount(App);

    expect(wrapper.isVueInstance()).to.be.true;
    expect(wrapper.attributes('id')).to.equal('app');
    expect(wrapper.classes('v-application')).to.be.true;
  });
});
