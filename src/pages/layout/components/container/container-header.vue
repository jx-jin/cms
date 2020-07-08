<template>
  <el-header class="header-context">
    <!--面包屑-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item,index) in breadcrumb"
        :key="index"
        :to="{path:item.path}"
      >{{item.text}}</el-breadcrumb-item>
    </el-breadcrumb>

    <!--下拉菜单-->
    <el-dropdown @command="handleBack">
      <span class="el-dropdown-link">
        您好:king
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item command="a">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import Cookie from "js-cookie"
export default {
  name: "container_header",
  data() {
    return {
      breadcrumb: []
    };
  },
  watch: {
    "$route": {
      handler(to) {
        // console.log(to.meta.breadcrumb);
        this.breadcrumb = to.meta.breadcrumb;
      },
    immediate: true
    }
  },
  methods:{
    handleBack(command){
      if(command=="a"){
        Cookie.remove("token");
        this.$router.go(0)
      }
    }
  }
};
</script>

<style lang="scss">
</style>