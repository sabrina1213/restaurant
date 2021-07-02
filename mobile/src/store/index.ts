import { createStore } from 'vuex'

export default createStore({
  state: {
    menuList: [],
  },

  mutations: {
    menuListChanged(state, payload) {
      state.menuList = payload.list;
      console.log("list mutation...", payload,state.menuList);
    }
  },
  actions: {
  },
  modules: {
  }
})
