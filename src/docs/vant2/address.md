---
title: address
date: 2021-12-31 17:39:06
permalink: /pages/8c4fc2/
categories:
  - vant2
tags:
  - 
---
# address 选择器

---

## 概述

基于 vant 二次封装的地址选择器

## 基础布局

<div class="demo-block">
    <!-- 地址选择器 -->
    <rz-button class="cell-box" @click="isShowAddressSelect = true">去选择</rz-button>
    <van2-Address
      title="地址选择器"
      :show="isShowAddressSelect"
      @selectValue="selectAddress"
      @closeShow="closeShowAddress"
      @cancel="isShowAddressSelect = false"
    />
  <script>
  export default {
    data () {
      return {
        isShowAddressSelect: false, // 是否显示地址弹窗
        address: '', // 地址
      }
    },
    methods: {
      // 底部弹窗带取消按钮
      closeShowAddress() {
        this.isShowAddressSelect = false;
      },
      // 选择地址
      selectAddress(data) {
        if (!data[2]) return; // 当索引3的数据为空时，表示只选择了省，这种情况不进行操作（至少要选择到市）
        this.address = data[0].name + data[1].name + data[2].name;
      }
    }
  }
  </script>
</div>

::: demo

```html
<!-- 地址选择器 -->
<rz-button class="cell-box" @click="isShowAddressSelect = true"
  >去选择</rz-button
>
<van2-Address
  title="地址选择器"
  :show="isShowAddressSelect"
  @selectValue="selectAddress"
  @closeShow="closeShowAddress"
  @cancel="isShowAddressSelect = false"
/>
<script>
  export default {
    data() {
      return {
        isShowAddressSelect: false, // 是否显示地址弹窗
        address: "", // 地址
      };
    },
    methods: {
      // 底部弹窗带取消按钮
      closeShowAddress() {
        this.isShowAddressSelect = false;
      },
      // 选择地址
      selectAddress(data) {
        if (!data[2]) return; // 当索引3的数据为空时，表示只选择了省，这种情况不进行操作（至少要选择到市）
        this.address = data[0].name + data[1].name + data[2].name;
      },
    },
  };
</script>
```

:::

### 属性

| 参数  | 说明               | 类型    | 可选值 | 默认值 |
| ----- | ------------------ | ------- | ------ | ------ |
| show  | 是否显示地址选择器 | boolean | —      | false  |
| title | 地址选择器的标题   | string  |

### 事件

| 事件名称         | 说明                     | 回调参数 |
| ---------------- | ------------------------ | -------- |
| selectValue      | 确定地址选择时的事件     | —        |
| closeShowAddress | 关闭地址选择器弹窗的事件 | —        |
| cancel           | 取消地址选择器选择的事件 | —        |
