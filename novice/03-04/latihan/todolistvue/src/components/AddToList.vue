<template>
  <div class="container">
    <div id="box">
      <div id="box-left">
        <div class="form-group">
          <label for="">Nama : </label>
          <input class="form-input" type="text" v-model="nama">
        </div><br>
        <div class="form-group">
          <label for="">Age : </label>
          <input class="form-input" type="number" v-model="age"><br>
        </div>
      </div>
      <div id="box-right">
        <button @click="btnSubmit">Tambah Kegiatan</button>
      </div>
    </div>
    
    
     
   
  </div>
</template>
<script>


export default {
  name:"addList",
  component:{
    
  },
  data:()=>{
    return{
      nama:"",
      age:null,
      
    }
  },
  
  methods: {
    btnSubmit(){
      this.$store.dispatch('addData',{
        newName:this.nama,newAge:this.age
      })
    },
   
    },
}
</script>
<style >
  .form-group{
    margin:5px;
  }
  .form-input{
    border-radius: 2px;
  }
  #box{
    display: flex;
    flex-direction: row;
    width:400px;
    height:30vh;
    text-align: center;
    margin-left:200px;
  }
  #box-left{
    flex-grow:4;
  }
  #box-right{
    flex-grow:4;
  }
</style>