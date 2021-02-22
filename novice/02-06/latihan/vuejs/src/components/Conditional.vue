<template>
  <div id="conditionalSection">
    <h2><b>Conditional Rendering</b></h2>
    <input type="input" v-model="number" placeholder="Input Number"/>
    <p>{{number}}</p>
    <p v-if="number==0">{{check}}</p>
    <p v-else-if="number%2==0">{{checkIn}}</p>
    <p v-else>{{checkOut}}</p>
   
    
  
  </div>
</template>
<script>
export default {
  name: "Conditional",
  data: () => {
    return {
      number:null,
      statusAngka:"",
    };
  },
  computed:{
    checkIn:function(){
        return this.statusAngka+" Angka Genap ";
    },
    checkOut:function(){
        return this.statusAngka+" Angka Ganjil";
    },
    check:function(){
      return this.statusAngka;
    }
  }
  
};
</script>
