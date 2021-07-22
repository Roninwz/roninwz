<template>
  <rz-tabs v-model="activeName" @tab-click="handleClick">
    <rz-tab-pane label="菜单1" name="first">菜单1</rz-tab-pane>
    <rz-tab-pane label="菜单2" name="second">菜单2</rz-tab-pane>
    <rz-tab-pane label="菜单3" name="third">菜单3</rz-tab-pane>
    <rz-tab-pane label="菜单4" name="fourth">菜单4</rz-tab-pane>
  </rz-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>
