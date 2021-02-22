<template>
  <div id="counterSection">
    <button class="jarak" @click="minus()">Minus</button>
    <label >{{number}}</label>
    <button class="jarak" @click="add()">Add</button>
  </div>
</template>
<script>
export default {
  name:"counterSection",
  data:()=>{
    return{
      number:0,
    }
  },
  methods: {
    add(){
      return this.number+=1;
    },
    minus(){
      return this.number-=1;
    }
  },
}
</script>
<style>
  #counterSection{
    margin: 20px;
  }
  .jarak{
    margin:10px;
  }
</style>