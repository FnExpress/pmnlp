<template>
  <div class="member" data-aos="zoom-in" data-aos-delay="200">
    <div class="pic">
      <a class="glightbox" :href="getPhoto">
        <img :src="getPhoto" alt="" class="img-fluid" />
      </a>
    </div>
    <div class="member-info">
      <h4>{{ name }}</h4>
      <span>{{ description }}</span>
      <p>{{ description }}</p>
      <div class="social">
        <a :class="{ visibility: 'hidden' }" :href="'mailto:' + email"
          ><i class="fas fa-envelope"></i
        ></a>
        <a v-show="link" :href="link" target="_blank"
          ><i class="fas fa-home"></i
        ></a>
        <!--        <a href=""><i class="fab fa-instagram"></i></a>-->
        <!--        <a href=""><i class="fab fa-linkedin"></i> </a>-->
      </div>
    </div>
  </div>
</template>
<script>
const defaultPhoto =
  "https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211229012428.jpeg";
export default {
  name: "StudentCard",
  props: ["name", "grade", "photo", "field", "description", "email", "link"],
  computed: {
    getPhoto() {
      return this.photo || defaultPhoto;
    },
  },
  mounted() {
    var lightbox = new GLightbox();
    lightbox.on("open", (target) => {
      console.log("lightbox opened");
    });
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
