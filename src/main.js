import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ele-ui
import ElementUI from 'element-ui'
// 引入ele-ui CSS样式
import 'element-ui/lib/theme-chalk/index.css'
//引入axios
import Axios from 'axios'
//挂在到vue原型上方便之后的调用
Vue.prototype.$axios = Axios;
// axios.defaults.baseURL = '/api' // 开发本地代理
// axios.defaults.headers.post['Contenst-Type'] = 'application/json;'
// axios.defaults.headers.common['token'] = store.state.token
// Axios.defaults.baseURL = 'http://192.168.31.220:8000/mall'
// Axios.defaults.headers.post['Content-Type'] = 'application/json';


Vue.use(ElementUI)
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
