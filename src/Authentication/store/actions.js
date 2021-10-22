// import AuthService from '../services'
import * as types from './types'
import { Auth } from 'aws-amplify';

export default {
  submitUser: async ({ commit }, payload) => {
    commit(types.TOGGLE_LOADING_AUTH)
    const { username, password } = payload
    try {
      const { signInUserSession } = await Auth.signIn(username, password)
      const {jwtToken, payload} = signInUserSession.idToken.jwtToken;

      console.log(jwtToken)
      console.log(payload)

      commit(types.SET_USER, payload)
      commit(types.SET_LOGGED_IN)
    } catch (error) {
      console.log(error)
    } finally {
      commit(types.TOGGLE_LOADING_AUTH)
    }
  },
  submitRegister: async ({ commit }, payload) => {
    commit(types.TOGGLE_LOADING_AUTH)

    try {
      const res = await Auth.signUp(payload);
      console.log(res)
    } catch (error) {
      console.log(error)
    } finally {
      commit(types.TOGGLE_LOADING_AUTH)
    }
  }
}
