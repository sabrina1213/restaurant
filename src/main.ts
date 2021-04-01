
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
 

createApp(App).use(store).use(router).use(ElementPlus).use(VueAxios,axios).mount('#app')
