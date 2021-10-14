# 快速上手

本节将介绍如何在项目中使用 roninwz-ui。

---

## 简介

`roninwz-ui` 是一款基于 `Vue.js 2.0` 的前端 UI 组件库，本人学习实践记录。

## 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```bash
npm install roninwz-ui --save
```

## 全局导入

```js
// 导入ui组件库
import RoninwzUI from "roninwz-ui";

import "roninwz-ui/lib/theme/index.css"; // 导入RoninwzUI样式

// 注册组件库
Vue.use(RoninwzUI);
```
