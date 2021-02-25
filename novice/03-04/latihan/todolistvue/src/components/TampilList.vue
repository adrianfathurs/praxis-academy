<template>
  <div>
    <ul>
      <li v-for="(item,index) of dataUser" :key="index">
        <p >{{item.nama}}</p>
        <p >{{item.age}}</p>
        <button @click="btnHapus(index)">Hapus Kegiatan</button>
        <button @click="btnPopUp()">Pop Up Edit Kegiatan</button>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name:"TampilList",
  
  methods:{
    btnHapus(index){
      this.$store.dispatch('deleteData',{
        chooseDelete:index
      })
    },
     btnPop(){
      this.checkEdit=true;
      return this.checkEdit;
    },
 
  }
}
</script>
<style>

</style>