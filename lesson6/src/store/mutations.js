import Vue from 'vue'

export default {
  // HOME
  SET_TOTALREGISTER: (state, num) => {
    state.totalRegister = num
  },
  SET_TOTALACTIVER: (state, num) => {
    state.totalActiver = num
  },
  SET_TOPMOUTHACTIVER: (state, num) => {
    state.topMouthActiver = num
  },
  SET_TODAYLOGIN: (state, num) => {
    state.todayLogin = num
  },

  // project
  SET_ALLPROJECT: (state, list) => {
    state.projectList = list
  },

  // current detail
  SET_DETAIL: (state, obj) => {
    state.detail = obj.item
    state.totalCount = obj.total
  }
}
