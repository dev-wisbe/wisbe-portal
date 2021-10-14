const state = {
  loggedIn: false,
  confirmLogin: false,
  userTryLogin: {},
  userResetPassword: false,
  token: "userToken_1A2B3C4D5E",
  user: {
    name: "Guilherme",
    email: "admin@druid.com.br",
    role: "Estudante",
    photo: "https://i.imgur.com/bQSrrQD.png",
    uuid: "abc123",
  },
};

const getters = {
  isUserLoggedIn() {
    return state.loggedIn;
  },

  getUserToken() {
    return state.token;
  },
};

const actions = {
  // userActions
  setUserLoggedIn(context, data) {
    context.commit("UPDATE_USER_LOGGEDIN", data);
  },

  setConfirmLogin(context, data) {
    context.commit("UPDATE_CONFIRM_LOGIN", data);
  },

  setUserTryLogin(context, data) {
    context.commit("UPDATE_USER_TRYLOGIN", data);
  },

  setUserResetPassword(context, data) {
    context.commit("UPDATE_USER_PASSWORD", data);
  },

  // async checkIfUserIsLoggedIn()
};

const mutations = {
  UPDATE_USER_LOGGEDIN(state, data) {
    state.loggedIn = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
