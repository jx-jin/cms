<template>
  <el-container>
    <el-aside width="200px">
      <sliderTabbar />
    </el-aside>
    <container />
  </el-container>
</template>

<script>
//这个界面的主要作用是综合左侧和右侧内容区
import container from "./components/container";
import sliderTabbar from "./components/sliderTabbar";
export default {
  name: "layout",
  components: {
    container,
    sliderTabbar
  }
};
</script>

<style lang="scss">
.header-context {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.el-container {
  height: 100%;
}
</style>