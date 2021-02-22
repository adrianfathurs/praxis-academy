<template>
  <div id="App">
    <!-- Biodata -->
    <div id="compSec">
      <h2>Component Section</h2>
      <button @click="componentSec()">Tampil Component</button>
      <div v-show="checkComp==true"><Biodata/></div>
    </div>
    <!-- Counter -->
    <div id="compCount">
      <h2>Component Counter</h2>
      <button @click="componentCount()">Tampil Component Counter</button>
      <div v-show="checkCount==true"><Counter/></div>
    </div>
     <!-- props -->
    <div id="compProp">
     <h2>Props trial Component</h2>
     <button @click="componentProps()">Tampil Component Props</button>
     <div v-show="checkProp==true"><Propss :address="address"/></div>
    </div>
  </div>
  
</template>

<script>
import Biodata from './components/Biodata.vue';
import Counter from './components/CounterComponent.vue';
import Propss from './components/Props.vue';
export default {
  name: 'App',
  components: {
    Biodata,Counter,Propss,
  },
  data:()=>{
    return{
      address:[
        {nama:"wijaya",alamat:"JLN KALIURANG"},
        {nama:"kusuma",alamat:"JLN TAJEM"},
        {nama:"sanjaya",alamat:"JLN MAGELANG"},
      ],
      checkComp:false,
      checkCount:false,
      checkProp:false,
    }
  },
  methods:{
    componentSec(){
      if(this.checkComp==false){
        this.checkComp=true;
        return this.checkComp;
      }else{
        this.checkComp=false;
        return this.checkComp;
      }
    },
    componentCount(){
      if(this.checkCount==false){
        this.checkCount=true;
        return this.checkCount;
      }else{
        this.checkCount=false;
        return this.checkCount;
      }
    },
    componentProps(){
      if(this.checkProp==false){
        this.checkProp=true;
        return this.checkProp;
      }else{
        this.checkProp=false;
        return this.checkProp;
      }
    },
  },
}
</script>

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 20px;
  margin:20px;
}
#compProp{
  flex-wrap: wrap;
  flex-grow: 2;
}
#compCount{
  flex-wrap: wrap;
  flex-grow: 2;
}
#compSec{
  flex-wrap: wrap;
  flex-grow: 2;
}


</style>
