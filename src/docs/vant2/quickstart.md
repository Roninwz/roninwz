---
title: 快速上手
date: 2021-12-31 17:39:06
permalink: /pages/e0125d/
categories:
  - vant2
tags:
  -
---

# 快速上手

本节将介绍如何在项目中使用 @roninwz-ui/vant2。

## 简介

自定义基于 vant 二次封装的前端 UI 组件库 @roninwz-ui/vant2

## 安装

npm 安装：`npm i @roninwz-ui/vant2 --save`

yarn 安装： `yarn add @roninwz-ui/vant2 --save`

## 全局导入

```js
// 先导入vant组件库
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

// 导入基于vant二次封装的组件库
import RoninwzUIVant2 from "@roninwz-ui/vant2";
import "@roninwz-ui/vant2/lib/theme/index.css"; // 导入@roninwz-ui/vant2样式
Vue.use(RoninwzUIVant2);
```

## 特性

- 基于 `Vue` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 浏览器支持

- 现代浏览器和 IE9 及以上
- [Electron](http://electron.atom.io/)
- [NW.js](http://nwjs.io)
