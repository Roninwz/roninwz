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
        <span v-for="(item,index) in routersArr" class="nav-title" :class="{active: currentIndex === index}" :key="index" @click="routerPush(item.path, index)">{{item.name}}</span>
        <!-- <span class="nav-title" @click="routerPush('/core')">core UI库</span>
        <span class="nav-title" @click="routerPush('/vant2')">vant2 UI库</span>
        <span class="nav-title" @click="routerPush('/element2')">element2 UI库</span> -->
        <a class="nav-title" href="https://roninwz.github.io">个人博客</a>
        <a class="nav-title" href="https://github.com/roninwz/roninwz-ui">github</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: null,
      routersArr: [
        {
          path: '/core',
          name: 'core UI库',
        },
        {
          path: '/vant2',
          name: 'vant2 UI库',
        },
        {
          path: '/element2',
          name: 'element2 UI库',
        },
      ]
    };
  },
  watch: {
    $route() {
      switch (this.$route.name) {
        case "core":
          this.currentIndex = 0;
          break;
        case "vant2":
          this.currentIndex = 1;
          break;
        case "element2":
          this.currentIndex = 2;
          break;
        default:
          this.currentIndex = -1;
          break;
      }
    },
  },
  methods:{
    routerPush(path, index){
      this.currentIndex = index;
      this.$router.push({
        path: path,
      });
    }
  }
};
</script>
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
      // color: #f98b6f;
      color: #000;
    }
    .active {
      color: #f98b6f;
    }

    .left-header {
      width: 200px;
    }

    .right-header {
      .nav-title {
        margin-left: 20px;
      }
    }
  }
}
</style>