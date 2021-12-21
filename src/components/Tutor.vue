<template>
  <div class="container">
    <SectionTitle title="导师介绍"/>
    <div class="row g-3">
      <div class="col-lg-6 row">
        <img alt="" class="tutor-img col-md-6" :src="photo"/>
        <div class="d-flex flex-column justify-content-between col-md-6">
          <h3>彭敏</h3>
          <dl>
            <dt>简介</dt>
            <dd>武汉大学教授，博士生导师</dd>
            <dt>电话</dt>
            <dd>027-68775667</dd>
            <dt>电子邮箱</dt>
            <dd>pengm@whu.edu.cn</dd>
          </dl>
          <a href="#" class="btn btn-primary align-self-end">更多</a>
        </div>
      </div>
      <div class="col-lg-6 row">
        <img alt="" class="tutor-img col-md-6" :src="photo"/>
        <div class="d-flex flex-column justify-content-between col-md-6">
          <h3>彭敏</h3>
          <dl>
            <dt>简介</dt>
            <dd>武汉大学教授，博士生导师</dd>
            <dt>电话</dt>
            <dd>027-68775667</dd>
            <dt>电子邮箱</dt>
            <dd>pengm@whu.edu.cn</dd>
          </dl>
          <a href="#" class="btn btn-primary align-self-end">更多</a>
        </div>
      </div>
      <div class="col-lg-6 row">
        <img alt="" class="tutor-img col-md-6 d-block mx-auto" :src="photo"/>
        <div class="d-flex flex-column justify-content-between col-md-6 text-center text-md-start">
          <h3>彭敏</h3>
          <dl>
            <dd>武汉大学教授，博士生导师</dd>
            <dd>Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.</dd>
          </dl>
          <a href="#" class="btn btn-primary align-self-end">更多</a>
        </div>
      </div>
      <div class="col-lg-6 row">
        <img alt="" class="tutor-img col-md-6" :src="photo"/>
        <div class="d-flex flex-column justify-content-between col-md-6">
          <h3>彭敏</h3>
          <dl>
            <dt>简介</dt>
            <dd>武汉大学教授，博士生导师</dd>
            <dt>电话</dt>
            <dd>027-68775667</dd>
            <dt>电子邮箱</dt>
            <dd>pengm@whu.edu.cn</dd>
          </dl>
          <a href="#" class="btn btn-primary align-self-end">更多</a>
        </div>
      </div>
      <div class="col-lg-6 row">
        <img alt="" class="tutor-img col-md-6" :src="photo"/>
        <div class="d-flex flex-column justify-content-between col-md-6">
          <h3>彭敏</h3>
          <dl>
            <dt>简介</dt>
            <dd>武汉大学教授，博士生导师</dd>
            <dt>电话</dt>
            <dd>027-68775667</dd>
            <dt>电子邮箱</dt>
            <dd>pengm@whu.edu.cn</dd>
          </dl>
          <a href="#" class="btn btn-primary align-self-end">更多</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";

export default {
  components: {SectionTitle},
  data() {
    return {
      photo:
          "https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211207192023.png",
    };
  },
};
</script>

<style scoped>

.tutor-photo-container {
  display: flex;
  justify-content: center;
}

.tutor-img {
  align-self: start;
  height: auto;
  width: 200px;
}

.tutor-content {
  color: #969696;
  padding-left: 48px;
}
</style>
