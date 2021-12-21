<template>
  <header class="my-4 text-center">
    <h1>{{ title }}</h1>
  </header>
</template>
<script>
export default {
  name: 'SectionTitle',
  props: {
    title: String
  }
};
</script>
<style scoped>
</style>
