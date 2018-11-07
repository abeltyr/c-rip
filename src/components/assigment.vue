<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6 >
    <v-subheader>ASSIGMENTS</v-subheader>
      <v-card ref="form" class="mt-2">
        <v-card-text>
          <v-text-field
            ref="Subject Name"
            v-model="SubjectName"
            :disabled="Updating"
            :rules="progrules"
            :error-messages="errorMessages"
            label="Subject Name"
            required
          ></v-text-field>
          <v-text-field
            ref="Assigment Name"
            v-model="AssigmentName"
            :disabled="Updating"
            :rules="progrules"
            :error-messages="errorMessages"
            label="Assigment Name"
            required
          ></v-text-field>
            <v-flex xs12 sm12 style="text-align:center;">
                <h3>Due Date</h3>
            <v-date-picker v-model="picker" :rules="progrules" color="blue lighten-1"></v-date-picker>
            </v-flex>
          <v-text-field
            ref="File"
            v-model="file"
            :rules="progrules"
            :disabled="Updating"
            :error-messages="errorMessages"
            label="File Link"
            required
          ></v-text-field>
        <v-flex xs12 sm12>
            <v-text-field
                v-model="password"
                :disabled="Updating"
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
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-flex xs-12 style="text-align:center;">
                <v-btn  style="width:80%" :loading="Updating" @click="submit">
                    <v-icon left>add</v-icon>
                     Assigment 
                </v-btn>
            </v-flex>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    Updating: false,
    picker: new Date().toISOString().substr(0, 10),
    errorMessages: "",
    SubjectName: "",
    AssigmentName: "",
    file: "",
    password: "",
    show1: false,
    rules: {
      min: v => v.length >= 8 || "Min 8 characters",
      required: v => !!v || "required"
    },
    progrules: [v => !!v || "required"]
  }),

  watch: {
    name() {
      this.errorMessages = "";
    }
  },
  methods: {
    submit() {
      this.Updating = true;
      if (!navigator.onLine) {
        this.$message.error(
          "it looks like you are not currently connected to the internt please try again in when you are",
          10
        );
        this.Updating = false;
      } else {
        if (
          this.SubjectName != "" &&
          this.AssigmentName != "" &&
          this.file != "" &&
          this.picker != "" &&
          this.password.length >= 8
        ) {
          axios({
            method: "post",
            url: "https://aastu-class-app.herokuapp.com/api/assignment/new",
            data: {
              AssignmentName: this.AssigmentName,
              SubjectName: this.SubjectName,
              DueDate: this.picker,
              File: this.file,
              password: this.password
            }
          })
            .then(response => {
              this.Updating = false;
              this.$notification["success"]({
                message: "success ",
                description: "Succesfully added assigment"
              });
            })
            .catch(error => {
              this.Updating = false;
              this.$notification["error"]({
                message: "ERROR ",
                description: "Some thing went wrong"
              });
            });
        } else if (
          this.SubjectName != "" ||
          this.AssigmentName != "" ||
          this.file != "" ||
          this.picker != ""
        ) {
          this.Updating = false;
          this.$notification["error"]({
            message: "ERROR ",
            description: "Fill the form provided "
          });
        } else if (this.password.length < 8) {
          this.Updating = false;
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