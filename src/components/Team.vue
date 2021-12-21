<template>
  <section id="team">
    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <SectionTitle title="成员介绍" />
      <div class="row">
        <h2 class="team-subtitle my-4">博士研究生</h2>
        <StudentCard v-for="n in 3" />
        <h2 class="team-subtitle my-4">学术硕士研究生</h2>
        <StudentCard v-for="n in 6" />
        <h2 class="team-subtitle my-4">专业硕士研究生</h2>
        <StudentCard v-for="n in 6" />
        <h3 class="team-subtitle my-4">曾在本组的同学</h3>
        <StudentCard v-for="n in 10" />
      </div>
      <!-- /.row -->
    </div>
  </section>
</template>

<script>
import StudentCard from "./StudentCard.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  components: { SectionTitle, StudentCard },
};
</script>

<style scoped>
.marketing {
  text-align: center;
}

.team-subtitle {
}
</style>
