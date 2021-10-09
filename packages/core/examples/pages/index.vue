<template>
  <div  class="pg-index">
    <div class="index-container">
      <p>Roninwz UI 组件库,仅供学习记录使用</p>
    </div>
    <div class="separate-panel">
      <div class="about">
        <router-link :to="{name: 'giud'}">开始使用</router-link>
        <a target="_blank" class="btn-github" href="https://github.com/roninwz/roninwz-ui">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      height: document.documentElement.clientHeight
    }
  }
}
</script>
<style type="text/scss" lang="scss">
  .pg-index {
    .index-container {
      width: 960px;
      padding: 100px 0;
      margin: 0 auto;
      text-align: center;

      p {
        margin-top: 56px;
        font-size: 32px;
        color: #f98b6f;
      }
    }

    .separate-panel {
      position: relative;

      .about {
        position: absolute;
        top: 20px;
        z-index: 9;
        width: 100%;
        height: 200px;
        text-align: center;
        background: #fff;

        a {
          display: inline-block;
          width: 190px;
          height: 56px;
          margin: 0 35px;
          font-size: 18px;
          line-height: 56px;
          color: #fff;
          cursor: pointer;
          background-image: linear-gradient(90deg, #fdc3c3 0%, #f98b6f 100%);
          border-radius: 28px;
          box-shadow: 0 2px 6px 0 rgba(51, 105, 231, 0.4);
          transition: all 0.3s;
        }

        .btn-github {
          color: #f98b6f;
          background: #fff;
          border: 1px solid #f98b6f;
          box-shadow: none;
        }
      }
    }
  }
</style>
