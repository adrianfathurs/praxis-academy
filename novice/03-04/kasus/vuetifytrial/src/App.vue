<template>
  <v-app>
    <Navbar />
    
    <v-main>
      <v-container fluid>
      <!-- If using vue-router -->
      <router-view></router-view>
       <!--  <Content :items="item"/> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
/* import Content from './components/Content'; */
import Navbar from './components/Navbar';

export default {
  name: 'App',

  components: {
   Navbar,/* Content, */
  
  },
};
</script>
