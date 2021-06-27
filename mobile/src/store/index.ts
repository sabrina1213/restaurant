import { createStore } from 'vuex'

export default createStore({
  state: {
    menuList: [],
  },
  getters: {
    menuList: state => {
      return state.menuList
    }
  },
  mutations: {
    menuListChanged(state, payload) {
      state.menuList = payload.list;
      console.log("list mutation...", payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
