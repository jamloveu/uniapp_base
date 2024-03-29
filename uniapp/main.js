import App from './App'
import Vue from 'vue'
import uView from "uview-ui"
import store from '@/store';
import { http } from '@/common/service.js' // 全局挂载引入，配置相关在该index.js文件里修改

Vue.use(uView);

// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js');
Vue.mixin(vuexStore);


Vue.prototype.$http = http

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()
