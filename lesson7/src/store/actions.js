import { getAll } from '../api/home'
import { getProjectList, getItem } from '../api/detail'

export default {
  getAllData({ commit }) {
    return getAll().then(res => {
      commit('SET_TOTALREGISTER', res.totalRegister)
      commit('SET_TOTALACTIVER', res.totalActiver)
      commit('SET_TOPMOUTHACTIVER', res.topMouthActiver)
      commit('SET_TODAYLOGIN', res.todayLogin)
    })
  },
  getAllProject({ commit }) {
    return getProjectList().then(res => {
      commit('SET_ALLPROJECT', res)
    })
  },
  fetchItem({ commit }, id) {
    return getItem(id).then(res => {
      commit('SET_DETAIL', res)
    })
  }
}
