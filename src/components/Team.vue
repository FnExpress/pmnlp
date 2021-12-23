<template>
  <section id="team">
    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <SectionTitle title="成员介绍" />
      <h2 class="team-subtitle my-4">博士研究生</h2>
      <div class="row g-4">
        <div v-for="(p, index) in doctor" class="col-md-6 col-lg-3">
          <StudentCard
            :name="p.name"
            :photo="p.photo"
            :email="p.email"
            :link="p.link"
          />
        </div>
      </div>
      <h2 class="team-subtitle my-4">学术硕士研究生</h2>
      <div class="row g-4">
        <div v-for="p in academic" class="col-md-6 col-lg-3">
          <StudentCard
            :name="p.name"
            :photo="p.photo"
            :email="p.email"
            :link="p.link"
          />
        </div>
      </div>
      <h2 class="team-subtitle my-4">专业硕士研究生</h2>
      <div class="row g-4">
        <div v-for="p in professional" class="col-md-6 col-lg-3">
          <StudentCard
            :name="p.name"
            :photo="p.photo"
            :email="p.email"
            :link="p.link"
          />
        </div>
      </div>
      <h3 class="team-subtitle my-4">曾在本组的同学</h3>
      <div class="row g-4">
        <div v-for="p in graduate" class="col-md-6 col-lg-3">
          <StudentCard
            :name="p.name"
            :photo="p.photo"
            :email="p.email"
            :link="p.link"
          />
        </div>
      </div>
      <!-- /.row -->
    </div>
  </section>
</template>

<script>
import StudentCard from "./StudentCard.vue";
import SectionTitle from "./SectionTitle.vue";
import data from "../../config.yaml";
export default {
  components: { SectionTitle, StudentCard },
  data() {
    return {
      doctor: data.students.doctor,
      academic: data.students["academic master"],
      professional: data.students["professional master"],
      graduate: [],
    };
  },
};
</script>

<style scoped>
.marketing {
  text-align: center;
}

.team-subtitle {
}
</style>
