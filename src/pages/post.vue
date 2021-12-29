<template>
  <div class="page-header p-5 bg-light container-fluid text-center">
    <h1>实验室动态</h1>
  </div>
  <section class="p-5">
    <div class="container">
      <article class="post-body p-5">
        <router-view />
      </article>
    </div>
  </section>
</template>

<script>
import BaseLayout from "../layout/BaseLayout.vue";

export default {
  components: { BaseLayout },
};
</script>

<style>
.post-body {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.post-body img {
  width: 100%;
  height: auto;
}

.post-body h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: PingFang SC, Verdana, Helvetica Neue, Microsoft Yahei,
    Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
  font-weight: 100;
  color: #000;
  line-height: 1.35;
  margin-bottom: 0.6em;
}

.post-body h1 {
  text-align: center;
}

.post-body p {
  margin-bottom: 1.2em;
}
</style>
