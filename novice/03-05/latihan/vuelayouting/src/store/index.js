import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wisata:[
      {nameVacation:"Gua Jati Jajar",tempatVacation:"Gunung Kidul",KetWisata:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. "},
      {nameVacation:"Pantai Parang Tritis ",tempatVacation:"Bantul",KetWisata:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. "},
      {nameVacation:"Pantai Srandakan ",tempatVacation:"Gunung Kidul",ketWisata:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. "},
    ],
  },
  mutations: {
  addedWisata(state,payload){
    state.wisata.push({"nameVacation":payload.newNamaWisata,"tempatVacation":payload.newTempatWisata,"ketWisata":payload.newKetWisata})
    console.log(payload);
    },
  deletedWisata(state,payload){
    state.wisata.splice(payload.deleteIndex,1);  
    console.log(payload);
    },
  },
  actions: {
    addWisata(context,payload){
      context.commit('addedWisata',payload)
    },
    deleteWisata(context,payload){
      context.commit('deletedWisata',payload)
    },
  },
  modules: {
  }
})
