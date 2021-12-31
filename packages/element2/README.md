# @roninwz-ui/element2

## 简介

自定义基于 element 二次封装的前端 UI 组件库

## 安装

npm 安装：`npm i @roninwz-ui/element2 --save`

yarn 安装： `yarn add @roninwz-ui/element2 --save`

## 使用

```js
// 先导入element组件库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 导入二次封装的element组件库
import RoninwzUIElement2 from "@roninwz-ui/element2";
import "@roninwz-ui/element2/lib/theme/index.css"; // 导入二次封装的element组件库样式
Vue.use(RoninwzUIElement2);
```

## 文档地址

<https://roninwz.github.io/roninwz-ui>

## ui 库维护

打包文档：`yarn build:docs`

打包 ui 库：`yarn build:lib`

打包 css 样式：`yarn build:theme`

## 使用技术

webpack 打包

gulp 打包 scss

vue-cli3 初始化框架

markdown-it-container 生成文档

## 可参考文档

可模仿组件库：<https://github.com/NLRX-WJC/Vue-Components-Library>
