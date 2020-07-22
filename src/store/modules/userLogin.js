const $axios = require('axios')
const state = {
  token: window.sessionStorage.getItem('token'),
  userInfo: {},
  message: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_MESSAGE: (state, message) => {
    state.message = message
  }
}

const actions = {
  async loginIn({ commit }, loginInfo) {
    const { data: res } = await $axios.post('/login', loginInfo)
    if (res.code === 0) {
      window.sessionStorage.setItem('token', res.token)
      commit('SET_TOKEN', res.token)
    } else {
      commit('SET_MESSAGE', res.message)
    }
    return res
  },
  async getUserinfo({ commit }) {
    const { data: res } = await $axios.get('/getAdmin')
    commit('SET_USER', res.data)
  },
  loginOut({ commit }) {
    window.sessionStorage.removeItem('token')
    commit('SET_TOKEN', '')
    commit('SET_USER', {})
    commit('SET_MESSAGE', '')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
