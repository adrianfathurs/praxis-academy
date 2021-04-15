import * as AuthServices from '../services/AuthServices.js'

export default ({
  namespaced: true,
  state: {
    access_token: "",
    dataRegist: {},
  },
  getters: {
    getAccessToken(state) {
      return state.access_token;
    }
  },
  mutations: {
    accessToken(state, data) {
      state.access_token = data;
      console.log("sudah nyampe");
      console.log(state.access_token);
    },
    registDataUser(state, data) {
      state.dataRegist = data;
      console.log("load data");
      console.log(state.dataRegist);
    }
  },

  actions: {
    async registerAct(context, payload) {
      var data = await AuthServices.verifyRegister(payload);
      var toks = data.token;
      await context.commit('registDataUser', payload);
      await context.commit('accessToken', toks);
    },
    async loginAct(context, payload) {
      var data = await AuthServices.verifyLogin(payload);
      var toks = data.token;
      await context.commit('registDataUser', payload);
      await context.commit('accessToken', toks);

    }
  },

})