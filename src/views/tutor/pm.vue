<template>
  <BaseLayout>
    <div class="container-fluid">导师风采</div>
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

<style scoped></style>
