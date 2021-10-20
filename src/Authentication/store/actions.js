// import AuthService from '../services'
import * as types from './types'
import { Auth } from 'aws-amplify';

export default {
  submitUser: async ({ commit }, payload) => {
    commit(types.TOGGLE_LOADING_USER)
    const { username, password } = payload
    try {
      const { signInUserSession } = await Auth.signIn(username, password)
      const jwt = signInUserSession.idToken.jwtToken;
      const user = signInUserSession.idToken.payload;

      console.log(jwt)
      console.log(user)

      commit(types.SET_USER, user)
      commit(types.SET_LOGGED_IN)
    } catch (error) {
      commit(types.TOGGLE_LOADING_USER)
    } finally {
      commit(types.TOGGLE_LOADING_USER)
    }
  },
}
