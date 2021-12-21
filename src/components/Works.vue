<template>
  <div class="container">
    <div>项目</div>
    <table class="VirusTable">
      <thead>
        <tr>
          <th>
            <div>项目名称</div>
          </th>
          <th>
            <div>项目时间</div>
          </th>
          <th>
            <div>项目类型</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data.projects" :key="index">
          <td>{{ data.projects[index].title }}</td>
          <td>{{ data.projects[index].time }}</td>
          <td>{{ data.projects[index].description }}</td>
        </tr>
      </tbody>
    </table>
    <div>专利</div>
    <div>产品</div>
  </div>
</template>
<script>
import data from "/config.yaml";

export default {
  name: "works",
  data() {
    return {
      data,
    };
  },
};
</script>

<style>
.VirusTable {
  table-layout: fixed;
  width: 100%;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  border-spacing: 2px 6px;
  font-size: 0.938rem;
  color: #4d5054;
  border-collapse: collapse;
}
</style>
