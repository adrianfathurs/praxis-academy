<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>Nama saya adalah {{username}} berumur {{age}}</p>
    <h3>Pemanggilan menggunakan getters</h3>
    <p>Nama Depan Saya adalah {{firstName}}</p>
    <p>Nama  Belakang Saya adalah {{lastName}}</p>
    <p>Bubuhan Kata Terhadap Nama Belakang Saya adalah {{prefiksName}}</p>
    <p>----------------------------------------------------------------</p>
    <p>Menggunakan mapSate Menggunakan mapMutation</p>
    <input type="text" v-model="ketikNama"/>
    <button @click="changeName(ketikNama)">Eksekusi</button>
    <input type="text" v-model="ketikAge"/>
    <button @click="changeAge(ketikAge)">Eksekusi</button><br>
    <label for="">Nama : {{hore.username}}</label> |
    <label for="">Age : {{hore.age}}</label>
    <p>----------------------------------------------------------------</p>
    <p><b>Menggunakan Pemanggilan mutation dengan cara 2</b></p>
    <input type="text" v-model="ketikAlamat"/>
     <button type="button" @click="changeAlamat()">Eksekusi</button><br>
     <label for="">Alamat : {{hore.alamat}}</label>
    <p>----------------------------------------------------------------</p>
    <!-- ini memang mengubah label {{hore.alamat karena variable state yang digunakan sama dengan methods changeAlamat()}} -->
    <button @click="changeAddress()">changed Address</button>
    <p>----------------------------------------------------------------</p>
    <button @click="changeNameAddress()">changed Nama dan Address</button>


  </div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapMutations} from 'vuex'

export default {
  name: 'Home',
  components: {
    
  },
  data:()=>{
    return{
      username:"",
      age:"",
      firstName:"",
      lastName:"",
      prefiksName:"",
      newName:"",
      ketikNama:"",
      ketikAge:"",
      ketikAlamat:"",
    }
  },
  methods:{
    getName(){
      this.username=this.$store.state.user.username;
      return this.username;
    },
    getAge(){
      this.age=this.$store.state.user.age;
      return this.age;
    }, 
    //carapertama untuk melakukan mutations
    ...mapMutations({
      changeName:'changedName',
      changeAge:'changedAge',
    }),
    //cara kedua untuk melakukan mutations
    changeAlamat(){
      this.$store.commit({
          type:"changedAlamat",
          newAlamat:this.ketikAlamat,
      });
    },
    //cara buat ngejalanin action
    changeAddress(){
      this.$store.dispatch("changedAddress",{
        newAlamat:"jln Boko Harjo"
      });
    },
    changeNameAddress(){
      this.$store.dispatch("changedNameAddress",{
        newAlamat:"jln Boko Harjo",newName:"Rifki Firmansyah"
      });
    }
    
  },
  computed:{
    ...mapState({
      hore:(state)=>state.user, 
      
    }),
   
  },
  mounted() {
    this.getName();
    this.getAge();
    this.firstName=this.$store.getters.firstName;
    this.lastName=this.$store.getters.lastName;
    this.prefiksName=this.$store.getters.prefixedName("Ajudan");
    

  },


}
</script>
