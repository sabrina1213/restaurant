//自定义全局组件的入口文件
import searchInput from './searchInput.vue'
import dialog from './dialog.vue'
let componentUI = {
    install (app){
        //注册组件
        app.component('searchInput',searchInput);
        app.component('dialog',dialog);
    }
}

export default componentUI