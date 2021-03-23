<template>
  <v-app-bar app fixed flat color="orange darken-1">
    <div class="navbar-items-navigation text-white ">
      <p class="text-white ">
        <span class="font-akaya font-2 text-white ">Sponsor</span
        ><span class="font-roboto font-3 underline text-white">In</span>
      </p>
    </div>
    <v-container color="orange darken-1" fluid>
      <v-toolbar color="orange darken-1" flat>
        <div class="navbar-items-phone ">
          <span class="font-akaya font-2 text-white " color="white"
            >Sponsor</span
          ><span class="font-roboto font-3 underline text-white" color="white"
            >In</span
          >
        </div>

        <v-spacer></v-spacer>
        <div class="navbar-items-phone pt-1">
          <v-row>
            <v-col>
              <v-btn class="" color="white" text>
                Home
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="" color="white" text>
                About
              </v-btn>
            </v-col>

            <v-col>
              <v-menu offset-y text>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="white" text v-bind="attrs" v-on="on">
                    Kategori
                    <span class="ml-2"
                      ><v-icon> fas fa-caret-down</v-icon></span
                    >
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-divider></v-divider>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
            <v-col>
              <v-btn class="pb-3" to="/login" icon>
                <v-icon class="mr-2" color="teal darken-3"
                  >fas fa-sign-in-alt</v-icon
                >
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-toolbar>
    </v-container>
    <v-navigation-drawer v-model="drawer" absolute temporary right app>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <span class="font-akaya font-2">Sponsor</span
          ><span class="font-roboto font-3 underline">In</span>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-group :value="true" prepend-icon="mdi-account-circle">
            <template v-slot:activator>
              <v-list-item-title>Kategori</v-list-item-title>
            </template>

            <v-list-item v-for="item in items" :key="item" link>
              <v-list-item-title v-text="item.title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>fas fa-sign-in-alt</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <div class="navbar-items-navigation">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    group: null,
    show: true,
    items: [
      { title: "Music Art" },
      { title: "Art Stone" },
      { title: "Charity" },
      { title: "Donor Darah" },
    ],
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Roboto&display=swap");

.font-roboto {
  font-family: "Roboto", sans-serif;
}
.font-2 {
  font-size: 24px;
}
.underline {
  text-decoration: underline;
}
.font-3 {
  font-size: 20px;
}
.font-akaya {
  font-family: "Akaya Telivigala", cursive;
}
.text-white {
  color: "#FFFFFF";
}
@media (max-width: 751px) {
  .navbar-items-phone {
    visibility: hidden;
  }
}
@media (min-width: 750px) {
  .navbar-items-navigation {
    visibility: hidden;
  }
}
.float-right {
  float: "right";
}
</style>
