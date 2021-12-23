<template>
  <header class="sticky-top">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm bg-body"
    >
      <div class="container">
        <router-link to="/">
          <a class="navbar-brand" href="#">
            <img
              src="http://106.55.183.245/img/logo.png"
              height="30"
              class="d-inline-block align-top"
              alt="Bootstrap"
            />
          </a>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link fs-5 active"
                aria-current="page"
                href="#sliders"
                >主页</a
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-5" to="/#research"
                >研究方向</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link fs-5"
                href="#tutor"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                导师介绍
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="dropdown-item" to="pm">彭敏</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="pm">田纲</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="pm"
                    >何炎祥</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#papers"> 论文介绍 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#team"> 成员介绍 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects"> 项目介绍 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact"> 联系方式 </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
