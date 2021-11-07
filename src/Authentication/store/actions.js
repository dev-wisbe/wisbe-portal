// import AuthService from '../services'
import * as types from './types'
import services from '../services'

export default {
  submitUser: async ({ commit }, payload) => {
    commit(types.TOGGLE_LOADING_AUTH)
    const { username, password } = payload
    await services.submitUser(username, password);
    commit(types.TOGGLE_LOADING_AUTH)
  },
  submitRegister: async ({ commit }, payload) => {
    await services.submitNewUser(payload);
    commit(types.SET_REGISTER)
  },
  setRegisterEmail: async ({ commit }, payload) => {
    commit(types.SET_REGISTER_EMAIL, payload)
  },
  setLoggedIn: async ({ commit }) => {
    commit(types.SET_LOGGED_IN)
  }
}
