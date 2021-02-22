<template>
  <div id="app">
    <div id="conditional">
      <button @click="statementControl">Button Conditional Statement</button>
        <div v-show="kondisiStatement">
          <Conditional/>
        </div>
    </div>
    <div id="looping">
        <button @click="statementLooping">Button Looping Statement</button>
          <div v-show="loopingStatement">
            <Looping/>
          </div>
      </div>
  </div>
  
</template>

<script>
import Conditional from './components/Conditional.vue'
import Looping from './components/Looping.vue'

export default {
  name: 'App',
  data:()=>{
    return{
      kondisiStatement:false,
      loopingStatement:false,
    };
  },
  components: {
    Conditional,Looping
  },
  methods:{
    statementControl(){
      if(this.kondisiStatement==false){
        this.kondisiStatement=true;
        return this.kondisiStatement;
      }else{
        this.kondisiStatement=false;
        return this.kondisiStatement;
      }
    },
    statementLooping(){
      if(this.loopingStatement==false){
        this.loopingStatement=true;
        return this.loopingStatement;
      }else{
        this.loopingStatement=false;
        return this.loopingStatement;
      }
    }
  }
}
</script>
