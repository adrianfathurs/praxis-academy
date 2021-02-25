<template>
  <div>
     <div >
      <div >
        <div class="form-group">
          <label for="">Nama : </label>
          <input class="form-input" type="text" v-model="namaEdit">
        </div><br>
        <div class="form-group">
          <label for="">Age : </label>
          <input class="form-input" type="number" v-model="ageEdit"><br>
        </div>
      </div>
      <div >
        <p>halo{{indeksEdit}}</p>
        <button @click="btnEdit(indeksEdit)">Edit Kegiatan</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['indeksEdit'],
  data:()=>{
    return{
      namaEdit:"",
      ageEdit:null,
      prams:false,

    }
  },
  methods:{
    btnEdit(indeksEdit){
      this.$store.dispatch('updateData',{
        newName:this.namaEdit,newAge:this.ageEdit,indekss:indeksEdit,
      });
      this.$emit("closePopUp",this.prams);
    },
  }
}
</script>