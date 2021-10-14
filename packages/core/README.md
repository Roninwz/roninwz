# @roninwz-ui/core

## 简介

自定义基于 Vue.js 2.0 的完全自主封装的前端 UI 组件库

## 安装

npm 安装：`npm i @roninwz-ui/core --save`

yarn 安装： `yarn add @roninwz-ui/core --save`

## 使用

```js
// 导入核心ui组件库
import RoninwzUICore from "@roninwz-ui/core";

import "@roninwz-ui/core/lib/theme/index.css"; // 导入R@roninwz-ui/core样式

// 注册组件库
Vue.use(RoninwzUICore);
```

## 文档地址

<https://roninwz.github.io/roninwz-ui>

## ui 库维护

打包 ui 库：`yarn build:lib`

打包 css 样式：`yarn build:theme`

## 使用技术

webpack 打包

gulp 打包 scss

vue-cli3 初始化框架

markdown-it-container 生成文档
