import Vue from 'vue'
import login from './login.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueRouter from 'vue-router'
import router from '@/router/index'

Vue.use(VueRouter)
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(login),
  router:router
}).$mount('#login')
