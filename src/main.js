import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import AsyncComputed from 'vue-async-computed'


import "./utils/filters";
/* import "./utils/effects"; */
/* import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; */

Vue.config.productionTip = false

Vue.use(AsyncComputed)
axios.defaults.baseURL='https://api.github.com/';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
