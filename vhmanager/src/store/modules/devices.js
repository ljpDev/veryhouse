import axiosx from 'axios'
import * as types from '../mutation-types'

const CODE_OK = 0
const CODE_ERR = 99

// 初始化 vuex state数据
const state = {
  devices: [],
  currentDevice: {}
}

// getters
const getters = {
  getDevices: state => state.devices,
  getDevice: state => state.currentDevice
}

// actions
const actions = {
  getAllDevices ({commit, state}) {
    return new Promise((resolve, reject) => {
      axiosx.get('/api/dev/list')
      .then((res) => {
        let jsonData = res.data
        if (jsonData.code === CODE_OK) {
          commit(types.GET_DEVICES, jsonData.data)
          resolve()
        } else if (jsonData.code === CODE_ERR) {
          commit(types.GET_DEVICES, {})
          reject(CODE_ERR)
        } else {
          commit(types.GET_DEVICES, {})
          // reject('查询失败')
        }
      })
      .catch((err) => {
        console.log(err)
      })
    })
  },
  setCurrentDevice ({commit}, id) {
    commit(types.SELECT_DEVICE, id)
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
  // 保存全部设备
  [types.GET_DEVICES] (state, devices) {
    state.devices = devices
  },
  // 设置当前设备
  [types.SELECT_DEVICE] (state, id) {
    let result = state.devices.find(function (dev) { return dev.order === Number(id) })
    state.currentDevice = result
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
