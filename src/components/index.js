import Vue from 'vue';
import TestBanner from './Banner.vue';

const Components= {
    TestBanner
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
