<template>
  <nav>

 
<v-navigation-drawer v-model="drawer" app >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
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
          :to="item.route"
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
    <v-app-bar app
  color="yellow"
  >
  <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
  
  </nav>
</template>
<script>
  export default {
    data () {
      return {
        drawer:false,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', route:'/about' },
          { title: 'Photos', icon: 'mdi-image', route:'/content' },
          { title: 'About', icon: 'mdi-help-box', route:"" },
        ],
        right: null,
      }
    },
  }
</script>