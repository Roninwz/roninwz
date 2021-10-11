# @roninwz-ui/vant2

## 简介

自定义基于 vant 二次封装的前端 UI 组件库

## 安装

npm 安装：`npm i @roninwz-ui/vant2 --save`

yarn 安装： `yarn add @roninwz-ui/vant2 --save`

## 使用

```js
// 导入ui组件库
import RoninwzUIVant2 from "@roninwz-ui/vant2";

import "@roninwz-ui/vant2/lib/theme/index.css"; // 导入RoninwzUI样式

// 注册组件库
Vue.use(RoninwzUIVant2);
```

## 组件列表

## 文档地址

<https://roninwz.github.io/roninwz-ui>

## ui 库维护

打包 ui 库：`yarn build:lib`

打包 css 样式：`yarn build:theme`

## 使用技术

webpack 打包

gulp 打包 scss

vue-cli3 初始化框架
