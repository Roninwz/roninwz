---
title: tabs
date: 2021-12-31 17:38:55
permalink: /pages/150a5e/
categories:
  - core
tags:
  -
---

# Tabs 标签页

---

## 概述

分隔内容上有关联但属于不同类别的数据集合。

## 基础布局

::: demo

```html
<rz-tabs v-model="activeName">
  <rz-tab-pane label="菜单1" name="first"
    >我是菜单1的内容，点击上面切换</rz-tab-pane
  >
  <rz-tab-pane label="菜单2" name="second"
    >我是菜单2的内容，点击上面切换</rz-tab-pane
  >
  <rz-tab-pane label="菜单3" name="third"
    >我是菜单3的内容，点击上面切换</rz-tab-pane
  >
  <rz-tab-pane label="菜单4" name="fourth"
    >我是菜单4的内容，点击上面切换</rz-tab-pane
  >
</rz-tabs>
<script>
  export default {
    data() {
      return {
        activeName: "first",
      };
    },
  };
</script>
```

:::
