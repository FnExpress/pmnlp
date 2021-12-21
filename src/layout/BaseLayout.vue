<template>
  <Nav />
  <slot></slot>
  <Foot />
</template>

<script>
import Nav from "../components/Nav.vue";
import Foot from "../components/Foot.vue";
export default {
  components: { Foot, Nav },
};
</script>

<style scoped></style>
