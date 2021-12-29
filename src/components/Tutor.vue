<template>
  <section class="home-section">
    <div class="container">
      <SectionTitle id="tutors" title="导师介绍" />

      <div class="row">
        <div v-for="(n, i) in data" :key="n.name" class="col-lg-4 col-md-6">
          <router-link :to="'/tutor/' + i">
            <div class="member" data-aos="zoom-in" data-aos-delay="400">
              <div class="pic">
                <img :src="n.photo" alt="" class="img-fluid" />
              </div>
              <div class="member-info">
                <h4>{{ n.name }}</h4>
                <span>{{ n.subtitle }}</span>
                <div class="social"></div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
import data from "../../config.yaml";
export default {
  components: { SectionTitle },
  data() {
    return {
      data: data.tutors,
    };
  },
};
</script>

<style scoped>
.tutor-photo-container {
  display: flex;
  justify-content: center;
}

.tutor-img {
  align-self: start;
  height: auto;
  width: 200px;
}

.tutor-content {
  color: #969696;
  padding-left: 48px;
}

.member {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}

.member .pic {
  overflow: hidden;
}

.member .member-info {
  position: absolute;
  bottom: -80px;
  left: 20px;
  right: 20px;
  background: #fff;
  padding: 20px 0;
  color: #433f39;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
}

.member h4 {
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 16px;
  color: #6c665c;
  position: relative;
  padding-bottom: 10px;
  font-family: "Poppins", sans-serif;
}

.member h4::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  background: #ffcf88;
  bottom: 0;
  left: calc(50% - 25px);
}

.member span {
  display: block;
  font-size: 13px;
}

.member .social {
  margin-top: 15px;
}

.member .social a {
  transition: color 0.3s;
  color: #7a7368;
}

.member .social a:hover {
  color: #ffb03b;
}

.member .social i {
  font-size: 16px;
  margin: 0 2px;
}

@media (max-width: 992px) {
  .member {
    margin-bottom: 110px;
  }
}
</style>
