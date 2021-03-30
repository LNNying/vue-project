import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import theme from 'iview-admin-plus/src/store/theme'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    theme
  }
})
