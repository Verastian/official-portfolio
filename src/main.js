import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import AsyncComputed from 'vue-async-computed'
/* import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; */

Vue.config.productionTip = false

Vue.use(AsyncComputed)
axios.defaults.baseURL='http://api.github.com/';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
