<script>
import Navbar from "../components/Nav.vue";
import Foot from "../components/Foot.vue";
import TutorInfo from "../components/TutorInfo.vue";
import Carousel from "../components/Carousel.vue";
import Research from "../components/Reserch.vue";
import Team from "../components/Team.vue";
import Tutors from "../components/Tutor.vue";
import Works from "../components/Works.vue";

export default {
  components: {
    TutorInfo,
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
  <navbar />
  <carousel />
  <research />
  <tutors />
  <team />
  <works />
  <foot />
</template>

<style scoped></style>
