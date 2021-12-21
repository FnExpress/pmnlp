<template>
  <section id="team">
    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <SectionTitle title="人员介绍"/>
      <div class="row">
        <StudentCard v-for="n in 10"/>

      </div><!-- /.row -->
    </div>
  </section>
</template>

<script>
import StudentCard from "./StudentCard.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  components: {SectionTitle, StudentCard}
};
</script>

<style scoped>
  .marketing {
    text-align: center;
  }
  header > p {

  }
</style>
