export default {
  user: (state) => {
    const { user } = state

    return user
  },
  userLoading: (state) => {
    const { userLoading } = state

    return userLoading
  },
  authLoading: (state) => {
    const { authLoading } = state
    
    return authLoading
  },
  isUserLoggedIn(state) {
    return state.loggedIn;
  },
  submitRegister(state) {
    const { submitRegister } = state

    return submitRegister
  },
  getRegisterEmail(state) {
    const { registerEmail } = state

    return registerEmail
  },
}
