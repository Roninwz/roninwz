<style lang="scss">
@import "../assets/scss/index";

.page-header {
  position: relative !important;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 80px;
  background-color: #fff;
  opacity: 0.98;
  box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
  transition: all 0.3s;

  .header-container {
    display: flex;
    width: 90%;
    height: 80px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

    a {
      color: #f98b6f;
    }

    .left-header {
      width: 200px;
    }

    .right-header {
      a {
        margin-left: 20px;
      }
    }
  }
}
</style>
<template>
  <header
    class="page-header"
    :style="
      $route.name === 'index'
        ? 'box-shadow:none'
        : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'
    "
  >
    <div class="header-container">
      <div class="left-header">
        <router-link :to="{ name: 'index' }">
          <img src="../assets/img/head.png" width="80" />
        </router-link>
      </div>
      <div class="right-header">
        <a href="https://roninwz.github.io">个人博客</a>
        <a href="https://github.com/roninwz/roninwz-ui">github</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
