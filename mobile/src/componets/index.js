//自定义全局组件的入口文件
import searchInput from './searchInput.vue'
import message from './message.vue'
let componentUI = {
    install (app){
        //注册组件
        app.component('searchInput',searchInput);
        app.component('message',message);
    }
}

export default componentUI