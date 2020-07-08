import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from "js-cookie"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken:Cookie.get("token") || ""
  },
  mutations: {
    handle(state,data){
      state.authToken=data;
      Cookie.set("token",data)
    }
  },
  actions: {
  },
  modules: {
  }
})
