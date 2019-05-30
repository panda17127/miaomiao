import Vue from 'vue'
import App from './App.vue'
// 当引入的文件在文件夹中的文件名为 index 时，可以不用写
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;
Vue.filter('setWH',(url , arg)=>{
   return url.replace(/w\.h/,arg);
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
