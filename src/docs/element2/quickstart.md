---
title: 快速上手
date: 2021-12-31 17:39:18
permalink: /pages/23914f/
categories:
  - element2
tags:
  -
---

# 快速上手

本节将介绍如何在项目中使用 @roninwz-ui/element2。

## 简介

自定义基于 element 二次封装的前端 UI 组件库 @roninwz-ui/element2

## 安装

npm 安装：`npm i @roninwz-ui/element2 --save`

yarn 安装： `yarn add @roninwz-ui/element2 --save`

## 全局导入

```js
// 先导入element组件库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 导入二次封装的element组件库
import RoninwzUIElement2 from "@roninwz-ui/element2";
import "@roninwz-ui/element2/lib/theme/index.css"; // 导入RoninwzUI样式
Vue.use(RoninwzUIElement2);
```

## 特性

- 基于 `Vue` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 浏览器支持

- 现代浏览器和 IE9 及以上
- [Electron](http://electron.atom.io/)
- [NW.js](http://nwjs.io)
