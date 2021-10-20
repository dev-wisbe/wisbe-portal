export default {
  user: (state) => {
    const { user } = state

    return user
  },
  userLoading: (state) => {
    const { userLoading } = state

    return userLoading
  },
  isUserLoggedIn(state) {
    return state.loggedIn;
  },
}
