<template>
  <div class="page-header p-5 bg-light container-fluid text-center">
    <h1>实验室动态</h1>
  </div>
  <section id="more">
    <div class="container p-5">
      <div class="list-group p-5">
        <router-link
          :to="'/post/' + p.route"
          v-for="(p, i) in data"
          :key="p"
          class="list-group-item list-group-item-action p-3"
        >
          <div class="d-flex justify-content-between">
            <p class="text-primary">{{ p.title }}</p>
            <p class="text-secondary">{{ p.time }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../../../config.yaml";
export default {
  data() {
    return {
      data: data.activity,
    };
  },
};
</script>

<style scoped></style>
