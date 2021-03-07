<template>
<nav>

  <v-navigation-drawer v-model="drawer" temporary app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            To Do list
          </v-list-item-title>
          <v-list-item-subtitle>
            Vacations
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.router"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  <v-app-bar
    color="orange" app>
    <v-app-bar-nav-icon @click="drawer= !drawer">
      
    </v-app-bar-nav-icon>

  </v-app-bar>
</nav>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard',router:'/dashboard'},
          { title: 'Input Data', icon: 'mdi-image',router:'/input'},
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
        drawer:false,
      }
    },
  }
</script>