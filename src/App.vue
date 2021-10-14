<template>
  <div id="app">
    <div>
      <main-header />
      <div v-if="!isIndex" class="container">
        <side-nav class="nav" :config="navConf"/>
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
import coreNavConf from './router/core.router.js'
import vant2NavConf from './router/vant2.router.js'
import element2NavConf from './router/element2.router.js'

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
      navConf: {}
    };
  },
  watch: {
    $route() {
      this.isIndex = this.$route.name === "index";
      switch (this.$route.name) {
        case "core":
          this.navConf = coreNavConf;
          break;
        case "vant2":
          this.navConf = vant2NavConf;
          break;
        case "element2":
          this.navConf = element2NavConf;
          break;
        default:
          break;
      }
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
