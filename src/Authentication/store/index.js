import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  user: null,
  userLoading: false,
  authLoading: false,
  loggedIn: false,
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
}
