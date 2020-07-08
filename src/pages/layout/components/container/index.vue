<template>
  <el-container>
    <el-header>
      <container_header />
    </el-header>
    <el-main>
      <container_content />
    </el-main>
  </el-container>
</template>

<script>
import container_content from "./container-content";
import container_header from "./container-header";
//目的为了综合上面的两个
export default {
  name: "container",
  components: {
    container_content,
    container_header
  }
};
</script>

<style lang="scss">
.el-header {
  padding: 0;
}
.el-breadcrumb {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.el-dropdown {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
</style>