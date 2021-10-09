<style lang="scss" type="text/scss">
  .side-nav {
    z-index: 99;
    display: inline-block;
    padding: 0;
    margin: 32px 0;
    color: #3f536e;
    background-color: #fff;

    .group-container {
      margin-bottom: 32px;
    }

    .side-nav-title {
      padding: 0 24px 8px;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
      color: #8dabc4;
      text-transform: uppercase;
    }

    .side-nav-items {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.8;

      a {
        position: relative;
        display: block;
        padding: 8px 24px;
        font-weight: normal;
        line-height: 1.5;
        color: #3f536e;
        cursor: pointer;
      }

      .side-nav-group {
        position: relative;
        display: block;
        padding: 6px 0 6px 24px;
        font-weight: bold;
        color: #2c405a;
      }

      .slid-nav-component {
        position: relative;
        display: block;
        padding: 6px 24px 6px 32px;
        font-size: 14px;
        color: #616367;
      }

      .active {
        color: #f98b6f;
      }
    }
  }
</style>
<template>
  <div class="side-nav">
    <div v-for="title in (Object.keys(data))" v-bind:key="title.index" class="group-container">
      <p class="side-nav-title">{{title}}</p>
      <div class="side-nav-items" v-for="nav in data[title]" v-bind:key="nav.index">
        <div v-if="nav.desc">
          <router-link :class="$route.name===nav.name ? 'active' : ''" v-if="nav.name" :to="{name: nav.name}">{{nav.desc}}</router-link>
          <p v-else class="side-nav-group">{{nav.desc}}</p>
          <div v-for="item in nav.items" v-bind:key="item.index">
            <router-link :to="{name: item.name}" :class="$route.name===item.name ? 'active' : ''" class="slid-nav-component">{{item.desc}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navConf from '../nav.config.json'
export default {
  data () {
    return {
      data: navConf
    }
  }
}
</script>
