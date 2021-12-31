---
title: 快速上手
date: 2021-12-31 17:38:55
permalink: /pages/3d0c0d/
categories:
  - core
tags:
  -
---

# 快速上手

本节将介绍如何在项目中使用 @roninwz-ui/core。

## 简介

自定义基于 Vue.js 2.0 的完全自主封装的前端 UI 组件库@roninwz-ui/core

## 安装

npm 安装：`npm i @roninwz-ui/core --save`

yarn 安装： `yarn add @roninwz-ui/core --save`

## 全局导入

```js
// 导入核心ui组件库
import RoninwzUICore from "@roninwz-ui/core";

import "@roninwz-ui/core/lib/theme/index.css"; // 导入R@roninwz-ui/core样式

// 注册组件库
Vue.use(RoninwzUICore);
```

## 特性

- 基于 `Vue` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 浏览器支持

- 现代浏览器和 IE9 及以上
- [Electron](http://electron.atom.io/)
- [NW.js](http://nwjs.io)
