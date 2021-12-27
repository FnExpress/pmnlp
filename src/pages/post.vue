<template>
    <div class="page-header p-5 bg-light container-fluid text-center">
      <h1>实验室动态</h1>
    </div>
    <section class="p-5">
      <div class="container">
        <article class="post-body p-5">
          <router-view/>
        </article>
      </div>
    </section>
</template>

<script>
import BaseLayout from "../layout/BaseLayout.vue";

export default {
  components: {BaseLayout}
};
</script>

<style>
.post-body {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.post-body img {
  width: 100%;
  height: auto;
}
</style>
