// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 全局引入 axios   （包含请求拦截器 响应拦截器 公共请求地址等）
import axios from '@/public/js/axiosCom';

// 全局引入公共组件
import '@/public/js/common_components';

// 全局注册axios 需要token   需要加密解密
Vue.prototype.$axios = axios.instance;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
