<template>
  <div class="page-header p-5 bg-light container-fluid text-center">
    <h1>产品</h1>
  </div>
  <section id="more">
    <div class="container p-5">
      <div class="list-group p-5">
        <a
          :href="p.link"
          v-for="(p, i) in data"
          :key="p"
          class="list-group-item list-group-item-action p-3"
        >
          <div class="d-flex justify-content-between">
            <p class="text-primary">{{ p.title }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../../../config.yaml";
export default {
  data() {
    return {
      data: data.product,
    };
  },
};
</script>

<style scoped></style>
