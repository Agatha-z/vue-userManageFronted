import Vue from 'vue';
// 公共组件
Vue.component('alert-msg', resolve => require(['@/components/alert'], resolve))