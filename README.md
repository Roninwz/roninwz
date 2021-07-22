# roninwz-ui

## 安装

npm 安装：`npm i roninwz-ui --save`

yarn 安装： `yarn add roninwz-ui --save`

## 使用

```js
// 导入ui组件库
import RoninwzUI from "roninwz-ui";

import "roninwz-ui/lib/theme/index.css"; // 导入RoninwzUI样式

// 注册组件库
Vue.use(RoninwzUI);
```

## 文档地址

<https://roninwz.github.io/roninwz-ui>

## ui 库维护

打包文档：`yarn build`

打包 ui 库：`yarn lib`

打包 css 样式：`yarn build:theme`

## 使用技术

webpack 打包

gulp 打包 scss

vue-cli3 初始化框架

markdown-it-container 生成文档
