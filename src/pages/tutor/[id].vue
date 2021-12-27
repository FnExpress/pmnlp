<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-md-4">
        <div class="w-50 float-md-end mx-auto">
          <img :src="data.photo" alt="" class="img-fluid"/>
        </div>
      </div>
      <div class="col-md-8">
        <h3>{{ data.name }}</h3>
        <dl>
          <section v-if="data.subtitle" class="tutor-section">
            <dd class="text-primary">{{ data.subtitle }}</dd>
          </section>
          <section v-if="data.description" class="tutor-section">
            <dd class="tutor-description">
              {{ data.description }}
            </dd>
          </section>
          <section v-if="data.interest" class="tutor-section"></section>
          <section v-if="data.education" class="tutor-section">
            <dt class="text-info">教育背景</dt>
            <dd v-for="p in data.education" :key="p">
              {{ p.time }} {{ p.degree }}
            </dd>
          </section>
          <section v-if="data.job" class="tutor-section">
            <dt class="text-info">工作背景</dt>
            <table class="table table-borderless table-sm">
              <tbody>
              <tr v-for="p in data.job" :key="p">
                <td>{{ p.time }}</td>
                <td>{{ p.position }}</td>
              </tr>
              </tbody>
            </table>
          </section>
          <section v-if="data.paper" class="tutor-section">
            <dt class="text-info">代表性论文</dt>
            <ul class="list-group py-3">
              <li v-for="p in data.paper" class="list-group-item">
                <p>
                  {{ p.title }}
                  <a v-if="p.url" :href="p.url">[PDF]</a>
                </p>
              </li>
            </ul>
          </section>
          <section v-if="data.award" class="tutor-section">
            <dt class="text-info">奖项</dt>
            <ul class="list-group py-3">
              <li v-for="p in data.award" class="list-group-item">
                {{ p }}
              </li>
            </ul>
          </section>
          <section v-if="data.contact" class="tutor-section">
            <dt class="text-info">联系方式</dt>
            <table class="table table-borderless">
              <tbody>
              <tr>
                <td>地址</td>
                <td>{{ data.contact.address }}</td>
              </tr>
              <tr>
                <td>电话</td>
                <td>{{ data.contact.phone }}</td>
              </tr>
              <tr>
                <td>邮箱</td>
                <td>{{ data.contact.email }}</td>
              </tr>
              <tr>
                <td>网页</td>
                <td>{{ data.contact.link }}</td>
              </tr>
              </tbody>
            </table>
          </section>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import data from "../../../config.yaml";

export default {
  name: "tutor-info",
  props: ['id'],
  data() {
    return {
      data: data.tutors[this.id],
    };
  },
  watch: {
    id(toParams, previousParams) {
      this.data = data.tutors[toParams];
    }
  }
};
</script>
<style>
.tutor-description {
  text-indent: 2rem;
  text-align: justify;
}
</style>
