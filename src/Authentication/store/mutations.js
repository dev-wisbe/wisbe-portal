import * as types from './types'

export default {
  [types.TOGGLE_LOADING_USER](state) {
    state.userLoading = !state.userLoading
  },
  [types.TOGGLE_LOADING_AUTH](state) {
    state.authLoading = !state.authLoading
  },
  [types.SET_USER](state, user) {
    state.user = user
  },
  [types.SET_LOGGED_IN](state) {
    state.loggedIn = !state.loggedIn
  },
  [types.SET_REGISTER](state, submitRegister) {
    state.submitRegister = submitRegister
  },
  [types.SET_REGISTER_EMAIL](state, registerEmail) {
    state.registerEmail = registerEmail
  },
}
