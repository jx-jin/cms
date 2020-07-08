<template>
  <div class="sliderTab">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#384156"
      text-color="#eee"
      active-text-color="#4dbcff"
    >
      <!--拥有子标题-->
      <template v-for="item in sliders">
        <el-submenu
          :index="item.path"
          :key="item.path"
          v-if="item.children&&item.children.length>0"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.text}}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :index="child.path"
            :key="child.path"
            @click="handlePath(child.path)"
          >
            <i :class="child.icon"></i>
            <span slot="title">{{child.text}}</span>
          </el-menu-item>
        </el-submenu>
        <!--没有子标题-->
        <el-menu-item :index="item.path" :key="item.path" @click="handlePath(item.path)" v-else>
          <i :class="item.icon"></i>
          <span slot="title">{{item.text}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: "/home",
      sliders: [
        {
          path: "/home",
          text: "首页",
          icon: "el-icon-s-home"
        },
        {
          path: "/shopmanage",
          text: "商品管理",
          icon: "el-icon-s-shop",
          children: [
            {
              path: "/shopmanage/businesslist",
              text: "商家列表",
              icon: "el-icon-s-grid"
            },
            {
              path: "/shopmanage/businessmanage",
              text: "商家管理",
              icon: "el-icon-s-check"
            },
            {
              path: "/shopmanage/orderlist",
              text: "订单列表",
              icon: "el-icon-s-data"
            }
          ]
        },
        {
          path: "/usermanage ",
          text: "用户管理",
          icon: "el-icon-s-custom",
          children: [
            {
              path: "/usermanage/userlist",
              text: "用户列表",
              icon: "el-icon-menu"
            }
          ]
        }
      ]
    };
  },
  watch: {
    "$route": {
      handler(to) {
        // console.log(to)
        this.defaultActive = to.path;
      },
      immediate: true,
    }
  },
  methods: {
    handlePath(path) {
      this.$router.push(path);
    }
  },
 
};
</script>

<style lang="scss">
.sliderTab {
  height: 100%;
  background-color: rgb(48, 65, 86);
}
</style>