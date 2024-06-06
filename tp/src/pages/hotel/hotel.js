import Vue from 'vue'
import hotel from './hotel.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(hotel),
}).$mount('#hotel')
