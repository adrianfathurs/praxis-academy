<template>
<v-container>
  <v-row>
    <div  class="text-center mb-6 ml-4">
      <h1>Input Your Data</h1>
    </div>
  </v-row>
  <v-form
    ref="form"
    
    lazy-validation
  >
    <v-text-field
      v-model="inputNewNamaWisata"
     
      label="Nama Wisata"
      required
    ></v-text-field>

    <v-text-field
      v-model="inputNewTempatWisata"
      label="Tempat Wisata"
      required
    ></v-text-field>
    
    <v-textarea
      v-model="inputNewKetWisata"
      label="Deskripsi Wisata"
    ></v-textarea>
 
    <v-btn
      
      color="success"
      class="mr-4"
      @click="addWisata(inputNewNamaWisata,inputNewTempatWisata,inputNewKetWisata)"
    >
      Submit
    </v-btn>
  </v-form>
</v-container>
</template>

<script>
export default {
  data:()=>{
    return{
      inputNewNamaWisata:"",
      inputNewTempatWisata:"",
      inputNewKetWisata:"",
    }
  },
  methods: {
    addWisata(inputNamaWisata,inputTempatWisata,inputNewKetWisata){
      this.$store.dispatch("addWisata",{
      newNamaWisata:inputNamaWisata,
      newTempatWisata:inputTempatWisata,
      newKetWisata:inputNewKetWisata,
      });
    }
  },
  

}
</script>