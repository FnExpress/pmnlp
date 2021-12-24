<template>
  <Nav />
  <slot></slot>
  <Foot />
  <a
    href="#"
    class="back-to-top d-flex align-items-center justify-content-center active"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
</template>

<script>
import Nav from "../components/Nav.vue";
import Foot from "../components/Foot.vue";
export default {
  components: { Foot, Nav },
};
</script>

<style scoped>
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  background: var(--bs-primary);
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}
.back-to-top i {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}
.back-to-top:hover {
  background: #6776f4;
  color: #fff;
}
.back-to-top.active {
  visibility: visible;
  opacity: 1;
}
</style>
