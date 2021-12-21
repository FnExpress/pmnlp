<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from "./components/Nav.vue"
import Carousel from "./components/Carousel.vue"
import Research from "./components/Reserch.vue";
import Team from "./components/Team.vue";
import Tutors from "./components/Tutor.vue";
export default {
  components: {
    Navbar, Carousel, Research, Team, Tutors
  }
}
</script>

<template>
  <navbar/>
<!--  <carousel/>-->
  <research/>
  <tutors/>
  <team/>
</template>

<style>
</style>
