import Vue from 'vue'
import Vuex from 'vuex'
import toDoListService from './toDoList'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    toDoList: toDoListService,
  }
})