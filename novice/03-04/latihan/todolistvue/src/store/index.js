import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[],
  },
  mutations: {
    addedData(state,payload){
      state.user.push({"nama":payload.newName,"age":payload.newAge})
    },
    deletedData(state,payload){
      state.user.splice(payload.chooseDelete,1)
    },
    updatedData(state,payload){
      state.user.splice(payload.indekss,1,{"nama":payload.newName,"age":payload.newAge});
      
    },
  },
  actions: {
    addData(context,payload){
      context.commit("addedData",payload)
    },
    deleteData(context,payload){
      context.commit("deletedData",payload)
    },
    updateData(context,payload){
      context.commit("updatedData",payload)
    },

  },
  modules: {
  }
})
