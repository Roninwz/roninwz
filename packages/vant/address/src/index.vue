<!-- 地址选择器 -->
<template>
  <div class="picker">
    <van-popup
      position="bottom"
      class="popup"
      :value="show"
      @input="(val) => this.$emit('input', val)"
      @click-overlay="closeShow"
      @touchmove.prevent
    >
      <van-area
        :title="title"
        :area-list="areaList"
        :value="value"
        :columns-num="columnsNum"
        :columns-placeholder="['请选择', '请选择', '请选择']"
        @confirm="selectValue"
        @cancel="closeShow"
      />
    </van-popup>
  </div>
</template>

<script>
import { Area, Popup } from "vant";
import AreaList from "./area";
import "vant/lib/index.css";

export default {
  name: "Van2Address",
  components: {
    "van-area": Area,
    "van-popup": Popup,
  },
  props: {
    // 是否显示选择器弹窗
    show: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    // 弹窗标题
    title: {
      default: "",
      type: String,
    },
    // 城市级别
    columnsNum: {
      default: () => 3,
      type: Number,
    },
    value: {
      default: () => "",
      type: [String, Number],
    },
    defaultCode: {
      default: () => "",
      type: String,
    },
  },
  data() {
    return {
      areaList: AreaList,
    };
  },
  methods: {
    closeShow() {
      this.$emit("closeShow");
    },
    selectValue(arr) {
      this.closeShow();
      this.$emit("selectValue", arr);
    },
  },
};
</script>