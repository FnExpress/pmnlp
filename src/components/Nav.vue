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
          class="collapse navbar-collapse justify-content-end fs-5"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/"> 主页 </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#research"
                >研究方向</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <router-link
                class="nav-link"
                to="/#tutor"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                导师介绍
              </router-link>
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
              <router-link class="nav-link" to="/#team"> 成员介绍 </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#projects">
                实验室工作
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#footer">
                联系方式
              </router-link>
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
