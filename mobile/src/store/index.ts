import { createStore } from 'vuex'

export default createStore({
  state: {
    menuList: [{name:'',count:0}],
    billList: [],
  },

  mutations: {
    //提交菜单列表
    menuListChanged(state, payload) {
      state.menuList= payload.list;
      console.log("list mutation...", payload,state.menuList);
    },
    //提交账单列表
    billListChanged(state,payload){
      state.billList = payload.list;
    },
    //修改菜单列表的count
    menuListAddCount(state,payload){
      console.log(' ----------menuListAddCount--------',payload.name,payload.count);
      state.menuList.forEach((item)=>{
        if(item.name == payload.name){
          item.count =payload.count;
        }
      })
      console.log('----------menuListAddCount--------success----',state.menuList);
    }
  },
  actions: {

  },
  modules: {
  }
})
