<template>
  <div class="carousel-item">
    <img :src="photo" class="img-fluid text-center" alt="" />
    <div class="carousel-caption d-none d-md-block">
      <h5>{{ subtitle }}</h5>
      <p>{{ subtitle2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["photo", "title", "subtitle", "subtitle2"],
};
</script>

<style>
@media (max-width: 1920px) {
  img {
    width: 100%;
  }
}
</style>
