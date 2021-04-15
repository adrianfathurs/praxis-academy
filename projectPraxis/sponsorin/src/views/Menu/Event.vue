<template>
  <!--  -->

  <!--  -->

  <v-content
    id="scrolling-techniques-7"
    class="overflow-y-auto"
    max-height="600"
  >
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-1">
              <div class="text-center">
                <h1 class="mb-4 font-akaya">Hello!! Sponsor'ers</h1>
                <v-btn class="mt-2 mb-2" color="teal darken-4">Join Us</v-btn>
                <h3>Connect Your Event Organizer to Get SponsorShip !</h3>
                <h3>Connect Your Event Organizer to Get SponsorShip !</h3>
              </div>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <v-card class="mb-4" height="100px" tile color="grey lighten-5">
        <v-container tile>
          <v-row>
            <v-col md="8" sm="6" xs="12">
              <v-text-field
                v-model="search"
                class="mt-3"
                append-icon="mdi-magnify"
                label="Search "
                single-line
              ></v-text-field>
            </v-col>
            <v-col md="4" sm="6" xs="12">
              <v-select
                v-model="value"
                :items="items"
                attach
                chips
                label="Kategori"
                multiple
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-row>
        <v-col v-for="n in cardNumber" :key="n" md="3" sm="6" xs="12">
          <div class="pl-2 pr-2 pt-4 pb-2">
            <v-card max-width="300">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>

                <v-btn color="orange" text> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data: () => {
    return {
      colors: ["warning", "warning", "warning", "warning", "warning"],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      cardNumber: [1, 2, 3, 4, 5, 6],
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      value: ["foo", "bar", "fizz", "buzz"],
      dialog: false,
    };
  },
  mounted() {
    if (localStorage.getItem("access_token") != null) {
      this.dialog = true;
    }
  },
};
</script>
<style>
#app {
  background-color: #fafafa;
}
</style>
