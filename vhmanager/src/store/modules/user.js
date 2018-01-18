import axiosx from 'axios'
import * as types from '../mutation-types'

const CODE_OK = 0
const CODE_ERR = 99

// 初始化 vuex state数据
const state = {
  currentUser: {}
}

// getters
const getters = {
  currentUser: state => state.currentUser
}

// actions
const actions = {
  login ({commit, state}, userInfo) {
    return new Promise((resolve, reject) => {
      axiosx.post('/api/users/login', userInfo)
      .then((res) => {
        let jsonData = res.data
        if (jsonData.code === CODE_OK) {
          commit(types.USER_LOGIN, jsonData.data)
          resolve()
        } else if (jsonData.code === CODE_ERR || jsonData) {
          commit(types.USER_LOGIN, {})
          reject(CODE_ERR)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    })
  }
  // getSeller ({commit, state}) {
  //   axiosx.get('/api/seller')
  //   .then((res) => {
  //     let jsonData = res.data
  //     if (jsonData.errno === ERR_OK) {
  //       commit(types.SAVE_SELLER, jsonData.data)
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }
}

// mutations
const mutations = {
  // 用户登陆，缓存用户信息
  [types.USER_LOGIN] (state, usr) {
    state.currentUser = usr
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
