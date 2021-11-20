
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';
import './assets/icon-font/iconfont.css'
// import 'amfe-flexible/index.js'
//自定义全局组件的入口文件
import componet from './componets/index.js'

axios.defaults.withCredentials = true
 

let obj:any  = [];
sessionStorage.setItem("isFirst",'true');
sessionStorage.setItem("bill",JSON.stringify(obj));
sessionStorage.setItem("isEnsureBill", "false");
createApp(App).use(componet).use(store).use(router).use(VueAxios,axios).mount('#app')

