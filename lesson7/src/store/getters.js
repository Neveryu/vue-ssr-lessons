export default {
  // home
  totalRegister(state, getters) {
    return state.totalRegister
  },
  totalActiver(state, getters) {
    return state.totalActiver
  },
  topMouthActiver(state, getters) {
    return state.topMouthActiver
  },
  todayLogin(state, getters) {
    return state.todayLogin
  },

  // project
  projectList(state, getters) {
    return state.projectList
  },

  // get detail
  getDetail(state, getters) {
    return {
      item: state.detail,
      total: state.totalCount
    }
  }
}
