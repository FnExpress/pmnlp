<template>
  <!--    <svg-->
  <!--      class="bd-placeholder-img rounded-circle"-->
  <!--      width="140"-->
  <!--      height="140"-->
  <!--      xmlns="http://www.w3.org/2000/svg"-->
  <!--      role="img"-->
  <!--      aria-label="Placeholder: 140x140"-->
  <!--      preserveAspectRatio="xMidYMid slice"-->
  <!--      focusable="false"-->
  <!--    >-->
  <!--      <title>Placeholder</title>-->
  <!--      <rect width="100%" height="100%" fill="#777" />-->
  <!--      <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>-->
  <!--    </svg>-->

  <!--    <h2>张三</h2>-->
  <!--    <p>知识图谱 喜欢学习</p>-->
  <!--    <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>-->

  <div class="card bg-light">
    <div class="card-body text-center px-5 py-4">
      <img :src="getPhoto" class="mb-3 rounded-circle img-container" alt="" />
      <h3 class="card-title">{{ name }}</h3>
      <p class="card-text">{{ description }}</p>
      <div class="d-flex justify-content-center">
        <a v-if="email != null" :href="'mailto:' + email"
          ><i class="bi bi-envelope"></i
        ></a>
        <a v-if="link != null" :href="link" target="_blank"
          ><i class="bi bi-house"></i
        ></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StudentCard",
  props: ["name", "grade", "photo", "field", "description", "email", "link"],
  data() {
    return {
      defaultPhoto:
        "https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211208132614.png?x-oss-process=style/student",
    };
  },
  computed: {
    getPhoto() {
      return this.photo == null || this.photo === ""
        ? this.defaultPhoto
        : this.photo;
    },
  },
};
</script>
<style scoped>
i {
  font-size: 24px;
  padding: 1rem;
}

.img-container {
  width: 192px;
  height: 192px;
  object-fit: cover;
}
</style>
