<template>
  <BaseLayout>
    <div class="page-header p-5 bg-light container-fluid text-center">
      <h1>导师介绍</h1>
    </div>
    <tutor-info :data="tutor" />
  </BaseLayout>
</template>

<script>
import BaseLayout from "../../layout/BaseLayout.vue";
import TutorInfo from "../../components/TutorInfo.vue";
import data from "../../../config.yaml";
export default {
  data() {
    return {
      tutor: data.tutors[this.$route.params.id],
    };
  },
  created() {
    this.$watch(
      () => this.$route.params.id,
      (toParams, previousParams) => {
        this.tutor = data.tutors[toParams];
      }
    );
  },
  components: { TutorInfo, BaseLayout },
};
</script>

<style scoped>
.page-header {
}
</style>
