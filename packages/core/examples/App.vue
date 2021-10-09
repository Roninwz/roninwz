<template>
  <div id="app">
    <div>
      <main-header />
      <div v-if="!isIndex" class="container">
        <side-nav class="nav" />
        <router-view class="view" />
      </div>
      <router-view v-else class="page" />
      <main-footer v-if="!isIndex" />
    </div>
  </div>
</template>

<script>
import mainHeader from "./components/header";
import mainFooter from "./components/footer";
import sideNav from "./components/side-nav";

export default {
  components: {
    mainHeader,
    sideNav,
    mainFooter,
  },
  data() {
    return {
      init: false,
      isIndex: true,
    };
  },
  watch: {
    $route() {
      this.isIndex = this.$route.name === "index";
    },
  },
  mounted() {
    //  这里模拟数据请求
    setTimeout(() => {
      this.init = true;
    }, 250);
  },
};
</script>

<style lang="scss" type="text/scss">
@import "../src/style/index";

.container {
  width: 90%;
  margin: 24px auto;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);

  .nav {
    float: left;
    width: 210px;
  }

  .view {
    float: left;
    width: calc(100% - 215px);
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}

.container::after {
  display: block;
  clear: both;
  content: "";
}
</style>
