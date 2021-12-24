<template>
  <div class="carousel-item">
    <img :src="photo" alt="" class="w-100 text-center carousel-img" />
    <div class="carousel-caption d-none d-md-block">
      <p class="display-1">{{ subtitle }}</p>
      <p class="display-4">{{ subtitle2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["photo", "title", "subtitle", "subtitle2"],
};
</script>

<style scoped>
.carousel-caption {
  top: 30%;
}

.carousel-caption p {
  padding: 1rem;
}

carousel-img {
  filter: brightness(0.8);
}
</style>
