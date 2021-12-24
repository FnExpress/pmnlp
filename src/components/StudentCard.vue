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

  <!--  <div class="card bg-light">-->
  <!--    <div class="card-body text-center px-5 py-4">-->
  <!--      <img :src="getPhoto" class="mb-3 rounded-circle img-container" alt="" />-->
  <!--      <h3 class="card-title">{{ name }}</h3>-->
  <!--      <p class="card-text">{{ description }}</p>-->
  <!--      <div class="d-flex justify-content-center">-->
  <!--          <a v-if="email != null" :href="'mailto:' + email"-->
  <!--            ><i class="fas fa-envelope text-black"></i></a>-->
  <!--          <a v-if="link != null" :href="link" target="_blank"-->
  <!--            ><i class="fas fa-home text-black"></i-->
  <!--          ></a>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

  <div class="member" data-aos="zoom-in" data-aos-delay="400">
    <div class="pic"><img :src="getPhoto" alt="" class="img-fluid" /></div>
    <div class="member-info">
      <h4>{{ name }}</h4>
      <span>{{ description }}</span>
      <p>{{ description }}</p>
      <div class="social">
        <a v-if="email != null" :href="'mailto:' + email"
          ><i class="fas fa-envelope"></i
        ></a>
        <a v-if="link != null" :href="link" target="_blank"
          ><i class="fas fa-home"></i
        ></a>
        <!--        <a href=""><i class="fab fa-instagram"></i></a>-->
        <!--        <a href=""><i class="fab fa-linkedin"></i> </a>-->
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
/*i {*/
/*  font-size: 24px;*/
/*  padding: 1rem;*/
/*}*/

.img-container {
  width: 192px;
  height: 192px;
  object-fit: cover;
}

.member {
  position: relative;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
}

.member .pic {
  overflow: hidden;
  width: 150px;
  border-radius: 50%;
  margin: 0 auto 20px auto;
}

.member .pic img {
  transition: ease-in-out 0.3s;
}

.member:hover img {
  transform: scale(1.1);
}

.member h4 {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 20px;
  color: #36343a;
}

.member span {
  display: block;
  font-size: 15px;
  padding-bottom: 10px;
  position: relative;
  font-weight: 500;
}

.member span::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  background: #b5b3ba;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.member p {
  margin: 10px 0 0 0;
  font-size: 14px;
}

.member .social {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.member .social a {
  transition: ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 32px;
  height: 32px;
  background: #a8a5ae;
  text-decoration: none;
}

.member .social a i {
  color: #fff;
  font-size: 16px;
  margin: 0 2px;
}

.member .social a:hover {
  background: #009970;
}

.member .social a + a {
  margin-left: 8px;
}
</style>
