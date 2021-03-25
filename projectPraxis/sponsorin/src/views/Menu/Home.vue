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
              </div>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="bg-white">
      <v-container>
        <div class="text-center mb-5">
          <h1
            class="font-akaya animate__animated animate__delay-1s animate__fadeIn"
            color="teal darken-4"
          >
            Our Goals
          </h1>
          <div class="line mx-auto"></div>
        </div>
        <v-row>
          <v-col class="text-center">
            <v-img
              class="animate__animated animate__delay-1s animate__backInLeft"
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="500"
              max-width="550"
              src="../../../assets/img/about.jpg"
            ></v-img>
          </v-col>
          <v-col>
            <div
              class="title-item mt-6 animate__animated animate__delay-1s animate__backInDown"
            >
              <strong> Our Goals </strong>
            </div>
            <div
              class="pt-2 text-indent justify-center animate__animated animate__delay-1s animate__backInRight"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              corporis minus autem sunt, nesciunt pariatur facilis dignissimos,
              consequuntur blanditiis, sed vitae ipsa. Illo id quidem autem ut
              impedit praesentium accusantium? Sit enim laboriosam quisquam,
              ipsum temporibus deserunt neque dolor sunt, esse, dicta dolorum
              quidem fuga veritatis eius inventore dignissimos quod laudantium?
              Dignissimos assumenda laboriosam rerum minus voluptatem rem
              tempora impedit? Magni consequuntur odit rem voluptate illum!
              Esse, rerum dolorem distinctio incidunt placeat quis explicabo
              beatae consequuntur quo, doloremque mollitia? Mollitia at
              voluptatibus cum molestias consectetur voluptate a perferendis
              ducimus autem. Similique blanditiis beatae explicabo cupiditate
              delectus nostrum adipisci minima tempore sint iure exercitationem
              repudiandae odio et unde commodi iste nisi cumque, deleniti
              magnam, voluptatem quo nemo. Eius explicabo perferendis
              aspernatur. Minus illum doloremque quisquam quo, vel quam veniam?
              Cumque magnam laudantium culpa eius, cum consequatur non,
              architecto similique deleniti animi necessitatibus eveniet. Et
              veritatis corporis nostrum asperiores ipsam harum vitae?
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="mt-1">
      <v-container>
        <div class="text-center">
          <h1
            class="font-akaya animate__animated animate__delay-1s animate__fadeIn"
            color="teal darken-4"
          >
            Benefits For You
          </h1>
          <div class="line mx-auto"></div>
        </div>
        <v-row>
          <v-col v-for="(item, index) in cardNumber" :key="index">
            <div>
              <v-card :loading="loading" class="mx-auto my-6" max-width="374">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="300"
                  max-width="371"
                  max-height="300"
                  :src="item.im"
                ></v-img>

                <v-card-title>{{ item.title }}</v-card-title>

                <v-card-text>
                  <div>
                    {{ item.desc }}
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
// @ is an alias to /src
require("../../../assets/css/home.css");
require("../../../assets/css/style.css");
export default {
  name: "Home",

  data: () => {
    return {
      colors: ["warning", "warning", "warning", "warning", "warning"],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      cardNumber: [
        {
          title: "Brand Your Company",
          desc:
            "You can build teamwork with event organizer to Branding your Company",
          im: require("../../../assets/img/case-1.jpg"),
        },
        {
          title: "Event Can Be Successfully",
          desc: "Your event can be successful because your event needs are met",
          im: require("../../../assets/img/case-3.jpg"),
        },
        {
          title: "Practice Contract n Trusted",
          desc:
            "Simple contract can help tou to save your time. Time is money brather",
          im: require("../../../assets/img/case-5.jpg"),
        },
      ],
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      value: ["foo", "bar", "fizz", "buzz"],
    };
  },
};
</script>
<style></style>
