<template>
  <section class="carousel-margin home-section">
    <div class="w-100">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            v-for="(item, index) in data.backgrounds"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :key="index"
            :aria-current="index === 0"
            :aria-label="index"
          ></button>
        </div>
        <div class="carousel-inner">
          <carousel-item
            v-for="(item, index) in data.backgrounds"
            :key="index"
            :photo="item"
            :class="{ active: index === 0 }"
            :subtitle="data.subtitle"
            :subtitle2="data.subtitle2"
            :title="data.title"
          ></carousel-item>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../../config.yaml";
import CarouselItem from "./CarouselItem.vue";
export default {
  components: { CarouselItem },

  data() {
    return { data };
  },
};
</script>

<style>
.carousel-margin {
}
</style>
