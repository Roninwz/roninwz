---
title: svg
date: 2021-12-31 17:38:55
permalink: /pages/3b56e0/
categories:
  - core
tags:
  -
---

# svg

---

## 概述

svg 组件

## 前置条件

1. 1.安装 svg loader 依赖`npm install svg-sprite-loader --save-dev`

2. 2.添加 loader 配置

```js
 chainWebpack: (config) => {
    // svg是个基础loader
    const svgRule = config.module.rule("svg");

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear();

    // 添加要替换的 loader
    svgRule
      .test(/\.svg$/)
      .include.add(resolve('src/icons')).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .tap((options) => {
        // eslint-disable-next-line no-param-reassign
        options = {
          symbolId: 'icon-[name]',
        };
        return options;
      });
  },
```

3. 3.在使用 svg 的页面中导入 svg 图标

## 基础布局

::: demo

```html
<!-- svg组件 -->
<RzSvg iconClass="titile" iconStyle="width:100px;height:100px;" />
<script>
  // import "@/icons/svg/titile.svg";
  export default {
    data() {
      return {};
    },
    methods: {},
  };
</script>
```

:::

### 属性

| 参数      | 说明         | 类型   | 可选值 | 默认值 |
| --------- | ------------ | ------ | ------ | ------ |
| iconClass | svg 图标名称 | string | —      | -      |
| iconStyle | svg 图标样式 | string | —      | -      |
