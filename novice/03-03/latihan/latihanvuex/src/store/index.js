import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      username:"Adrian Fathur Setyawan",
      age:22,
      ketikNama:"",
      alamat:"Maguwoharjo Depok Sleman",
    }
  },
  getters:{
    firstName:(state)=>{
      return state.user.username.split(" ")[0];
    },
    lastName:(state,getters)=>{
      return state.user.username.replace(getters.firstName,"");
    },
    prefixedName:(state,getters)=>(prefix)=>{
      return prefix + getters.lastName;
    }

  },
  mutations: {
    //cara pertama untuk mealakukan mutasi
    changedName(state,payload){
      console.log(payload);
      state.user.username=payload;
    },
    changedAge(state,payload){
      state.user.age=payload;
    },  
    //cara kedua untuk melakuakan mutasi
    changedAlamat(state,payload){
      state.user.alamat=payload.newAlamat;
    },  
    changededName(state,payload){
      state.user.username=payload;
    },  
  },
  actions: {
    changedAddress(context,payload){
      setTimeout(() => {
        context.commit("changedAlamat",payload);
      }, 2000);
    },
    changedNameAddress(context,payload){
      setTimeout(() => {
        context.commit("changedAlamat",payload);
        context.commit("changededName",payload.newName);
      }, 2000);
    },
  },
  modules: {
  }
})
