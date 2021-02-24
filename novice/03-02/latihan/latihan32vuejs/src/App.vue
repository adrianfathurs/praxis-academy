<template>
  <div id="app">
    <h2>Coba Menggunakan input dan melempar data menggunakan props</h2>
    <input type="text" v-model="user.name">
    <!-- kalo yang :user, :item contoh penggunaan props -->
    <!-- @changeUserN contoh fungsi yang dideklare di child nya -->
    <HelloWorld :user="user.name" :items="item" @changeUserN="add"/>
    <label for="">{{isiNama}}</label>
    

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data:()=>{
    return{
      user:{
        name:"",
        },
        item:[
          {nama:"mitsubisi",jenis:"roda 2"},
          {nama:"toyota",jenis:"roda 2"},
          {nama:"suzuki",jenis:"roda 2"},
        ],
        isiNama:"",
    }
  },
  methods: {
    add(isi){
      this.isiNama=isi;
      return this.isiNama;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
