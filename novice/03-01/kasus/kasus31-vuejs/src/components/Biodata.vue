<template>
<div id="biodata">
  <!-- biodata header -->
  <BiodataHeader/>
  <div id="flex">
    <div id="flexLeft">
      <BiodataLeft/>
    </div>
    <div id="flexRight">
      <BiodataRight/>
    </div>
  </div>

  <!-- biodata left -->
  <!-- biodata right -->
</div>

</template>
<script>
  import BiodataHeader from './biodata/BiodataHeader.vue';
  import BiodataLeft from './biodata/BiodataLeft.vue'; 
  import BiodataRight from './biodata/BiodataRight.vue'; 

export default {
  name:"Biodata",
  components:{
    BiodataHeader, BiodataLeft, BiodataRight,
  }
}
</script>
<style >
#biodata{
    border:4px solid red;
    height: 90vh;
    padding:5px;
  }
#flex{
    display:flex;
    flex-direction: row;
    height: 79vh;
    border: 2px solid green;
    padding:5px;
    margin-top:2px;
}
#flexLeft{
    flex-wrap: wrap;
    height: 70vh;
    border: 3px solid blue;
    flex-grow: 6;
    margin:2px;
    justify-content: center;
  
}
#flexRight{
    flex-wrap: wrap;
    height: 70vh;
    border: 3px solid blue;
    flex-grow: 6;
    margin:2px;
    justify-content: center;
}
</style>