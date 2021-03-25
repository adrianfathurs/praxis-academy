<template>
  <v-content>
    <v-container class="padding-container2">
      <v-card>
        <v-container class=" margin-top-container">
          <v-row>
            <v-col md="6" sm="12" xs="12">
              <v-img
                elevation-4
                contain
                lazy-src="../../../assets/img/auth/vectors3.png"
                max-height="300"
                max-width="500"
                :src="require('../../../assets/img/auth/vectors3.png')"
              ></v-img>
              <div class="text-center mt-2">
                <h1>
                  <span class="font-akaya   ">Sponsor</span
                  ><span class="font-roboto underline ">In</span>
                </h1>
              </div>
            </v-col>
            <v-divider></v-divider>
            <v-col md="6" sm="12" xs="12">
              <div class="text-center mt-10">
                <h2>Silakan Login !</h2>
              </div>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rulesPass.required, rulesPass.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Normal with hint text"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-form>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Login
              </v-btn>

              <v-btn color="orange darken-1" class="mr-4" @click="reset">
                Reset Form
              </v-btn>
              <div class="mt-2">
                <h4>
                  Belum Punya Akun ?<span
                    ><v-btn to="/register" color="primary" text>
                      Register
                    </v-btn></span
                  >
                </h4>
              </div>
              <div class="cls"></div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </v-content>
</template>
<script>
require("../../../assets/css/register.css");
export default {
  data: () => ({
    valid: true,

    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: "password",
    rulesPass: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
