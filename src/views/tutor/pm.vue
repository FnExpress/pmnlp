<template>
  <BaseLayout>
    <div class="page-header p-5 bg-light container-fluid text-center">
      <h1>导师介绍</h1>
    </div>
    <tutor-info />
  </BaseLayout>
</template>

<script>
import BaseLayout from "../../layout/BaseLayout.vue";
import TutorInfo from "../../components/TutorInfo.vue";
export default {
  components: { TutorInfo, BaseLayout },
};
</script>

<style scoped>
.page-header {
}
</style>
