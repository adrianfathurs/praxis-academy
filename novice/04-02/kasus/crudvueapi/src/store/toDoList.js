import * as toDoListService from '@/services/toDoList'
export default ({
  namespaced: true,
  state: {
    todolist: [],
  },
  mutations: {
    getAll(state, payload) {
      state.todolist = payload;
    },

  },
  getters: {
    getterAllData(state) {

      return state.todolist;
    }
  },
  actions: {
    async getAllData(context) {
      var data = await toDoListService.getAll();
      await context.commit('getAll', data);
    },
    async addData(context, payload, ) {
      await toDoListService.addedData(payload);
      await context.dispatch('getAllData');

    },
    async deletedData(context, payload) {
      await toDoListService.hapusData(payload);
      console.log("oyy");
      await context.dispatch('getAllData');

    },
    async updatedData(context, payload) {

      await toDoListService.updateData(payload);
      await context.dispatch('getAllData');
    }

  },

  modules: {},
})