<script>
import Navbar from "../components/Nav.vue";
import Foot from "../components/Foot.vue";
import Carousel from "../components/Carousel.vue";
import Research from "../components/Reserch.vue";
import Team from "../components/Team.vue";
import Tutors from "../components/Tutor.vue";
import Works from "../components/Works.vue";

export default {
  components: {
    Foot,
    Navbar,
    Carousel,
    Research,
    Team,
    Tutors,
    Works,
  },
};
</script>

<template>
  <carousel />
  <research />
  <tutors />
  <team />
  <works />
</template>

<style scoped>
.home-section {
}
</style>
