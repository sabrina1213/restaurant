import { createStore } from 'vuex'

export default createStore({
  state: {
    menuList: [{name:'',count:0}],
    typeList: [],
  },

  mutations: {
    //提交菜单列表
    menuListChanged(state, payload) {
      state.menuList= payload.list;
      console.log("menu list mutation...", state.menuList);
    },
    //提交账单列表
    typeListChanged(state,payload){
      state.typeList = payload.list;
      console.log("type list mutation...", state.typeList);
    },
    //修改菜单列表的count
    menuListAddCount(state,payload){
      
      state.menuList.forEach((item)=>{
        if(item.name == payload.name){
          item.count =payload.count;
        }
      })
      console.log('----------menuList --AddCount--------success----');
    }
  },
  actions: {

  },
  modules: {
  }
})
