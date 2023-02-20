import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import { Message, Input, Button, Select, Option, Skeleton, SkeletonItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api'

Vue.use(Input);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Skeleton);
Vue.use(SkeletonItem);

Vue.prototype.$message = Message;
Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
