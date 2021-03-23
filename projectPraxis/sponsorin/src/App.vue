<template>
<v-app id="app">
  <Navbar />
  <router-link />
  <router-view />
  
  <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Nav/Navbar.vue";
import Footer from "@/components/Fot/Footer.vue";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    Navbar,Footer,
  },
};
</script>
<style>
