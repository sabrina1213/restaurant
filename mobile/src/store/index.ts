import { createStore } from 'vuex'

export default createStore({
  state: {
    menuList: [],
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
    }
  },
  actions: {

  },
  modules: {
  }
})
