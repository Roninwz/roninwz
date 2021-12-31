---
title: dialog
date: 2021-12-31 17:39:18
permalink: /pages/ca7bb0/
categories:
  - element2
tags:
  - 
---
# dialog 弹窗

---

## 概述

基于 element 二次封装的弹窗

## 基础布局

<div class="demo-block">
    <rz-button type="primary" @click="isShowDialog = true" @sureClick="sureClick">点击</rz-button>
    <el2-dialog :show.sync="isShowDialog" title="弹窗">
    </el2-dialog>
  <script>
  export default {
    data () {
      return {
        isShowDialog: false, // 是否显示弹窗
      }
    },
    methods: {
      sureClick() {
        console.log("点击确定按钮");
      }
    }
  }
  </script>
</div>

::: demo

```html
<rz-button type="primary" @click="isShowDialog = true" @sureClick="sureClick"
  >点击</rz-button
>
<el2-dialog :show.sync="isShowDialog" title="弹窗"></el2-dialog>
<script>
  export default {
    data() {
      return {
        isShowDialog: false, // 是否显示弹窗
      };
    },
    methods: {
      sureClick() {
        console.log("点击确定按钮");
      },
    },
  };
</script>
```

:::

### 属性

| 参数    | 说明            | 类型    | 可选值 | 默认值 |
| ------- | --------------- | ------- | ------ | ------ |
| visible | 是否显示 Dialog | boolean | —      | false  |
| title   | Dialog 的标题   | string  |
| width   | Dialog 的宽度   | string  |

### 插槽

| name | 说明          |
| ---- | ------------- |
| —    | Dialog 的内容 |

### 事件

| 事件名称  | 说明                      | 回调参数 |
| --------- | ------------------------- | -------- |
| sureClick | Dialog 点击确定按钮的事件 | —        |
