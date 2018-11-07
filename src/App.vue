
<template>
<div>
  <div style="height:100vh">

  <v-card v-if="activeBtn == 0" 
    style="overflow-y: auto;"
    height="91vh">
    <program></program>
  </v-card>
  <v-card v-if="activeBtn == 1" 
    style="overflow-y: auto;"
    height="91vh">
    <assigment></assigment>
  </v-card>
  <v-card
    style="overflow-y: hidden; height:9vh; z-index:10000000 ">
    <v-bottom-nav
      :active.sync="activeBtn"
      :value="showNav"
      absolute
      color="transparent"
    >

      <v-btn flat color="teal">
        <span>Program</span>
        <v-icon>receipt</v-icon>
      </v-btn>

      <v-btn flat color="teal">
        <span>assignments</span>
        <v-icon>assignment</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
  </div>
</div>
</template>


<script>
import program from "@/components/program";
import assigment from "@/components/assigment";
export default {
  components: {
    program: program,
    assigment: assigment
  },
  data() {
    return {
      activeBtn: 0,
      showNav: true
    };
  }
};
</script>

