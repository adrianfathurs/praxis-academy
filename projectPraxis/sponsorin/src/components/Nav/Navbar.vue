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
              <v-btn class="" to="/" color="white" text>
                Home
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="" to="/event" color="white" text>
                Event
              </v-btn>
            </v-col>

            <v-col>
              <v-btn class="" to="/coba" color="white" text>
                About
              </v-btn>
            </v-col>

            <v-col>
              <v-menu open-on-hover bottom offset-y text>
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
              <div v-if="access_token">
                <v-menu open-on-hover bottom offset-y text>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="white" text v-bind="attrs" v-on="on">
                      <v-icon class="pb-2 mr-2" color="teal darken-3"
                        >fas fa-users</v-icon
                      >
                      <span class="ml-2">
                        <v-icon> fas fa-caret-down</v-icon>
                      </span>
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item v-for="(item, index) in auth" :key="index">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                      <v-divider></v-divider>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
              <div v-else>
                <v-btn to="/register" color="orange darken-1" text>
                  <v-icon class="pb-2 mr-2" color="teal darken-3"
                    >fas fa-sign-in-alt</v-icon
                  >
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-toolbar>
    </v-container>

    <div class="navbar-items-navigation">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </div>
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

            <v-list-item v-for="(item, index) in items" :key="index" link>
              <v-list-item-title v-text="item.title"></v-list-item-title>
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
  </v-app-bar>
</template>
<script>
import { mapGetters } from "vuex";
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
    auth: [{ title: "Nama" }, { title: "Setting" }, { title: "Logout" }],
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
    icon: false,
  }),
  computed: {
    ...mapGetters({
      access_token: "AuthStore/getAccessToken",
    }),
  },
  mounted() {
    if (localStorage.getItem("access_token") != null) {
      this.icon = true;
    } else {
      this.icon = false;
    }
  },
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
@media (max-width: 450px) {
  .v-toolbar__content {
    width: 60%;
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
.pointer {
  cursor: pointer;
}
</style>
