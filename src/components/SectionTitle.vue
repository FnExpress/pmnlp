<template>
  <header class="p-5 text-center">
    <h1>{{ title }}</h1>
  </header>
</template>
<script>
export default {
  name: "section-title",
  props: {
    title: String,
  },
};
</script>
<style scoped></style>
