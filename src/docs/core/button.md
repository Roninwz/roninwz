---
title: button
date: 2021-12-31 17:38:55
permalink: /pages/1f4703/
categories:
  - core
tags:
  -
---

# button 按钮

---

## 概述

按钮

## 基础布局

::: demo

```html
<div class="demo-block">
  <div>
    <rz-button>默认按钮</rz-button>
    <rz-button type="primary">主要按钮</rz-button>
    <rz-button type="success">成功按钮</rz-button>
    <rz-button type="info">信息按钮</rz-button>
    <rz-button type="warning">警告按钮</rz-button>
    <rz-button type="danger">危险按钮</rz-button>
    <rz-button plain>朴素按钮</rz-button>
  </div>
  <br />
  <div>
    <rz-button type="primary" plain>主要按钮</rz-button>
    <rz-button type="success" plain>成功按钮</rz-button>
    <rz-button type="info" plain>信息按钮</rz-button>
    <rz-button type="warning" plain>警告按钮</rz-button>
    <rz-button type="danger" plain>危险按钮</rz-button>
  </div>
  <br />
  <div>
    <rz-button round>圆角按钮</rz-button>
    <rz-button type="primary" round>主要按钮</rz-button>
    <rz-button type="success" round>成功按钮</rz-button>
    <rz-button type="info" round>信息按钮</rz-button>
    <rz-button type="warning" round>警告按钮</rz-button>
    <rz-button type="danger" round>危险按钮</rz-button>
  </div>
  <br />
  <rz-button icon="rz-icon-search" circle></rz-button>
  <rz-button type="primary" icon="rz-icon-edit" circle></rz-button>
  <rz-button type="success" icon="rz-icon-check" circle></rz-button>
  <rz-button type="info" icon="rz-icon-message" circle></rz-button>
  <rz-button type="warning" icon="rz-icon-star-off" circle></rz-button>
  <rz-button type="danger" icon="rz-icon-drzete" circle></rz-button>

  <script>
    export default {
      data() {
        return {};
      },
    };
  </script>
</div>
```

:::

### 属性

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | —      |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| plain       | 是否朴素按钮   | boolean | —                                                  | false  |
| round       | 是否圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否圆形按钮   | boolean | —                                                  | false  |
| loading     | 是否加载中状态 | boolean | —                                                  | false  |
| disabled    | 是否禁用状态   | boolean | —                                                  | false  |
| icon        | 图标类名       | string  | —                                                  | —      |
| autofocus   | 是否默认聚焦   | boolean | —                                                  | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |
