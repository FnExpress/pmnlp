<template>
  <section class="home-section">
    <div class="container">
      <SectionTitle id="works" title="实验室工作" />
      <h2 class="text-center p-4">项目</h2>
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
      <h2 class="text-center p-4">专利</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="post-box">
            <div class="post-img">
              <img
                src="https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211224140834.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <span class="post-date">Tue, September 15</span>
            <h3 class="post-title">
              Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur
              sit
            </h3>
            <a href="blog-single.html" class="readmore stretched-link mt-auto"
              ><span>Read More</span><i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="post-box">
            <div class="post-img">
              <img
                src="https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211224140834.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <span class="post-date">Fri, August 28</span>
            <h3 class="post-title">
              Et repellendus molestiae qui est sed omnis voluptates magnam
            </h3>
            <a href="blog-single.html" class="readmore stretched-link mt-auto"
              ><span>Read More</span><i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="post-box">
            <div class="post-img">
              <img
                src="https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211224140834.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <span class="post-date">Mon, July 11</span>
            <h3 class="post-title">Quia assumenda est et veritatis aut quae</h3>
            <a href="blog-single.html" class="readmore stretched-link mt-auto"
              ><span>Read More</span><i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
      <h2 class="text-center p-4">产品</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="post-box">
            <div class="post-img">
              <img
                src="https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211224140834.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <span class="post-date">Tue, September 15</span>
            <h3 class="post-title">
              Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur
              sit
            </h3>
            <a href="blog-single.html" class="readmore stretched-link mt-auto"
              ><span>Read More</span><i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="post-box">
            <div class="post-img">
              <img
                src="https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211224140834.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <span class="post-date">Fri, August 28</span>
            <h3 class="post-title">
              Et repellendus molestiae qui est sed omnis voluptates magnam
            </h3>
            <a href="blog-single.html" class="readmore stretched-link mt-auto"
              ><span>Read More</span><i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="post-box">
            <div class="post-img">
              <img
                src="https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211224140834.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <span class="post-date">Mon, July 11</span>
            <h3 class="post-title">Quia assumenda est et veritatis aut quae</h3>
            <a href="blog-single.html" class="readmore stretched-link mt-auto"
              ><span>Read More</span><i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
      <h2 class="text-center p-4">活动</h2>
      mentor
      <div class="row">
        <div class="col-lg-4">
          <div class="post-box">
            <div class="post-img">
              <img
                src="https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211224140834.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <span class="post-date">Tue, September 15</span>
            <h3 class="post-title">
              Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur
              sit
            </h3>
            <a href="blog-single.html" class="readmore stretched-link mt-auto"
              ><span>Read More</span><i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="post-box">
            <div class="post-img">
              <img
                src="https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211224140834.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <span class="post-date">Fri, August 28</span>
            <h3 class="post-title">
              Et repellendus molestiae qui est sed omnis voluptates magnam
            </h3>
            <a href="blog-single.html" class="readmore stretched-link mt-auto"
              ><span>Read More</span><i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="post-box">
            <div class="post-img">
              <img
                src="https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211224140834.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <span class="post-date">Mon, July 11</span>
            <h3 class="post-title">Quia assumenda est et veritatis aut quae</h3>
            <a href="blog-single.html" class="readmore stretched-link mt-auto"
              ><span>Read More</span><i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import data from "/config.yaml";
import SectionTitle from "./SectionTitle.vue";
export default {
  name: "works",
  components: {
    SectionTitle,
  },
  data() {
    return {
      data,
    };
  },
};
</script>

<style>
h2 {
  text-align: center;
}

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

.post-box {
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
  transition: 0.3s;
  height: 100%;
  overflow: hidden;
  padding: 30px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.post-box .post-img {
  overflow: hidden;
  margin: -30px -30px 15px -30px;
  position: relative;
}
.post-box .post-img img {
  transition: 0.5s;
}
.post-box .post-date {
  font-size: 16px;
  font-weight: 600;
  color: rgba(1, 41, 112, 0.6);
  display: block;
  margin-bottom: 10px;
}
.post-box .post-title {
  font-size: 24px;
  color: #012970;
  font-weight: 700;
  margin-bottom: 18px;
  position: relative;
  transition: 0.3s;
}
.post-box .readmore {
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 1;
  transition: 0.3s;
}
.post-box .readmore i {
  line-height: 0;
  margin-left: 4px;
  font-size: 18px;
}
.post-box:hover .post-title {
  color: #4154f1;
}
.post-box:hover .post-img img {
  transform: rotate(6deg) scale(1.2);
}
</style>
