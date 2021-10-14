# 尺子选择器

---

## 概述

基于 vant 二次封装的尺子选择器

## 基础布局

<div class="demo-block">
    <!-- 尺子选择器 -->
    <rz-button class="cell-box" @click="isShowRulerSelect = true">去选择</rz-button>
    <van2-ruler
      v-model="isShowRulerSelect"
      title="体重"
      :default-value="weight"
      :ispoint="false"
      unit="kg"
      :max-num="200"
      :min-num="10"
      @closeShow="closeShowRuler"
      @selectValue="selectValue"
    />
  <script>
  export default {
    data () {
      return {
        isShowRulerSelect: false, // 是否显示地址弹窗
        weight: 20, // 地址
      }
    },
    methods: {
       // 尺子选择器
      closeShowRuler() {
        this.isShowRulerSelect = false;
      },
      // 选择孕周
      selectValue(data) {
        this.weight = data;
      }
    }
  }
  </script>
</div>

::: demo

```html
<!-- 尺子选择器 -->
<rz-button class="cell-box" @click="isShowRulerSelect = true">去选择</rz-button>
<van2-ruler
  v-model="isShowRulerSelect"
  title="体重"
  :default-value="weight"
  :ispoint="false"
  unit="kg"
  :max-num="200"
  :min-num="10"
  @closeShow="closeShowRuler"
  @selectValue="selectValue"
/>
<script>
  export default {
    data() {
      return {
        isShowRulerSelect: false, // 是否显示地址弹窗
        weight: 20, // 地址
      };
    },
    methods: {
      // 尺子选择器
      closeShowRuler() {
        this.isShowRulerSelect = false;
      },
      // 选择孕周
      selectValue(data) {
        this.weight = data;
      },
    },
  };
</script>
```

:::

### 属性

| 参数          | 说明               | 类型    | 可选值 | 默认值 |
| ------------- | ------------------ | ------- | ------ | ------ |
| v-model       | 是否显示尺子选择器 | boolean | —      | false  |
| title         | 标题               | string  |
| default-value | 默认值             | Number  |
| max-num       | 最大值             | Number  |
| min-num       | 最小值             | Number  |
| unit          | 单位               | string  |
| ispoint       | 是否有小数点       | boolean | -      | true   |

### 事件

| 事件名称    | 说明                 | 回调参数 |
| ----------- | -------------------- | -------- |
| selectValue | 确定选择时的事件     | —        |
| closeShow   | 关闭选择器弹窗的事件 | —        |
