<template>
  <div class="home">
    <div class="form-group">
      <label><b>Username : </b></label>
      <input class="form-input" type="text" v-model="username"><br>
    </div>
    <div class="form-group">
      <label><b>Password : </b></label>
      <input class="form-input" type="password" v-model="password">
    </div>
    <button class="btn" @click="btnSubmit()"> Login </button>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
   
  },
  data:()=>{
        return{
          user:{
            username:"",
            password:"",
            },
          valid:false,
        }
    },
  methods: {
    btnSubmit(){
      if(this.username=="fathur" && this.password==123){
        this.valid=true;
        
        return this.$router.push("/about");
      }else{
        alert("Login Gagal");
        this.valid=false;
        return this.valid;
      }
    }
  },
}
</script>

<style>
.form-group{
  margin: 10px;
}
.form-input{
  border-radius: 2px;
}
.btn{
  border-radius: 2px;
  background-color: cornflowerblue;
  width:100px;
  height:20px;
}
</style>