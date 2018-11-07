<template>
  <v-layout
    column
    justify-center
  >
    <v-subheader>DAYS PROGRAM</v-subheader>

    <v-expansion-panel popout>
      <v-expansion-panel-content
        hide-actions
      >
        <v-layout
          slot="header"
          align-center
          row
          spacer
        >
          <v-flex xs-12 sm-12 md-12>
              <strong style="color:#616161 ; font-size:20px; font-weight:1000;" >MONDAY</strong>
          </v-flex>
        </v-layout>

        <v-card>
          <v-divider></v-divider>

        <v-card color="blue-grey darken-1" dark  >
            <v-form>
                <v-container>
                    <v-layout wrap>
                    <v-flex xs12 md6>
                        <v-text-field
                        v-model="Monday.morning"
                        :disabled="mUpdating"
                        :rules="[progrules.required]"
                        box
                        color="blue-grey lighten-2"
                        label="Mornings"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-text-field
                        v-model="Monday.afternoon"
                        :disabled="mUpdating"
                        :rules="[progrules.required]"
                        box
                        color="blue-grey lighten-2"
                        label="Afternoon"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12>
                        <v-text-field
                            v-model="password"
                            :disabled="mUpdating"
                            box
                            :append-icon="show1 ? 'visibility_off' : 'visibility'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            label="Password"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                        ></v-text-field>
                    </v-flex>
                    </v-layout>
                </v-container>
                </v-form>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-flex xs-12 style="text-align:center;">
                        <v-btn  style="width:90%"
                                :loading="mUpdating"
                                color="blue-grey darken-2"
                                depressed
                                @click="mo">
                                <v-icon left>mdi-update</v-icon>
                            Update 
                        </v-btn>
                    </v-flex>
                </v-card-actions>
        </v-card>
          
        </v-card>
      </v-expansion-panel-content>

      <v-expansion-panel-content
        hide-actions
      >
        <v-layout
          slot="header"
          align-center
          row
          spacer
        >
          <v-flex xs-12 sm-12 md-12>
              <strong style="color:#ff8f00 ; font-size:20px; font-weight:1000;">TUSEDAY</strong>
          </v-flex>
        </v-layout>

        <v-card>
          <v-divider></v-divider>

        <v-card color="blue-grey darken-1" dark  >
            <v-form>
                <v-container>
                    <v-layout wrap>
                    <v-flex xs12 md6>
                        <v-text-field
                        v-model="Tuesday.morning"
                        :disabled="tUpdating"
                        box
                        color="blue-grey lighten-2"
                        label="Morning"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-text-field
                        v-model="Tuesday.afternoon"
                        :disabled="tUpdating"
                        box
                        color="blue-grey lighten-2"
                        label="Afternoon"
                        ></v-text-field>
                    </v-flex>


                    <v-flex xs12 sm12>
                        <v-text-field
                            v-model="password"
                            :disabled="tUpdating"
                            box
                            :append-icon="show1 ? 'visibility_off' : 'visibility'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            label="Password"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                        ></v-text-field>
                    </v-flex>
                    </v-layout>
                </v-container>
                </v-form>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-flex xs-12 style="text-align:center;">
                        <v-btn  style="width:90%"
                                :loading="tUpdating"
                                color="blue-grey darken-2"
                                depressed
                                @click="tu">
                                <v-icon left>mdi-update</v-icon>
                            Update 
                        </v-btn>
                    </v-flex>
                </v-card-actions>
        </v-card>
          
        </v-card>
      </v-expansion-panel-content>


<!--  wenseday--> 

      <v-expansion-panel-content
        hide-actions
      >
        <v-layout
          slot="header"
          align-center
          row
          spacer
        >
          <v-flex xs-12 sm-12 md-12>
              <strong style="color:#80cbc4; font-size:20px; font-weight:1000;">WENSEDAY</strong>
          </v-flex>
        </v-layout>

        <v-card>
          <v-divider></v-divider>

        <v-card color="blue-grey darken-1" dark  >
            <v-form>
                <v-container>
                    <v-layout wrap>
                    <v-flex xs12 md6>
                        <v-text-field
                        v-model="Wenesday.morning"
                        :disabled="wUpdating"
                        box
                        color="blue-grey lighten-2"
                        label="Morning"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-text-field
                        v-model="Wenesday.afternoon"
                        :disabled="wUpdating"
                        box
                        color="blue-grey lighten-2"
                        label="Afternoon"
                        ></v-text-field>
                    </v-flex>


                    <v-flex xs12 sm12>
                        <v-text-field
                            v-model="password"
                            :disabled="wUpdating"
                            box
                            :append-icon="show1 ? 'visibility_off' : 'visibility'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            label="Password"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                        ></v-text-field>
                    </v-flex>
                    </v-layout>
                </v-container>
                </v-form>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-flex xs-12 style="text-align:center;">
                        <v-btn  style="width:90%"
                                :loading="wUpdating"
                                color="blue-grey darken-2"
                                depressed
                                @click="we">
                                <v-icon left>mdi-update</v-icon>
                            Update 
                        </v-btn>
                    </v-flex>
                </v-card-actions>
        </v-card>
          
        </v-card>
      </v-expansion-panel-content>

<!-- thursday -->

      <v-expansion-panel-content
        hide-actions
      >
        <v-layout
          slot="header"
          align-center
          row
          spacer
        >
          <v-flex xs-12 sm-12 md-12>
              <strong style="color:#4db6ac; font-size:20px; font-weight:1000;">THURSDAY</strong>
          </v-flex>
        </v-layout>

        <v-card>
          <v-divider></v-divider>

        <v-card color="blue-grey darken-1" dark  >
            <v-form>
                <v-container>
                    <v-layout wrap>
                    <v-flex xs12 md6>
                        <v-text-field
                        v-model="Thursday.morning"
                        :disabled="thUpdating"
                        box
                        color="blue-grey lighten-2"
                        label="Morning"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-text-field
                        v-model="Thursday.afternoon"
                        :disabled="thUpdating"
                        box
                        color="blue-grey lighten-2"
                        label="Afternoon"
                        ></v-text-field>
                    </v-flex>


                    <v-flex xs12 sm12>
                        <v-text-field
                            :disabled="thUpdating"
                            box
                            v-model="password"
                            :append-icon="show1 ? 'visibility_off' : 'visibility'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            label="Password"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                        ></v-text-field>
                    </v-flex>
                    </v-layout>
                </v-container>
                </v-form>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-flex xs-12 style="text-align:center;">
                        <v-btn  style="width:90%"
                                :loading="thUpdating"
                                color="blue-grey darken-2"
                                depressed
                                @click="th">
                                <v-icon left>mdi-update</v-icon>
                            Update 
                        </v-btn>
                    </v-flex>
                </v-card-actions>
        </v-card>
          
        </v-card>
      </v-expansion-panel-content>

<!--friday-->

      <v-expansion-panel-content
        hide-actions
      >
        <v-layout
          slot="header"
          align-center
          row
          spacer
        >
          <v-flex xs-12 sm-12 md-12>
              <strong  style="color:#4dd0e1; font-size:20px; font-weight:1000;">FRIDAY</strong>
          </v-flex>
        </v-layout>

        <v-card>
          <v-divider></v-divider>

        <v-card color="blue-grey darken-1" dark  >
            <v-form>
                <v-container>
                    <v-layout wrap>
                    <v-flex xs12 md6>
                        <v-text-field
                        v-model="Friday.morning"
                        :disabled="fUpdating"
                        box
                        color="blue-grey lighten-2"
                        label="Morning"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-text-field
                        v-model="Friday.afternoon"
                        :disabled="fUpdating"
                        box
                        color="blue-grey lighten-2"
                        label="Afternoon"
                        ></v-text-field>
                    </v-flex>


                    <v-flex xs12 sm12>
                        <v-text-field
                            v-model="password"
                            :disabled="fUpdating"
                            box
                            :append-icon="show1 ? 'visibility_off' : 'visibility'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            label="Password"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                        ></v-text-field>
                    </v-flex>
                    </v-layout>
                </v-container>
                </v-form>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-flex xs-12 style="text-align:center;">
                        <v-btn  style="width:90%"
                                :loading="fUpdating"
                                color="blue-grey darken-2"
                                depressed
                                @click="fr">
                                <v-icon left>mdi-update</v-icon>
                            Update 
                        </v-btn>
                    </v-flex>
                </v-card-actions>
        </v-card>
          
        </v-card>
      </v-expansion-panel-content>





    </v-expansion-panel>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mUpdating: false,
      tUpdating: false,
      wUpdating: false,
      thUpdating: false,
      fUpdating: false,
      Monday: {},
      Tuesday: {},
      Wenesday: {},
      Thursday: {},
      Friday: {},
      show1: false,
      password: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      },
      progrules: {
        required: value => !!value || "Required."
      }
    };
  },
  created: function() {
    if (!navigator.onLine) {
      this.$message.error(
        "it looks like you are not currently connected to the internt please try again in when you are",
        10
      );
    } else {
      axios({
        method: "get",
        url: "https://aastu-class-app.herokuapp.com/api/program"
      })
        .then(response => {
          this.Monday = response.data.Monday;
          this.Tuesday = response.data.Tuesday;
          this.Wenesday = response.data.Wednesday;
          this.Thursday = response.data.Thursday;
          this.Friday = response.data.Friday;
          this.$message.success("succesfully loaded current data", 10);
        })
        .catch(error => {
          this.$notification["error"]({
            message: "ERROR ",
            description: "some thing went wrong geting data reload"
          });
        });
    }
  },
  methods: {
    mo() {
      this.mUpdating = true;
      if (!navigator.onLine) {
        this.$message.error(
          "it looks like you are not currently connected to the internt please try again in when you are",
          10
        );
        this.mUpdating = false;
      } else {
        if (
          this.Monday.afternoon != "" &&
          this.Monday.morning != "" &&
          this.password.length >= 8
        ) {
          axios({
            method: "post",
            url: "https://aastu-class-app.herokuapp.com/api/program/update",
            data: {
              Monday: {
                morning: this.Monday.morning,
                afternoon: this.Monday.afternoon
              },
              Tuesday: {
                morning: this.Tuesday.morning,
                afternoon: this.Tuesday.afternoon
              },
              Wednesday: {
                morning: this.Wenesday.morning,
                afternoon: this.Wenesday.afternoon
              },
              Thursday: {
                morning: this.Thursday.morning,
                afternoon: this.Thursday.afternoon
              },
              Friday: {
                morning: this.Friday.morning,
                afternoon: this.Friday.afternoon
              },
              password: this.password
            }
          })
            .then(response => {
              this.mUpdating = false;
              this.$notification["success"]({
                message: "success ",
                description: "monday program has changed"
              });
            })
            .catch(error => {
              this.mUpdating = false;
              this.$notification["error"]({
                message: "ERROR ",
                description: "some thing went wrong"
              });
              console.log(error);
            });
        } else if (
          this.Monday.afternoon === "" ||
          this.Monday.morning === "" ||
          this.password === ""
        ) {
          this.mUpdating = false;
          this.$notification["error"]({
            message: "ERROR ",
            description: "Fill the form provided in monday"
          });
        } else if (this.password.length < 8) {
          this.mUpdating = false;
          this.$notification["error"]({
            message: "ERROR ",
            description: "The password you provided is to short "
          });
        }
      }
    },
    tu() {
      this.tUpdating = true;
      if (!navigator.onLine) {
        this.$message.error(
          "it looks like you are not currently connected to the internt please try again in when you are",
          10
        );
        this.tUpdating = false;
      } else {
        if (
          this.Tuesday.afternoon != "" &&
          this.Tuesday.morning != "" &&
          this.password.length >= 8
        ) {
          axios({
            method: "post",
            url: "https://aastu-class-app.herokuapp.com/api/program/update",
            data: {
              Monday: {
                morning: this.Monday.morning,
                afternoon: this.Monday.afternoon
              },
              Tuesday: {
                morning: this.Tuesday.morning,
                afternoon: this.Tuesday.afternoon
              },
              Wednesday: {
                morning: this.Wenesday.morning,
                afternoon: this.Wenesday.afternoon
              },
              Thursday: {
                morning: this.Thursday.morning,
                afternoon: this.Thursday.afternoon
              },
              Friday: {
                morning: this.Friday.morning,
                afternoon: this.Friday.afternoon
              },
              password: this.password
            }
          })
            .then(response => {
              this.tUpdating = false;
              this.$notification["success"]({
                message: "success ",
                description: "Tuesday program has changed"
              });
            })
            .catch(error => {
              this.tUpdating = false;
              this.$notification["error"]({
                message: "ERROR ",
                description: "some thing went wrong"
              });
            });
        } else if (
          this.Tuesday.afternoon === "" ||
          this.Tuesday.morning === "" ||
          this.password === ""
        ) {
          this.tUpdating = false;
          this.$notification["error"]({
            message: "ERROR ",
            description: "Fill the form provided in tuesday"
          });
        } else if (this.password.length < 8) {
          this.tUpdating = false;
          this.$notification["error"]({
            message: "ERROR ",
            description: "The password you provided is to short "
          });
        }
      }
    },
    we() {
      this.wUpdating = true;
      if (!navigator.onLine) {
        this.$message.error(
          "it looks like you are not currently connected to the internt please try again in when you are",
          10
        );
        this.wUpdating = false;
      } else {
        if (
          this.Wenesday.afternoon != "" &&
          this.Wenesday.morning != "" &&
          this.password.length >= 8
        ) {
          axios({
            method: "post",
            url: "https://aastu-class-app.herokuapp.com/api/program/update",
            data: {
              Monday: {
                morning: this.Monday.morning,
                afternoon: this.Monday.afternoon
              },
              Tuesday: {
                morning: this.Tuesday.morning,
                afternoon: this.Tuesday.afternoon
              },
              Wednesday: {
                morning: this.Wenesday.morning,
                afternoon: this.Wenesday.afternoon
              },
              Thursday: {
                morning: this.Thursday.morning,
                afternoon: this.Thursday.afternoon
              },
              Friday: {
                morning: this.Friday.morning,
                afternoon: this.Friday.afternoon
              },
              password: this.password
            }
          })
            .then(response => {
              this.wUpdating = false;
              this.$notification["success"]({
                message: "success ",
                description: "Wenesday program has changed"
              });
            })
            .catch(error => {
              this.wUpdating = false;
              this.$notification["error"]({
                message: "ERROR ",
                description: "some thing went wrong"
              });
            });
        } else if (
          this.Wenesday.afternoon === "" ||
          this.Wenesday.morning === "" ||
          this.password === ""
        ) {
          this.wUpdating = false;
          this.$notification["error"]({
            message: "ERROR ",
            description: "Fill the form provided in wenseday"
          });
        } else if (this.password.length < 8) {
          this.wUpdating = false;
          this.$notification["error"]({
            message: "ERROR ",
            description: "The password you provided is to short "
          });
        }
      }
    },
    th() {
      this.thUpdating = true;
      if (!navigator.onLine) {
        this.$message.error(
          "it looks like you are not currently connected to the internt please try again in when you are",
          10
        );
        this.thUpdating = false;
      } else {
        if (
          this.Thursday.afternoon != "" &&
          this.Thursday.morning != "" &&
          this.password.length >= 8
        ) {
          axios({
            method: "post",
            url: "https://aastu-class-app.herokuapp.com/api/program/update",
            data: {
              Monday: {
                morning: this.Monday.morning,
                afternoon: this.Monday.afternoon
              },
              Tuesday: {
                morning: this.Tuesday.morning,
                afternoon: this.Tuesday.afternoon
              },
              Wednesday: {
                morning: this.Wenesday.morning,
                afternoon: this.Wenesday.afternoon
              },
              Thursday: {
                morning: this.Thursday.morning,
                afternoon: this.Thursday.afternoon
              },
              Friday: {
                morning: this.Friday.morning,
                afternoon: this.Friday.afternoon
              },
              password: this.password
            }
          })
            .then(response => {
              this.thUpdating = false;
              this.$notification["success"]({
                message: "success ",
                description: "Thursday program has changed"
              });
            })
            .catch(error => {
              this.thUpdating = false;
              this.$notification["error"]({
                message: "ERROR ",
                description: "some thing went wrong"
              });
            });
        } else if (
          this.Thursday.afternoon === "" ||
          this.Thursday.morning === "" ||
          this.password === ""
        ) {
          this.thUpdating = false;
          this.$notification["error"]({
            message: "ERROR ",
            description: "Fill the form provided in thursday"
          });
        } else if (this.password.length < 8) {
          this.thUpdating = false;
          this.$notification["error"]({
            message: "ERROR ",
            description: "The password you provided is to short "
          });
        }
      }
    },
    fr() {
      this.fUpdating = true;
      if (!navigator.onLine) {
        this.$message.error(
          "it looks like you are not currently connected to the internt please try again in when you are",
          10
        );
        this.fUpdating = false;
      } else {
        if (
          this.Friday.afternoon != "" &&
          this.Friday.morning != "" &&
          this.password.length >= 8
        ) {
          axios({
            method: "post",
            url: "https://aastu-class-app.herokuapp.com/api/program/update",
            data: {
              Monday: {
                morning: this.Monday.morning,
                afternoon: this.Monday.afternoon
              },
              Tuesday: {
                morning: this.Tuesday.morning,
                afternoon: this.Tuesday.afternoon
              },
              Wednesday: {
                morning: this.Wenesday.morning,
                afternoon: this.Wenesday.afternoon
              },
              Thursday: {
                morning: this.Thursday.morning,
                afternoon: this.Thursday.afternoon
              },
              Friday: {
                morning: this.Friday.morning,
                afternoon: this.Friday.afternoon
              },
              password: this.password
            }
          })
            .then(response => {
              this.fUpdating = false;
              this.$notification["success"]({
                message: "success ",
                description: "Friday program has changed"
              });
            })
            .catch(error => {
              this.fUpdating = false;
              this.$notification["error"]({
                message: "ERROR ",
                description: "some thing went wrong"
              });
            });
        } else if (
          this.Friday.afternoon === "" ||
          this.Friday.morning === "" ||
          this.password === ""
        ) {
          this.fUpdating = false;
          this.$notification["error"]({
            message: "ERROR ",
            description: "Fill the form provided in friday"
          });
        } else if (this.password.length < 8) {
          this.fUpdating = false;
          this.$notification["error"]({
            message: "ERROR ",
            description: "The password you provided is to short "
          });
        }
      }
    }
  }
};
</script>