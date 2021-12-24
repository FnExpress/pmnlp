<template>
  <footer id="footer" class="pt-4">
    <div class="container-fluid bg-light">
      <div class="container">
        <div class="row p-4 text-center">
          <div class="col-md p-4">
            <h3 class="mb-4">联系我们</h3>
            <ul class="text-start p-5" style="list-style: none">
              <li>电话: 027-68775361</li>
              <li>邮编: 430072</li>
              <li>地址: 湖北省武汉市八一路武汉大学计算机学院A516</li>
            </ul>
          </div>
          <div class="col-md p-4">
            <h3 class="mb-4">地址</h3>
            <div id="map-container"></div>
          </div>
          <div class="col-md p-4">
            <h3>关注我们</h3>
            <div
              class="mx-auto"
              style="background: cyan; height: 160px; width: 160px"
            >
              <img
                class="img-fluid"
                src="https://spg-picgo.oss-cn-shenzhen.aliyuncs.com/20211224144027.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-secondary bg-opacity-25 p-5 text-center">
      Copyright 2021 © 版权所有 武汉大学语言与信息研究中心 @武汉大学
    </div>
  </footer>
</template>
<script>
export default {
  name: "foot",
  mounted() {
    // 获取到作为地图容器的DOM元素
    const container = document.querySelector("#map-container");
    console.log(container);

    // 创建地图实例
    const map = new AMap.Map(container, {
      zoom: 18,
      pitch: 45,
      rotation: 10,
      viewMode: "3D", //开启3D视图,默认为关闭
      center: [114.357599, 30.538512],
    });
    //构建自定义信息窗体
    new AMap.InfoWindow({
      anchor: "bottom-center",
      content:
        "<h4>武汉大学自然语言处理实验室</h4><div>地址：武汉大学计算机学院A516</div>",
    }).open(map, [114.357599, 30.538612]);
  },
};
</script>

<style>
#map-container {
  height: 200px;
}
</style>
