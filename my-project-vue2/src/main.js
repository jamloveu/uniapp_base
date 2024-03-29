import App from './App'
import Vue from 'vue'
import uView from "uview-ui"
import store from '@/store';
Vue.use(uView);

// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js');
Vue.mixin(vuexStore);


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})

// http拦截器，此为需要加入的内容
import httpInterceptor from '@/common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '@/api/http.api.js'
Vue.use(httpApi, app)

app.$mount()

 
