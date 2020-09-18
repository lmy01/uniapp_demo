import Vue from 'vue'

import store from "./store";
Vue.prototype.$store = store;

import uView from "uview-ui";
Vue.use(uView);

// 导入组件
import Tabbar from "./components/tabbar.vue";
// import QrCode from "./components/qrCode.vue";

// 注册组件
Vue.component('tabbar', Tabbar)
// Vue.component('qrCode', QrCode)

import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
