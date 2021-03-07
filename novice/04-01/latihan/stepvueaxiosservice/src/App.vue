<template>
  <div id="app">
    <button @click="tampil()">Klik Tampil Data</button>
    <div v-if="show">
      {{ User }}
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => {
    return {
      show: false,
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      User: "user/getAllUsers",
    }),
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    ...mapActions({
      getAllUser: "user/getAllUser",
    }),
    tampil() {
      if (this.show == false) {
        this.show = true;
        return this.show;
      } else {
        this.show = false;
        return this.show;
      }
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
