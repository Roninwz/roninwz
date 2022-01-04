---
title: video
date: 2021-12-31 17:38:55
permalink: /pages/ae9c53/
categories:
  - core
tags:
  -
---

# video

---

## 概述

基于 video 标签封装的视频播放组件

## 基础布局

::: demo

```html
<!-- 视频播放器 -->
<RzVideo
  :id="videoId"
  title="视频标题"
  width="500px"
  height="200px"
  :video-url="videoUrl"
  :poster-url="videoPoster"
  @onplay="onplay"
/>
<script>
  export default {
    data() {
      return {
        videoId: "20210807-0001", // 视频id
        videoUrl: "https://www.runoob.com/try/demo_source/movie.mp4", // 视频链接
        videoPoster: "https://www.baidu.com/img/flexible/logo/pc/result.png", // 视频封面地址
      };
    },
    methods: {
      // 视频播放事件
      onplay() {
        // 可以通过视频id控制统一事件内只播放一个视频
      },
    },
  };
</script>
```

:::

### 属性

| 参数       | 说明     | 类型   | 可选值 | 默认值 |
| ---------- | -------- | ------ | ------ | ------ |
| id         | 视频 id  | string | —      | false  |
| title      | 视频标题 | string | -      |
| width      | 视频宽度 | string | 500px  |
| height     | 视频高度 | string | 200px  |
| video-url  | 视频链接 | string | -      |
| poster-url | 视频封面 | string | -      |

### 事件

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| onplay   | 视频播放事件 | —        |
