<style lang="scss" scoped>
.page-footer {
  padding: 30px 0 30px;
  color: #f98b6f;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.8);

  .footer-container {
    width: 90%;
    margin: 0 auto;
  }

  .text-left {
    display: flex;
    font-size: 12px;
    color: #5e6d82;
    align-items: center;

    a {
      color: #f98b6f;
    }

    p {
      margin-right: 50px;
    }
  }
}
</style>

<template>
  <div class="page-footer">
    <div class="footer-container">
      <div class="text-left">
        <p>author: roninwz</p>
        <p>email: 1947914887@qq.com</p>
        <p>
          github:
          <a href="https://github.com/roninwz"
            >https://github.com/roninwz/roninwz-ui</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
