import * as userService from "../service/user.js";
export default {
  namespaced: true,
  state: {
    user: [],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async getAllUser(context) {
      const userData = await userService.getAllUser();
      context.commit("setUser", userData);
    },
  },
  getters: {
    getAllUsers(state) {
      return state.user;
    }
  },

  modules: {},
};