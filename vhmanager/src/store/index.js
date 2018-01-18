import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import devices from './modules/devices'
import users from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    devices,
    users
  },
  strict: process.env.NODE_ENV !== 'production'  //  开启严格模式
})
